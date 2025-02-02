import { describe, expect, it } from 'vitest'
import { isDynamicPix, parseDynamicPix, toDynamicPix } from './dynamic'

describe('toDynamicPix', () => {
  it('should return a valid static pix payload', () => {
    const payload = toDynamicPix({
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        url: 'qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb22',
      },
      pointOfInitiationMethod: 12,
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      merchantName: 'Victor Mesquita',
      merchantCity: 'Sao Paulo',
      additionalData: {
        txId: '***',
      },
    })

    expect(payload).toBe(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5915Victor Mesquita6009Sao Paulo62070503***63042C75',
    )
  })

  it('should return a valid static pix payload with postal code', () => {
    const payload = parseDynamicPix(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5915Victor Mesquita6009Sao Paulo62070503***63042C75',
    )

    expect(payload).toEqual({
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        url: 'qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb22',
      },
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      merchantName: 'Victor Mesquita',
      merchantCity: 'Sao Paulo',
      pointOfInitiationMethod: 12,
      additionalData: {
        txId: '***',
      },
    })
  })
})

describe('isDynamicPix', () => {
  it('should return true if the payload is a dynamic pix', () => {
    const payload =
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5919SqalaPay Pagamentos6007Barueri62070503***630469E8'

    expect(isDynamicPix(payload)).toBe(true)
  })

  it('should return false if the payload is not a dynamic pix', () => {
    const payload =
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5'

    expect(isDynamicPix(payload)).toBe(false)
  })
})
