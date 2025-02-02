import { ZodError } from 'zod'

export type ValidationResult<T> = {
  success: boolean
  error?: ZodError<T>
}

export type ValidateOptions = {
  /**
   * If true, the validator will throw an error if the qrcode is invalid
   * Defaults to false
   */
  throwError?: boolean
}
