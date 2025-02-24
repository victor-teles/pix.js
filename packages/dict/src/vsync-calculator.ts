/**
 * Calculates the VSync for a given set of CIDs.
 * @param cids - The CIDs to calculate the VSync for.
 * @returns The VSync for the given CIDs.
 */
export function calculateVsync(cids: string[]): string {
  return cids.reduce((acc, cid) => {
    return xor(acc, cid)
  }, '0000000000000000000000000000000000000000000000000000000000000000')
}

function xor(a: string, b: string): string {
  const aBuf = Buffer.from(a, 'hex')
  const bBuf = Buffer.from(b, 'hex')
  const result = Buffer.alloc(aBuf.length)

  for (let i = 0; i < aBuf.length; i++) {
    result[i] = aBuf[i] ^ bBuf[i]
  }

  return result.toString('hex')
}

console.log(
  calculateVsync([
    '28c06eb41c4dc9c3ae114831efcac7446c8747777fca8b145ecd31ff8480ae88',
    '4d4abb9168114e349672b934d16ed201a919cb49e28b7f66a240e62c92ee007f',
    'fce514f84f37934bc8aa0f861e4f7392273d71b9d18e8209d21e4192a7842058',
  ]),
)
