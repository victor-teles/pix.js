import { PixKeyType } from '@pix.js/core'
import { DictResponse } from '../types'
import { AccountType } from './common'

export type OwnerNaturalPerson = {
  type: 'NATURAL_PERSON'
  /**
   * CPF number of the claimer
   */
  taxIdNumber: string
  /**
   * Name of the claimer
   */
  name: string
}

export type OwnerLegalPerson = {
  type: 'LEGAL_PERSON'
  /**
   * CNPJ number of the claimer
   */
  taxIdNumber: string
  /**
   * Name of the claimer
   */
  name: string
  /**
   * Trade name of the claimer (aka. nome fantasia)
   */
  tradeName?: string
}

type Owner = OwnerNaturalPerson | OwnerLegalPerson

export type DirectoryReason =
  | 'USER_REQUESTED'
  | 'ACCOUNT_CLOSURE'
  | 'BRANCH_TRANSFER'
  | 'RECONCILIATION'
  | 'FRAUD'
  | 'RFB_VALIDATION'

type DirectoryEntry = {
  key: string
  keyType: PixKeyType
  account: {
    /**
     * ISBP of the bank
     */
    participant: string
    /**
     * Branch of the bank account
     */
    branch?: string
    /**
     * Account number
     */
    accountNumber: string
    /**
     * Type of the bank account, can be "CACC" "TRAN" "SLRY" "SVGS"
     */
    accountType: AccountType
    /**
     * Opening date of the bank account
     */
    openingDate: Date
  }
  owner: Owner
}

export type CreateDirectoryRequest = {
  /**
   * Directory reason
   */
  reason: DirectoryReason

  /**
   * Idempotency key
   */
  requestId: string

  /**
   * Directory entry
   */
  entry: DirectoryEntry
}

export type UpdateDirectoryRequest = {
  /**
   * Key
   */
  key: string

  /**
   * Reason to update the directory
   */
  reason: DirectoryReason

  /**
   * Account data
   */
  account: {
    participant: string
    branch: string
    accountNumber: string
    accountType: AccountType
    openingDate: Date
  }

  /**
   * Owner of the account
   */
  owner: Owner
}

export type DeleteEntryRequest = {
  /**
   * Key
   */
  key: string

  /**
   * Participant
   */
  participant: string

  /**
   * Reason to delete the entry
   * Enum: "USER_REQUESTED" "ACCOUNT_CLOSURE" "BRANCH_TRANSFER" "RECONCILIATION" "FRAUD" "RFB_VALIDATION"
   */
  reason: DirectoryReason
}

export type GetDirectoryParameters = {
  /**
   * Include antifraud statistics
   */
  includeStatistics?: boolean

  /**
   * ISBP of the bank or 8 first digits of the CNPJ for payment initiators
   */
  piRequestingParticipant: string

  /**
   * Payer id used for rate limiting
   */
  piPayerId: string

  /**
   * End to end id used for rate limiting
   */
  piEndToEndId: string
}

export type Directory = {
  key: string
  keyType: string
  account: {
    participant: string
    branch: string
    accountNumber: string
    accountType: string
    openingDate: string
  }
  owner: Owner
  creationDate: Date
  keyOwnershipDate: Date
  openClaimCreationDate?: Date
}

export type OwnerStatistics = {
  spi: {
    watermark: string
    settlements: Record<string, number>
  }
  fraudMarkers: {
    watermark: string
    applicationFrauds: Record<string, number>
    muleAccounts: Record<string, number>
    scammerAccounts: Record<string, number>
    otherFrauds: Record<string, number>
  }
  infractionReports: {
    watermark: string
    openReports: number
    openReportsDistinctReporters: number
    rejectedReports: Record<string, number>
  }
  entries: {
    watermark: string
    registeredAccounts: number
  }
}

export type KeyStatistics = {
  spi: {
    watermark: string
    settlements: Record<string, number>
  }
  fraudMarkers: {
    watermark: string
    applicationFrauds: Record<string, number>
    muleAccounts: Record<string, number>
    scammerAccounts: Record<string, number>
    otherFrauds: Record<string, number>
  }
  infractionReports: {
    watermark: string
    openReports: number
    openReportsDistinctReporters: number
    rejectedReports: Record<string, number>
  }
  entries: {
    watermark: string
    distinctAccounts: number
  }
}

export type DeleteEntryResponse = DictResponse & {
  key: string
}

export type CheckKeyResponse = DictResponse & {
  keys: { key: { hasEntry: boolean; value: string }[] }
}

export type GetDirectoryResponse = DictResponse & {
  entry: Directory
}

export type CreateDirectoryResponse = DictResponse & {
  entry: Directory
}

export type UpdateDirectoryResponse = DictResponse & {
  entry: Directory
}

export type GetDirectoryByCidParameters = {
  /**
   * Content identifier
   */
  cid: string

  /**
   * Participant requesting the directory
   */
  piRequestingParticipant: string
}

export type GetDirectoryByCidResponse = DictResponse & {
  cid: string
  entry: Directory
}
