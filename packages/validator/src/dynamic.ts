import { dynamicPixSchema, parseDynamicPix } from '@pix.js/core'

export const validateDynamicQrCode = (payload: string): boolean => {
  const parsed = dynamicPixSchema.safeParse(parseDynamicPix(payload))
  return parsed.success
}
