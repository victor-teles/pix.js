import { DictResponse } from '../types'

export type FraudType = 'APPLICATION_FRAUD' | 'MULE_ACCOUNT' | 'SCAMMER_ACCOUNT' | 'OTHER' | 'UNKNOWN'
export type FraudMarkerStatus = 'REGISTERED' | 'CANCELLED'

export type MarkFraudParameters = {
  participant: string
  fraudMarker: {
    taxIdNumber: string
    fraudType: FraudType
    key?: string
  }
  requestId: string
}

export type FraudMarker = {
  taxIdNumber: string
  key?: string
  fraudType: FraudType
  id: string
  status: FraudMarkerStatus
  creationTime: string
  lastModified: string
}

export type MarkFraudResponse = DictResponse & {
  fraudMarker: FraudMarker
}

export type GetFraudMarkerParameters = {
  id: string
  piRequestingParticipant: string
}

export type GetFraudMarkerResponse = DictResponse & {
  fraudMarker: FraudMarker
}

export type CancelFraudMarkerParameters = {
  participant: string
  fraudMarkerId: string
}

export type CancelFraudMarkerResponse = DictResponse & {
  fraudMarker: FraudMarker
}
