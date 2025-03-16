import { describe, expect, it } from 'vitest'
import { isValidDynamicQrCode } from './dynamic'

describe('isValidDynamicQrCode', () => {
  it('should return a valid dynamic pix payload', () => {
    const payload = isValidDynamicQrCode(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5919SqalaPay Pagamentos6007Barueri62070503***630469E8',
    )

    expect(payload).toBe(true)
  })

  it('should return a invalid dynamic pix payload', () => {
    const payload = isValidDynamicQrCode(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR6007Barueri62070503***630469E8',
    )

    expect(payload).toBe(false)
  })
})
