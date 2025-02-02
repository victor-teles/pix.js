import { PixQrCodeType } from '@pix.js/core'
import { describe, expect, test } from 'vitest'
import { parseFromString } from './parse'

describe('parseFromString', () => {
  test('should parse a dynamic qrcode', async () => {
    const dynamic = parseFromString(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5915Victor Mesquita6009Sao Paulo62070503***63042C75',
    )

    expect(dynamic).toEqual({
      type: PixQrCodeType.Dynamic,
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        url: 'qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb22',
      },
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      additionalData: {
        txId: '***',
      },
      merchantCity: 'Sao Paulo',
      merchantName: 'Victor Mesquita',
      pointOfInitiationMethod: 12,
    })
  })

  test('should parse a static qrcode', async () => {
    const staticQrcode = parseFromString(
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5',
    )

    expect(staticQrcode).toEqual({
      type: PixQrCodeType.Static,
      merchantAccountInfo: {
        gui: 'br.gov.bcb.pix',
        key: '07059813390',
        merchantAdditionalInfo: 'teste',
      },
      merchantCategoryCode: '0000',
      transactionCurrency: '986',
      countryCode: 'BR',
      additionalData: {
        txId: '1234567890',
      },
      merchantCity: 'Sao Paulo',
      merchantName: 'Victor Mesquita',
      value: 1,
    })
  })
})
