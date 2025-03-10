import { PixKeyType, PixQrCodeType, PointOfInitiationMethod } from '@pix.js/core'

export type StaticQrCodeParams = {
  merchantAccountInfo: {
    /** Global Unique Identifier defaults to br.gov.bcb.pix */
    gui?: string
    /** Pix key used to receive the payment */
    key: string
    /** A message that will be displayed on the payment screen */
    merchantAdditionalInfo?: string
    /** ISPB of the financial institution */
    fss?: string
  }
  /**
   * Value of the payment, defaults to 0
   * When not provided, use can edit the value on the payment screen
   */
  value?: number
  /** Merchant Category Code defaults to 0000 */
  merchantCategoryCode?: string
  /** Transaction Currency defaults to 986 */
  transactionCurrency?: string
  /** Country Code defaults to BR */
  countryCode?: string
  /** Merchant Name */
  merchantName: string
  /** Merchant City */
  merchantCity: string
  additionalData?: {
    /** Transaction ID used to identify the payment, defaults to *** */
    txId: string
  }
  /** Postal Code */
  postalCode?: string
  unreservedTemplate?: {
    gui?: string
    url?: string
  }
}

export type DynamicQrCodeParams = {
  merchantAccountInfo: {
    /** Global Unique Identifier defaults to br.gov.bcb.pix */
    gui?: string
    /** URL used to get data about the payment */
    url: string
    /** A message that will be displayed on the payment screen */
    merchantAdditionalInfo?: string
    /** ISPB of the financial institution */
    fss?: string
  }
  /**
   * Point of Initiation Method, when not provided this qrcode can be used multiple times
   * Defaults to OnTimeOnly
   */
  pointOfInitiationMethod?: PointOfInitiationMethod
  /**
   * Value of the payment
   */
  value?: number
  /**
   * Merchant Category Code
   * @default 0000
   */
  merchantCategoryCode?: string
  /** Transaction Currency
   * @default 986
   */
  transactionCurrency?: string
  /** Country Code defaults to BR
   * @default BR
   */
  countryCode?: string
  /** Merchant Name */
  merchantName: string
  /** Merchant City */
  merchantCity: string
  additionalData: {
    /** Transaction ID used to identify the payment
     * @default ***
     */
    txId: string
  }
  /** Postal Code */
  postalCode?: string
  unreservedTemplate?: {
    gui?: string
    url?: string
  }
}

export type GetPayloadParams = {
  /**
   * Expected date of payment
   */
  dpp?: string
  /**
   * City code
   */
  codMun?: string
}

export type ParseOptions = {
  /**
   * If true, the qrcode will be validated and error will be thrown if it's invalid
   * @default true
   */
  validate?: boolean
}

export enum DynamicStatus {
  Ativa = 'ATIVA',
  Concluida = 'CONCLUIDA',
  RemovidaPeloUsuarioRecebedor = 'REMOVIDA_PELO_USUARIO_RECEBEDOR',
  RemovidaPeloPsp = 'REMOVIDA_PELO_PSP',
}

type InfoAdicional = {
  readonly nome: string
  readonly valor: string
}

export type ScheduledPayload = {
  readonly revisao: number
  readonly calendario: {
    readonly criacao: string
    readonly apresentacao: string
    readonly dataDeVencimento?: string
    readonly validadeAposVencimento?: number
  }
  readonly devedor?: {
    readonly cpf?: string
    readonly cnpj?: string
    readonly nome?: string
  }
  readonly recebedor?: {
    readonly cpf?: string
    readonly cnpj?: string
    readonly nome: string
    readonly logradouro: string
    readonly cidade: string
    readonly utf: string
    readonly cep: string
  }
  readonly valor: {
    readonly original?: string
    readonly multa?: string
    readonly juros?: string
    readonly abatimento?: string
    readonly desconto?: string
    readonly final: string
  }
  readonly chave: string
  readonly txid: string
  readonly solicitacaoPagador?: string
  readonly infoAdicionais: readonly InfoAdicional[]
  readonly status: DynamicStatus
}

export type InstantPayload = {
  readonly revisao: number
  readonly calendario: {
    readonly criacao: string
    readonly apresentacao: string
    readonly expiracao: number
  }
  readonly devedor?: {
    readonly cpf?: string
    readonly cnpj?: string
    readonly nome: string
  }
  readonly valor: {
    readonly original: string
    readonly modalidadeAlteracao?: 0 | 1
  }
  readonly chave: string
  readonly txid: string
  readonly solicitacaoPagador?: string
  readonly infoAdicionais?: readonly InfoAdicional[]
  readonly status: DynamicStatus
}

export type DynamicQrCode = {
  /**
   * The QRCode as a base64 string
   */
  toBase64: () => Promise<string>
  /**
   * The QRCode as a data URL
   */
  toDataUrl: () => Promise<string>
  /**
   * The type of the QRCode
   */
  type: PixQrCodeType

  /**
   * The brcode of the QRCode
   */
  brcode: string
  /**
   * The payload of the QRCode
   */
  getPayload: () => Promise<{
    payload: InstantPayload | ScheduledPayload
    header: Record<string, unknown>
  }>
}

export type StaticQrCode = {
  /**
   * The QRCode as a base64 string
   */
  toBase64: () => Promise<string>
  /**
   * The QRCode as a data URL
   */
  toDataUrl: () => Promise<string>
  /**
   * The type of the QRCode
   */
  type: PixQrCodeType
  /**
   * The key type of the QRCode
   */
  keyType: PixKeyType
}
