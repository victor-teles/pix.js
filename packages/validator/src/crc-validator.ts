import { crc16ccitt } from 'crc'

/**
 * Validates the CRC of a PIX QR code
 * @param qrcode - The PIX QR code to validate
 * @returns True if the CRC is valid, false otherwise
 */
export const validateCrc = (qrcode: string): boolean => {
  const payload = qrcode.slice(0, -4)
  const crc = qrcode.slice(-4)

  const crcCalculated = crc16ccitt(payload).toString(16).toUpperCase().padStart(4, '0')
  return crcCalculated === crc
}
