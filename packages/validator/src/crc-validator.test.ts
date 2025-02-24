import { describe, expect, it } from 'vitest'
import { validateCrc } from './crc-validator'

describe('validateCrc', () => {
  it('should return a valid crc', () => {
    const payload = validateCrc(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR5919SqalaPay Pagamentos6007Barueri62070503***630469E8',
    )

    expect(payload).toBe(true)
  })

  it('should return a invalid crc', () => {
    const payload = validateCrc(
      '00020101021226910014br.gov.bcb.pix2569qrcode.pix.celcoin.com.br/pixqrcode/v2/9ba4b415d68448028544e96ddcfb225204000053039865802BR6007TesteBrazil62070503***630469E8',
    )

    expect(payload).toBe(false)
  })
})
