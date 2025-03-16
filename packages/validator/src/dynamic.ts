import { dynamicPixSchema, parseDynamicPix } from '@pix.js/core'
import { isValidCrc } from './crc-validator'
import { ValidateOptions } from './types'

/**
 * Validates a dynamic PIX QR code payload
 * @param payload The QR code payload string to validate
 * @param options Validation options
 * @param options.throwError If true, throws an error when validation fails. Defaults to false
 * @returns True if the payload is valid, false otherwise
 * @throws {Error} If validation fails and throwError is true
 */
export const isValidDynamicQrCode = (payload: string, options: ValidateOptions = { throwError: false }): boolean => {
  if (options.throwError) {
    const parsed = dynamicPixSchema.parse(parseDynamicPix(payload))
    return !!parsed
  }

  const parsed = dynamicPixSchema.safeParse(parseDynamicPix(payload))
  const crcValid = isValidCrc(payload)
  return parsed.success && crcValid
}
