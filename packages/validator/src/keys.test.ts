import { describe, expect, test } from 'vitest'
import { isPixKey } from './keys'

describe('isPixKey', () => {
  test.each([
    // CPFs
    ['12345689290', false],
    ['585.409.440-14', true],
    ['58540944014', true],
    ['05581887535', true],
    ['27948689850', true],

    // CNPJs
    ['50486087000100', false],
    ['50486087000127', true],
    ['50.486.087/0001-27', true],

    // Phones
    ['+554984023134', false],
    ['+5563984227200', true],
    ['+5554984023134', true],
    ['5511948163643', true],
    ['54984023134', true],
    ['984023134', false],
    ['+551997960983', false],
    ['(11) 99123-4567', true],

    // Emails
    ['meuemail@sqala.tech', true],
    ['meuemail@@sqala.com', false],
    ['ea.dd@hotmail.com.br', true],
    ['Ronidd333@gmail.com', true],
    ['´financeirov33@gmail.com', false],

    // Random
    ['b29b1f02-bd9c-4fb7-8e4b-67cd32a34e67', true],
    ['01JBMHMYRP97NNAG3RNW6W7TAG', false],

    // Real invalid keys  from users
    ['JALBER', false],
    ['Victor Hugo', false],
    ['+551980414060', false],
    ['43091848838', false],
    ['275992659', false],
    ['lucascasetesantana@gmail', false],
    ['Bradesco', false],
    ['5554 99939-4609', true],
    ['55 84991147393', true],
    ['niarferreira90@gmail.com p', false],
    ['fernandesjoao20524@xn--gamicom-whb', false],
    ['+554996749052', false],
  ])('keys validations %s', (cpf, expected) => {
    expect(isPixKey(cpf)).toBe(expected)
  })
})
