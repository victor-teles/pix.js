import { parseStaticPix, staticPixSchema } from '@pix.js/core'
import { validateCrc } from './crc-validator'
import { ValidateOptions } from './types'

/**
 * Validates a static PIX QR code payload
 * @param payload The QR code payload string to validate
 * @param options Validation options
 * @param options.throwError If true, throws an error when validation fails. Defaults to false
 * @returns True if the payload is valid, false otherwise
 * @throws {Error} If validation fails and throwError is true
 */
export const validateStaticQrCode = (payload: string, options: ValidateOptions = { throwError: false }): boolean => {
  if (options.throwError) {
    const parsed = staticPixSchema.parse(parseStaticPix(payload))
    return !!parsed
  }

  const parsed = staticPixSchema.safeParse(parseStaticPix(payload))
  const crcValid = validateCrc(payload)
  return parsed.success && crcValid
}
