import { keyDetector } from '@pix.js/core'

/**
 * Validates a PIX key
 * @param key The key to validate
 * @returns True if the key is valid, false otherwise
 */
export function validatePixKey(key: string): boolean {
  return (
    keyDetector.isCPF(key) ||
    keyDetector.isCNPJ(key) ||
    keyDetector.isEmail(key) ||
    keyDetector.isPhone(key) ||
    keyDetector.isRandom(key)
  )
}
