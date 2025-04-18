import { describe, it } from 'vitest'
import { CheckKeyResponse } from './models'
import { parseDictXml } from './utils'

describe('PixDictApi', () => {
  it('get directory xml', async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<CheckKeysResponse>
    <Signature></Signature>
    <ResponseTime>2020-01-10T10:00:00.000Z</ResponseTime>
    <CorrelationId>a9f13566e19f5ca51329479a5bae60c5</CorrelationId>
    <Keys>
        <Key hasEntry="true">mail@mail.com</Key>
        <Key hasEntry="false">mail2@mail.com</Key>
        <Key hasEntry="true">+5561999999999</Key>
        <Key hasEntry="false">+5561888888888</Key>
        <Key hasEntry="false">99999999999</Key>
        <Key hasEntry="true">99999999999999</Key>
    </Keys>
</CheckKeysResponse>`

    console.log(parseDictXml<CheckKeyResponse>(xml, 'CheckKeysResponse').keys.key[0])
  })
})
