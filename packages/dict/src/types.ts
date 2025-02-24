export type PixDictApiOptions = {
  /**
   * Dict api url
   */
  url: string
  /**
   * If true, the validator will throw an error if the qrcode is invalid
   * Defaults to false
   */
  signature: {
    /**
     * Certificate private key
     */
    privateKey: string
  }
}

export type DictResponse = {
  /**
   * Error
   */
  error?: DictError
  /**
   * Signature
   */
  signature: Record<string, unknown>
  /**
   * Response time
   */
  responseTime: Date
  /**
   * Correlation id
   */
  correlationId: string
}

export type DictError = {
  type: string
  title: string
  status: number
  detail: string
  violations: Violation[]
}

export type Violation = {
  reason: string
  value: string
  property: string
}
