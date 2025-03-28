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

export class ParserError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ParserError'
  }
}
