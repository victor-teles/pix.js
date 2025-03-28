import { PixQrCodeType, getPixKeyType, staticPixSchema, toStaticPix } from '@pix.js/core'
import { toDataURL } from 'qrcode'

import { StaticQrCodeParams } from './types'

/**
 * Creates a static PIX QR code
 * @param params The parameters for the static PIX QR code
 * @returns The static PIX QR code object
 */
export const createStatic = (params: StaticQrCodeParams) => {
  const payloadWithDefaultValues = {
    merchantAccountInfo: {
      gui: params.merchantAccountInfo.gui ?? 'br.gov.bcb.pix',
      key: params.merchantAccountInfo.key,
      merchantAdditionalInfo: params.merchantAccountInfo.merchantAdditionalInfo,
      fss: params.merchantAccountInfo.fss,
    },
    merchantCategoryCode: params.merchantCategoryCode ?? '0000',
    transactionCurrency: params.transactionCurrency ?? '986',
    countryCode: params.countryCode ?? 'BR',
    merchantName: params.merchantName ?? '',
    merchantCity: params.merchantCity ?? '',
    additionalData: {
      txId: params.additionalData?.txId ?? '***',
    },
    value: params.value,
    postalCode: params.postalCode ?? null,
    unreservedTemplate: {
      gui: params.unreservedTemplate?.gui,
      url: params.unreservedTemplate?.url,
    },
  }

  const parsed = staticPixSchema.parse(payloadWithDefaultValues)
  const brcode = toStaticPix(parsed)

  return {
    brcode,
    toBase64: () => toDataURL(brcode),
    toDataUrl: () => toDataURL(brcode),
    type: PixQrCodeType.Static,
    keyType: getPixKeyType(params.merchantAccountInfo.key),
  }
}
