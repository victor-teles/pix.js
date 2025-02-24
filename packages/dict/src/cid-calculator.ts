import crypto from 'node:crypto'

/**
 * Calculates the CID for a given set of keys.
 * @param keys - The keys to calculate the CID for.
 * @param requestIdBytes - The request ID bytes to calculate the CID for. default is a random 16 bytes.
 * @returns The CID for the given keys.
 */
export function calculateCid(
  keys: string[],
  requestIdBytes: Uint8Array = crypto.getRandomValues(new Uint8Array(16)),
): string {
  const keyParts = keys.join('&')

  const cidBytes = crypto.createHmac('sha256', requestIdBytes).update(keyParts).digest()
  return cidBytes.toString('hex').toLowerCase()
}
