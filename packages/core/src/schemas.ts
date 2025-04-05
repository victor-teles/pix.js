import { z } from 'zod'
import { PointOfInitiationMethod } from './types'

const staticMerchantAccountInfoSchema = z
  .object({
    gui: z.string(),
    key: z.string(),
    merchantAdditionalInfo: z.string().optional(),
    fss: z.string().optional(),
  })
  .refine((schema) => {
    let totalLength = schema.gui.length + schema.key.length
    if (schema.merchantAdditionalInfo) {
      totalLength += schema.merchantAdditionalInfo?.length
    }
    if (schema.fss) {
      totalLength += schema.fss?.length
    }

    return totalLength <= 99
  }, 'Combined length of gui, key, merchantAdditionalInfo and fss must not exceed 99 characters')

const dynamicMerchantAccountInfoSchema = z
  .object({
    gui: z.string(),
    url: z.string().regex(/^[^:]+\.[^:]+/),
    merchantAdditionalInfo: z.string().optional(),
    fss: z.string().optional(),
  })
  .refine((schema) => {
    let totalLength = schema.gui.length + schema.url.length
    if (schema.merchantAdditionalInfo) {
      totalLength += schema.merchantAdditionalInfo?.length
    }
    if (schema.fss) {
      totalLength += schema.fss?.length
    }

    return totalLength <= 99
  }, 'Combined length of gui, url, merchantAdditionalInfo and fss must not exceed 99 characters')

const additionalData = z.object({
  txId: z.string().min(1).max(25).nullish(),
})

const unreservedTemplate = z
  .object({
    gui: z.string().nullish(),
    url: z.string().url().nullish(),
  })
  .refine((schema) => {
    return (schema.gui?.length ?? 0) + (schema.url?.length ?? 0) <= 99
  }, 'Combined length of gui and url must not exceed 99 characters')

export const staticPixSchema = z
  .object({
    merchantAccountInfo: staticMerchantAccountInfoSchema,
    value: z.number().positive().optional(),
    merchantCategoryCode: z.string().max(4),
    transactionCurrency: z.string().max(3),
    countryCode: z.string().max(2),
    merchantName: z.string().max(25),
    merchantCity: z.string().max(15),
    additionalData: additionalData,
    postalCode: z.union([z.string().length(0), z.string().min(1).max(99)]).nullish(),
    unreservedTemplate: unreservedTemplate.nullish(),
  })
  .refine((schema) => {
    const totalLength = [
      schema.merchantAccountInfo.gui.length,
      schema.merchantAccountInfo.key.length,
      schema.merchantAccountInfo.merchantAdditionalInfo?.length ?? 0,
      schema.merchantAccountInfo.fss?.length ?? 0,
      schema.value ? schema.value.toString().length : 0,
      schema.merchantCategoryCode.length,
      schema.transactionCurrency.length,
      schema.countryCode.length,
      schema.merchantName.length,
      schema.merchantCity.length,
      schema.additionalData.txId?.length ?? 0,
      schema.postalCode?.length ?? 0,
    ].reduce((acc, length) => acc + length, 0)

    return totalLength <= 396
  }, 'The qrcode length must be less than 396 characters')

export const dynamicPixSchema = z
  .object({
    merchantAccountInfo: dynamicMerchantAccountInfoSchema,
    pointOfInitiationMethod: z.nativeEnum(PointOfInitiationMethod).nullish(),
    value: z.number().positive().min(1).max(13).nullish(),
    merchantCategoryCode: z.string().max(4),
    transactionCurrency: z.string().max(3),
    countryCode: z.string().max(2),
    merchantName: z.string().max(25),
    merchantCity: z.string().max(15),
    additionalData: additionalData,
    postalCode: z.string().min(1).max(8).nullish(),
    unreservedTemplate: unreservedTemplate.nullish(),
  })
  .refine((schema) => {
    const totalLength = [
      schema.merchantAccountInfo.gui.length,
      schema.merchantAccountInfo.url.length,
      schema.merchantAccountInfo.merchantAdditionalInfo?.length ?? 0,
      schema.merchantAccountInfo.fss?.length ?? 0,
      schema.pointOfInitiationMethod?.toString().length ?? 0,
      schema.value ? schema.value.toString().length : 0,
      schema.merchantCategoryCode.length,
      schema.transactionCurrency.length,
      schema.countryCode.length,
      schema.merchantName.length,
      schema.merchantCity.length,
      schema.additionalData.txId?.length ?? 0,
      schema.postalCode?.length ?? 0,
    ].reduce((acc, length) => acc + length, 0)

    return totalLength <= 396
  }, 'The qrcode length must be less than 396 characters')

export type StaticPixPayload = z.infer<typeof staticPixSchema>
export type DynamicPixPayload = z.infer<typeof dynamicPixSchema>
