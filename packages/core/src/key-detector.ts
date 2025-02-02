import { PixKeyType } from './types'

export const pixKeyRegexes = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+)?([55]{2})?\s?\(?([0-9]{2})\)?\s?([9])([0-9]{4})-?([0-9]{4})$/,
  random: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
}

export function isCPF(cpf: string): boolean {
  const cpfDigits = cpf.replace(/[^\d]/g, '')
  if (cpfDigits.length !== 11) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += Number.parseInt(cpfDigits.charAt(i)) * (10 - i)
  }
  let digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(cpfDigits.charAt(9))) return false

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += Number.parseInt(cpfDigits.charAt(i)) * (11 - i)
  }
  digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(cpfDigits.charAt(10))) return false

  return true
}

export function isCNPJ(cnpj: string): boolean {
  const cnpjDigits = cnpj.replace(/[^\d]/g, '')
  if (cnpjDigits.length !== 14) return false

  let size = cnpjDigits.length - 2
  let numbers = cnpjDigits.substring(0, size)
  const digits = cnpjDigits.substring(size)
  let sum = 0
  let pos = size - 7

  for (let i = size; i >= 1; i--) {
    sum += Number.parseInt(numbers.charAt(size - i)) * pos--
    if (pos < 2) pos = 9
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number.parseInt(digits.charAt(0))) return false

  size = size + 1
  numbers = cnpjDigits.substring(0, size)
  sum = 0
  pos = size - 7

  for (let i = size; i >= 1; i--) {
    sum += Number.parseInt(numbers.charAt(size - i)) * pos--
    if (pos < 2) pos = 9
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number.parseInt(digits.charAt(1))) return false

  return true
}

export const keyDetector = {
  isCPF: (key: string) => isCPF(key),
  isCNPJ: (key: string) => isCNPJ(key),
  isEmail: (key: string) => pixKeyRegexes.email.test(key),
  isPhone: (key: string) => pixKeyRegexes.phone.test(key),
  isRandom: (key: string) => pixKeyRegexes.random.test(key),
}

export const getPixKeyType = (key: string): PixKeyType => {
  switch (true) {
    case keyDetector.isCPF(key):
      return PixKeyType.Cpf
    case keyDetector.isCNPJ(key):
      return PixKeyType.Cnpj
    case keyDetector.isEmail(key):
      return PixKeyType.Email
    case keyDetector.isPhone(key):
      return PixKeyType.Phone
    case keyDetector.isRandom(key):
      return PixKeyType.Evp
    default:
      throw new Error('Invalid Pix key')
  }
}
