import { describe, expect, it } from 'vitest'
import { isStaticPix, parseStaticPix, toStaticPix } from './static'

describe('toStaticPix', () => {
  it('should return a valid static pix payload', () => {
    const payload = toStaticPix({
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        key: '07059813390',
        merchantAdditionalInfo: 'teste',
      },
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      merchantName: 'Victor Mesquita',
      merchantCity: 'São Paulo',
      additionalData: {
        txId: '1234567890',
      },
      value: 1,
    })

    expect(payload).toBe(
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5',
    )
  })

  it('should return a valid static pix payload with postal code', () => {
    const payload = parseStaticPix(
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5',
    )

    expect(payload).toEqual({
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        key: '07059813390',
        fss: undefined,
        merchantAdditionalInfo: 'teste',
      },
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      merchantName: 'Victor Mesquita',
      merchantCity: 'Sao Paulo',
      postalCode: undefined,
      additionalData: {
        txId: '1234567890',
      },
      value: 1,
    })
  })
})

describe('isStaticPix', () => {
  it('should return true if the payload is a static pix', () => {
    const payload =
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5'

    expect(isStaticPix(payload)).toBe(true)
  })

  it('should return false if the payload is not a static pix', () => {
    const payload =
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5919SqalaPay Pagamentos6007Barueri62070503***630469E8'

    expect(isStaticPix(payload)).toBe(false)
  })
})
