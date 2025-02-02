import { ZodError } from 'zod'

export type ValidationResult<T> = {
  success: boolean
  error?: ZodError<T>
}
