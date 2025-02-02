import { keyDetector } from '@pix.js/core'

export function validatePixKey(key: string): boolean {
  return (
    keyDetector.isCPF(key) ||
    keyDetector.isCNPJ(key) ||
    keyDetector.isEmail(key) ||
    keyDetector.isPhone(key) ||
    keyDetector.isRandom(key)
  )
}
