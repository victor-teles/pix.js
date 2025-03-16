import { describe, expect, it } from 'vitest'
import { isValidStaticQrCode } from './static'

describe('isValidStaticQrCode', () => {
  it('should return a valid static pix payload', () => {
    const payload = isValidStaticQrCode(
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita6009Sao Paulo62140510123456789063049CE5',
    )

    expect(payload).toBe(true)
  })

  it('should return a invalid static pix payload', () => {
    const payload = isValidStaticQrCode(
      '00020126420014br.gov.bcb.pix0111070598133900205teste52040000530398654041.005802BR5915Victor Mesquita62140510123456789063049CE5',
    )

    expect(payload).toBe(false)
  })
})
