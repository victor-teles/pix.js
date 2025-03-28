import { crc16ccitt } from 'crc'
import { DynamicPixPayload } from './schemas'
import { ParserError, PointOfInitiationMethod } from './types'
import { appendToBrCode, deconstructEntries, formatText } from './utils'

export const toDynamicPix = (payload: DynamicPixPayload) => {
  const buildPayloadParts = () => {
    const parts = [
      ['00', '01'],
      ['01', payload.pointOfInitiationMethod?.toString().padStart(2, '0') ?? ''],
      [
        '26',
        [
          appendToBrCode('00', payload.merchantAccountInfo.gui ?? 'br.gov.bcb.pix'),
          appendToBrCode('25', payload.merchantAccountInfo.url),
        ].join(''),
      ],
      ['52', payload.merchantCategoryCode ?? '0000'],
      ['53', payload.transactionCurrency ?? '986'],
      ['54', payload.value?.toFixed(2) ?? ''],
      ['58', payload.countryCode ?? 'BR'],
      ['59', formatText(payload.merchantName, 25)],
      ['60', formatText(payload.merchantCity, 15)],
      ['61', payload.postalCode ?? ''],
      ['62', appendToBrCode('05', payload.additionalData.txId ?? '')],
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

export const parseDynamicPix = (payload: string): DynamicPixPayload => {
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
        url: entries['26'].subEntries?.['25']?.value,
      },
      pointOfInitiationMethod: entries['01']?.value
        ? (Number.parseInt(entries['01']?.value) as PointOfInitiationMethod)
        : undefined,
      merchantCategoryCode: entries['52']?.value,
      transactionCurrency: entries['53']?.value,
      countryCode: entries['58']?.value,
      merchantName: entries['59']?.value,
      merchantCity: entries['60']?.value,
      postalCode: entries['61']?.value,
      additionalData: {
        txId: entries['62'].subEntries?.['05']?.value,
      },
      unreservedTemplate: entries['80']
        ? {
            gui: entries['80'].subEntries?.['00']?.value,
            url: entries['80'].subEntries?.['25']?.value,
          }
        : undefined,
    }
  } catch (error) {
    throw new ParserError(`Invalid dynamic pix payload ${error}`)
  }
}

export const isDynamicPix = (payload: string): boolean => {
  try {
    const entries = deconstructEntries(payload)

    entries['26'].subEntries = deconstructEntries(entries['26'].value)

    return !!entries['26'].subEntries['25']?.value
  } catch (error) {
    return false
  }
}
