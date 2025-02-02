import { parseStaticPix, staticPixSchema } from '@pix.js/core'

export const validateStaticQrCode = (payload: string): boolean => {
  const parsed = staticPixSchema.safeParse(parseStaticPix(payload))
  return parsed.success
}
