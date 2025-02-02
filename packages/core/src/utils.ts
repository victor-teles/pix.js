export const formatText = (text: string, maxLength: number) =>
  text
    .substring(0, maxLength)
    .normalize('NFD')
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    .replace(/[\u0300-\u036f]/g, '')

export const appendToBrCode = (id: string, value: string): string => {
  const length = value.length.toString().padStart(2, '0')
  return `${id}${length}${value}`
}

type Entry = {
  id: string
  length: number
  value: string
  subEntries?: Record<string, Entry>
}

export const deconstructEntries = (payload: string, signatureLength = 4) => {
  const entries: Record<string, Entry> = {}
  let position = 0

  while (position < payload.length - signatureLength) {
    const id = payload.slice(position, position + 2)
    position += 2
    const length = Number.parseInt(payload.slice(position, position + 2))
    position += 2
    const value = payload.slice(position, position + length)
    position += length

    entries[id] = { id, length, value }
  }

  return entries
}
