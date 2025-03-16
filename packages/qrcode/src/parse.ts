import { PixQrCodeType, isStaticPix, parseDynamicPix, parseStaticPix } from '@pix.js/core'
import { isValidDynamicQrCode, isValidStaticQrCode } from '@pix.js/validator'
import { ParseOptions } from './types'

/**
 * Parses a PIX QR code from a string
 * @param qrcode The PIX QR code string to parse
 * @param options Parse options
 * @param options.validate If true, validates the QR code and throws an error if it's invalid
 * @returns The parsed PIX QR code object
 */
export const parseFromString = (qrcode: string, options: ParseOptions = { validate: true }) => {
  if (isStaticPix(qrcode)) {
    const parsed = parseStaticPix(qrcode)
    if (options.validate) {
      isValidStaticQrCode(qrcode, { throwError: true })
    }

    return {
      ...parsed,
      type: PixQrCodeType.Static,
    }
  }

  if (options.validate) {
    isValidDynamicQrCode(qrcode, { throwError: true })
  }

  return {
    ...parseDynamicPix(qrcode),
    type: PixQrCodeType.Dynamic,
  }
}
