import { camelCase, pascalCase } from 'change-case/keys'
import { XMLBuilder, XMLParser } from 'fast-xml-parser'

export const parseDictXml = <T>(xml: string, rootKey: string): T => {
  const parsed = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    textNodeName: 'value',
  }).parse(xml)
  return camelCase(parsed[rootKey], 10) as T
}

export const buildDictXml = <T>(request: T, rootKey: string): string => {
  const xmlBuilder = new XMLBuilder({})
  return xmlBuilder.build({ [rootKey]: pascalCase(request) })
}

export const toQueryString = (params: Record<string, string | string[] | number | boolean>): string => {
  const queryParams = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      queryParams.set(key, value.toString())
    }
  }

  return queryParams.toString()
}
