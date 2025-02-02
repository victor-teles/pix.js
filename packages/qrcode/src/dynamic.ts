import { PixQrCodeType, PointOfInitiationMethod, dynamicPixSchema, toDynamicPix } from '@pix.js/core'
import { toDataURL } from 'qrcode'
import { DynamicQrCodeParams, GetPayloadParams, InstantPayload, ScheduledPayload } from './types'

/**
 * Creates a dynamic PIX QR code
 * @param params The parameters for the dynamic PIX QR code
 * @returns The dynamic PIX QR code object
 */
export const createDynamic = (params: DynamicQrCodeParams) => {
  const payloadWithDefaultValues = {
    merchantAccountInfo: {
      gui: params.merchantAccountInfo.gui ?? 'br.gov.bcb.pix',
      url: params.merchantAccountInfo.url,
      merchantAdditionalInfo: params.merchantAccountInfo.merchantAdditionalInfo,
      fss: params.merchantAccountInfo.fss,
    },
    pointOfInitiationMethod: params.pointOfInitiationMethod ?? PointOfInitiationMethod.OnTimeOnly,
    merchantCategoryCode: params.merchantCategoryCode ?? '0000',
    transactionCurrency: params.transactionCurrency ?? '986',
    countryCode: params.countryCode ?? 'BR',
    merchantName: params.merchantName ?? '',
    merchantCity: params.merchantCity ?? '',
    additionalData: {
      txId: params.additionalData?.txId ?? '***',
    },
    value: params.value,
    postalCode: params.postalCode,
    unreservedTemplate: {
      gui: params.unreservedTemplate?.gui,
      url: params.unreservedTemplate?.url,
    },
  }

  const parsed = dynamicPixSchema.parse(payloadWithDefaultValues)
  const brcode = toDynamicPix(parsed)

  return {
    brcode,
    toBase64: () => toDataURL(brcode),
    type: PixQrCodeType.Dynamic,
    getPayload: async (getPayloadParams?: GetPayloadParams) => {
      const url = new URL(`https://${params.merchantAccountInfo.url}`)
      if (getPayloadParams?.dpp) url.searchParams.append('dpp', getPayloadParams.dpp)
      if (getPayloadParams?.codMun) url.searchParams.append('codMun', getPayloadParams.codMun)

      const res = await fetch(url.toString())
      const jwt = await res.text()
      const parts = jwt.split('.').map((b64) => Buffer.from(b64, 'base64').toString('utf-8'))
      const header = JSON.parse(parts[0])
      const payload = JSON.parse(parts[1])

      return { payload, header } as {
        payload: InstantPayload | ScheduledPayload
        header: Record<string, unknown>
      }
    },
  }
}
