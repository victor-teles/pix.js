import { describe, expect, test } from 'vitest'
import { createDynamic } from './dynamic'

describe('createDynamic', () => {
  test('should create a dynamic qrcode', async () => {
    const dynamic = createDynamic({
      merchantAccountInfo: {
        url: 'qrcode.pix.celcoin.com.br/pixqrcode/v2/46403cb5cf73b90a34b05467632f9a',
      },
      merchantName: 'Example',
      merchantCity: 'Example City',
      additionalData: { txId: '1234567890' },
    })

    const { payload, header } = await dynamic.getPayload()

    expect(payload).toBeDefined()
    expect(header).toBeDefined()
  })
})
