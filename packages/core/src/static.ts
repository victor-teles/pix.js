import { crc16ccitt } from 'crc'
import { StaticPixPayload } from './schemas'
import { ParserError } from './types'
import { appendToBrCode, deconstructEntries, formatText } from './utils'

export const toStaticPix = (payload: StaticPixPayload) => {
  const buildPayloadParts = () => {
    const parts = [
      ['00', '01'],
      [
        '26',
        [
          appendToBrCode('00', payload.merchantAccountInfo.gui ?? 'br.gov.bcb.pix'),
          appendToBrCode('01', payload.merchantAccountInfo.key),
          payload.merchantAccountInfo.merchantAdditionalInfo
            ? appendToBrCode('02', payload.merchantAccountInfo.merchantAdditionalInfo)
            : '',
          payload.merchantAccountInfo.fss ? appendToBrCode('03', payload.merchantAccountInfo.fss) : '',
        ].join(''),
      ],
      ['52', payload.merchantCategoryCode ?? '0000'],
      ['53', payload.transactionCurrency ?? '986'],
      ['54', payload.value?.toFixed(2) ?? ''],
      ['58', payload.countryCode ?? 'BR'],
      ['59', formatText(payload.merchantName, 25)],
      ['60', formatText(payload.merchantCity, 15)],
      ['61', payload.postalCode ?? ''],
      ['62', appendToBrCode('05', payload.additionalData.txId)],
      payload.unreservedTemplate
        ? [
            '80',
            appendToBrCode('00', payload.unreservedTemplate?.gui ?? ''),
            appendToBrCode('25', payload.unreservedTemplate?.url ?? ''),
          ]
        : [],
    ]

    return parts
      .filter(([_, value]) => value)
      .map(([id, value]) => appendToBrCode(id, value))
      .join('')
  }

  const payloadString = `${buildPayloadParts()}6304`
  const crcResult = crc16ccitt(payloadString).toString(16).toUpperCase().padStart(4, '0')

  return `${payloadString}${crcResult}`
}

export const parseStaticPix = (payload: string): StaticPixPayload => {
  try {
    const entries = deconstructEntries(payload)

    entries['26'].subEntries = deconstructEntries(entries['26']?.value ?? '')
    entries['62'].subEntries = deconstructEntries(entries['62']?.value ?? '')

    if (entries['80']) {
      entries['80'].subEntries = deconstructEntries(entries['80']?.value ?? '')
    }

    return {
      merchantAccountInfo: {
        gui: entries['26'].subEntries?.['00']?.value,
        key: entries['26'].subEntries?.['01']?.value,
        merchantAdditionalInfo: entries['26'].subEntries?.['02']?.value,
        fss: entries['26'].subEntries?.['03']?.value,
      },
      merchantCategoryCode: entries['52']?.value,
      transactionCurrency: entries['53']?.value,
      countryCode: entries['58']?.value,
      merchantName: entries['59']?.value,
      merchantCity: entries['60']?.value,
      postalCode: entries['61']?.value,
      additionalData: {
        txId: entries['62'].subEntries?.['05']?.value,
      },
      value: entries['54']?.value ? Number.parseFloat(entries['54'].value) : undefined,
      unreservedTemplate: entries['80']
        ? {
            gui: entries['80'].subEntries?.['00']?.value,
            url: entries['80'].subEntries?.['25']?.value,
          }
        : undefined,
    }
  } catch (error) {
    throw new ParserError(`Invalid static pix payload ${error}`)
  }
}

export const isStaticPix = (payload: string): boolean => {
  try {
    const entries = deconstructEntries(payload)

    entries['26'].subEntries = deconstructEntries(entries['26'].value)

    return !!entries['26'].subEntries['01']?.value
  } catch (error) {
    return false
  }
}
