import { PixKeyType } from '@pix.js/core'
import { DictResponse } from '../types'
import { AccountType } from './common'

export type ClaimType = 'OWNERSHIP' | 'PORTABILITY'
export type ClaimStatus = 'OPEN' | 'WAITING_RESOLUTION' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
export type ConfirmReason = 'USER_REQUESTED' | 'ACCOUNT_CLOSURE' | 'FRAUD' | 'DEFAULT_OPERATION' | 'RECONCILIATION'
export type CancelReason = 'USER_REQUESTED' | 'ACCOUNT_CLOSURE' | 'FRAUD' | 'DEFAULT_OPERATION' | 'RECONCILIATION'
export type CancelledBy = 'DONOR' | 'CLAIMER'

export type ClaimerNaturalPerson = {
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

export type ClaimerLegalPerson = {
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

export type Claimer = ClaimerNaturalPerson | ClaimerLegalPerson

export type ClaimerAccount = {
  participant: string
  branch?: string
  accountNumber: string
  accountType: AccountType
  openingDate: Date
}

export type CreatePortabilityRequest = {
  claim: {
    /**
     * Claim type can be "OWNERSHIP" or "PORTABILITY"
     */
    type: ClaimType
    /**
     * Key of the account to be claimed
     */
    key: string
    /**
     * Key type
     */
    keyType: PixKeyType
    /**
     * Bank account of the claimer
     */
    claimerAccount: ClaimerAccount
    /**
     * Data of the claimer
     */
    claimer: Claimer
  }
}

export type CreatePortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    completionPeriodEnd?: Date
    resolutionPeriodEnd: Date
    lastModified: Date
  }
}

export type ListPortabilityParameters = {
  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string
  /**
   * Includes additional claims of indirect participants
   * Default: false
   */
  includeIndirectParticipants?: boolean
  /**
   * Restricts claims in which the participant is a donor
   * Default: false
   */
  isDonor?: boolean
  /**
   * Restricts claims in which the participant is a claimant
   * Default: false
   */
  isClaimer?: boolean
  /**
   * Array of ClaimStatus to be searched
   * Items Enum: "OPEN" "WAITING_RESOLUTION" "CONFIRMED" "CANCELLED" "COMPLETED"
   */
  status?: ClaimStatus[]
  /**
   * Type of the claim
   * Items Enum: "OWNERSHIP" "PORTABILITY"
   */
  type?: ClaimType
  /**
   * Filter claims modified after this date
   */
  modifiedAfter?: Date
  /**
   * Filter claims modified before this date
   */
  modifiedBefore?: Date
  /**
   * Limit the number of claims to be returned
   * Default: 20
   */
  limit?: number
}

export type ListPortabilityResponse = DictResponse & {
  claims: {
    claim: {
      type: ClaimType
      key: string
      keyType: PixKeyType
      claimerAccount: ClaimerAccount
      claimer: Claimer
      donorParticipant: string
      id: string
      status: ClaimStatus
      resolutionPeriodEnd: Date
      completionPeriodEnd?: Date
      lastModified: Date
      confirmReason?: ConfirmReason
      cancelReason?: CancelReason
      cancelledBy?: CancelledBy
    }[]
  }
  hasMoreElements: boolean
}

export type GetPortabilityParameters = {
  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string

  /**
   * Id of the claim
   */
  id: string
}

export type GetPortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    completionPeriodEnd: Date
    resolutionPeriodEnd: Date
    lastModified: Date
  }
}

export type AcknowledgePortabilityParameters = {
  /**
   * Id of the claim
   */
  claimId: string
  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string
}

export type AcknowledgePortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    resolutionPeriodEnd: Date
    completionPeriodEnd?: Date
    lastModified: Date
  }
}

export type ConfirmPortabilityParameters = {
  /**
   * Id of the claim
   */
  claimId: string
  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string

  /**
   * Confirmation reason
   */
  reason: ConfirmReason
}

export type ConfirmPortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    resolutionPeriodEnd: Date
    completionPeriodEnd?: Date
    lastModified: Date
    confirmReason?: ConfirmReason
  }
}

export type CancelPortabilityParameters = {
  /**
   * Id of the claim
   */
  claimId: string
  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string

  /**
   * Confirmation reason
   */
  reason: CancelReason
}

export type CancelPortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    resolutionPeriodEnd: Date
    completionPeriodEnd?: Date
    lastModified: Date
    cancelReason?: CancelReason
    cancelledBy?: CancelledBy
  }
}

export type CompletePortabilityParameters = {
  /**
   * Id of the claim
   */
  claimId: string

  /**
   * ISPB of the direct or indirect participant of interest
   */
  participant: string

  /**
   * Idempotency key
   */
  requestId: string
}

export type CompletePortabilityResponse = DictResponse & {
  claim: {
    type: ClaimType
    key: string
    keyType: PixKeyType
    claimerAccount: ClaimerAccount
    claimer: Claimer
    donorParticipant: string
    id: string
    status: ClaimStatus
    completionPeriodEnd: Date
    resolutionPeriodEnd: Date
    lastModified: Date
    confirmReason?: ConfirmReason
  }
  entryCreationDate: Date
  keyOwnershipDate: Date
}
