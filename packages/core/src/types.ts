export enum PointOfInitiationMethod {
  OnTimeOnly = 12,
}

export enum PixKeyType {
  Cpf = 'CPF',
  Cnpj = 'CNPJ',
  Email = 'EMAIL',
  Phone = 'PHONE',
  Evp = 'EVP',
}

export enum PixQrCodeType {
  Static = 'STATIC',
  Dynamic = 'DYNAMIC',
}

// export type ParsedQrCode = {
//   type: PixQrCodeType
//   payload: DynamicPixPayload | StaticPixPayload
// }

export class ParserError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ParserError'
  }
}
