import { PixKeyType } from '@pix.js/core'
import { DictResponse } from '../types'

export interface VerifySyncParameters {
  /**
   * The participant ID to verify the sync for.
   */
  participantId: string
  /**
   * The key type to verify the sync for.
   */
  keyType: PixKeyType

  /**
   * The participant sync verifier. Calculated by the participant.
   */
  participantSyncVerifier: string
}

export type VerifySyncResponse = DictResponse & {
  syncVerification: {
    participant: string
    keyType: PixKeyType
    participantSyncVerifier: string
    id: string
    result: 'OK' | 'NOK'
  }
}

export interface CreateCidsFileParameters {
  /**
   * The participant ID to create the CIDs file for.
   */
  participantId: string

  /**
   * The key type to create the CIDs file for.
   */
  keyType: PixKeyType
}

export type CidSetFile = {
  /**
   * The ID of the CIDs file.
   */
  id: string

  /**
   * The status of the CIDs file.
   */
  status: 'REQUESTED' | 'PROCESSING' | 'AVAILABLE' | 'UNAVAILABLE' | 'ERROR'

  /**
   * The participant ID of the CIDs file.
   */
  participant: string

  /**
   * The key type of the CIDs file.
   */
  keyType: PixKeyType

  /**
   * The request time of the CIDs file.
   */
  requestTime: Date

  /**
   * The creation time of the CIDs file. only available if the status is AVAILABLE.
   */
  creationTime?: Date
  /**
   * The URL of the CIDs file. only available if the status is AVAILABLE.
   */
  url?: string
  /**
   * The size of the CIDs file in bytes. only available if the status is AVAILABLE.
   */
  bytes?: number

  /**
   * The SHA-256 hash of the CIDs file. only available if the status is AVAILABLE.
   */
  sha256?: string
}

export type CreateCidsFileResponse = DictResponse & {
  cidSetFile: CidSetFile
}

export interface GetCidsFileParameters {
  /**
   * The ID of the CIDs file to get.
   */
  id: string

  /**
   * The participant ID to get the CIDs file for.
   */
  piRequestingParticipant: string
}

export type GetCidsFileResponse = DictResponse & {
  cidSetFile: CidSetFile
}

export interface ListCidsEventsParameters {
  /**
   * The participant ID to list the CIDs events for.
   */
  participant: string

  /**
   * The key type to list the CIDs events for.
   */
  keyType: PixKeyType

  /**
   * The start time to list the CIDs events for.
   */
  startTime: Date

  /**
   * The end time to list the CIDs events for.
   */
  endTime: Date

  /**
   * The limit of the CIDs events to list.
   */
  limit: number
}

export type CidSetEvent = {
  type: 'ADDED' | 'REMOVED'
  cid: string
  timestamp: Date
}

export type ListCidsEventsResponse = DictResponse & {
  cidSetEvents: {
    cidSetEvent: CidSetEvent[]
  }
  hasMoreElements: boolean
  participant: string
  keyType: PixKeyType
  startTime: Date
  endTime: Date
  syncVerifierStart: string
  syncVerifierEnd: string
}
