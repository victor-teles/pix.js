import { DictResponse } from '../types'

export type ContactInformation = {
  /**
   * The email address of the contact.
   */
  email?: string

  /**
   * The phone number of the contact.
   */
  phone?: string
}

export type SituationType = 'SCAM' | 'ACCOUNT_TAKEOVER' | 'COERCION' | 'FRAUDULENT_ACCESS' | 'OTHER' | 'UNKNOWN'
export type Reason = 'REFUND_REQUEST' | 'REFUND_CANCELLED'

export type InfractionReport = {
  /**
   * The transaction ID.
   */
  transactionId: string

  /**
   * The reason for the infraction report.
   */
  reason: Reason

  /**
   * The situation type for the infraction report.
   */
  situationType: SituationType

  /**
   * The details of the infraction report. only required for OTHER situation type.
   */
  reportDetails?: string

  /**
   * The contact information for the infraction report.
   */
  contactInformation?: ContactInformation
}

export type ReportInfractionParameters = {
  /**
   * The participant ID to report the infraction for.
   */
  participantId: string

  /**
   * The infraction report.
   */
  infractionReport: InfractionReport
}

export type InfractionReportStatus = 'OPEN' | 'ACKNOWLEDGED' | 'CLOSED' | 'CANCELLED'
export type AnalysisResult = 'AGREED' | 'DISAGREED'
export type FraudType = 'APPLICATION_FRAUD' | 'MULE_ACCOUNT' | 'SCAMMER_ACCOUNT' | 'OTHER' | 'UNKNOWN'

export type InfractionReportResponse = {
  /**
   * The transaction ID.
   */
  transactionId: string

  /**
   * The reason for the infraction report.
   */
  reason: Reason

  /**
   * The situation type for the infraction report.
   */
  situationType: SituationType

  /**
   * The details of the infraction report. only required for OTHER situation type.
   */
  reportDetails?: string

  /**
   * The ID of the infraction report.
   */
  id: string

  /**
   * The status of the infraction report.
   */
  status: InfractionReportStatus

  /**
   * The participant ID of the reporter.
   */
  reporterParticipant: string

  /**
   * The participant ID of the counterparty.
   */
  counterpartyParticipant: string

  /**
   * The contact information for the infraction report.
   */
  contactInformation?: ContactInformation

  /**
   * The creation time of the infraction report.
   */
  creationTime: Date

  /**
   * The last modified time of the infraction report.
   */
  lastModified: Date

  /**
   * The fraud marker ID.
   */
  fraudMarkerId?: string

  /**
   * The analysis result.
   */
  analysisResult?: AnalysisResult

  /**
   * The analysis details.
   */
  analysisDetails?: string
}

export type ReportInfractionResponse = DictResponse & {
  /**
   * The infraction report.
   */
  infractionReport: InfractionReportResponse
}

export type ListInfractionsParameters = {
  /**
   * The participant ID to list the infractions for.
   */
  participant: string

  /**
   * Whether to include indirect participants.
   */
  includeIndirectParticipants?: boolean

  /**
   * Whether to include the reporter.
   */
  isReporter?: boolean

  /**
   * Whether to include the counterparty.
   */
  isCounterparty?: boolean

  /**
   * The status of the infractions to list.
   */
  status?: InfractionReportStatus[]

  /**
   * Whether to include the details.
   */
  includeDetails?: boolean

  /**
   * The modified after date.
   */
  modifiedAfter?: Date

  /**
   * The modified before date.
   */
  modifiedBefore?: Date

  /**
   * The limit of the infractions to list.
   */
  limit?: number
}

export type ListInfractionsResponse = DictResponse & {
  /**
   * The infractions.
   */
  infractionsReports: {
    infractionReport: InfractionReportResponse[]
  }

  /**
   * Whether there are more infractions to list.
   */
  hasMoreElements: boolean
}

export type GetInfractionParameters = {
  /**
   * The ID of the infraction to get.
   */
  id: string

  /**
   * The participant ID to get the infraction for.
   */
  piRequestingParticipant: string
}

export type GetInfractionResponse = DictResponse & {
  /**
   * The infraction object.
   */
  infractionReport: InfractionReportResponse
}

export type AcknowledgeInfractionParameters = {
  /**
   * The ID of the infraction to acknowledge.
   */
  infractionReportId: string

  /**
   * The participant ID to acknowledge the infraction for.
   */
  participantId: string
}

export type AcknowledgeInfractionResponse = DictResponse & {
  /**
   * The infraction report.
   */
  infractionReport: InfractionReportResponse
}

export type CancelInfractionParameters = {
  /**
   * The ID of the infraction to cancel.
   */
  infractionReportId: string

  /**
   * The participant ID to cancel the infraction for.
   */
  participantId: string
}

export type CancelInfractionResponse = DictResponse & {
  /**
   * The infraction report.
   */
  infractionReport: InfractionReportResponse
}

export type CloseInfractionParameters = {
  /**
   * The ID of the infraction to close.
   */
  infractionReportId: string

  /**
   * The participant ID to close the infraction for.
   */
  participantId: string

  /**
   * The type of fraud.
   */
  fraudType?: FraudType

  /**
   * The analysis result.
   */
  analysisResult: AnalysisResult

  /**
   * The analysis details.
   */
  analysisDetails?: string
}

export type CloseInfractionResponse = DictResponse & {
  /**
   * The infraction report.
   */
  infractionReport: InfractionReportResponse
}

export type RefundReason = 'FRAUD' | 'OPERATIONAL_FLAW' | 'REFUND_CANCELLED' | 'PIX_AUTOMATICO'
export type RefundStatus = 'OPEN' | 'CLOSED' | 'CANCELLED'
export type RefundRejectionReason = 'NO_BALANCE' | 'ACCOUNT_CLOSURE' | 'INVALID_REQUEST' | 'OTHER'
export type RefundRequestRole = 'REQUESTING' | 'CONTESTED'
export type RefundAnalysisResult = 'TOTALLY_ACCEPTED' | 'PARTIALLY_ACCEPTED' | 'REJECTED'

export type CreateRefundParameters = {
  /**
   * The participant ID to create the refund for.
   */
  participant: string

  refund: {
    /**
     * The transaction ID to create the refund for.
     */
    transactionId: string

    /**
     * The reason for the refund.
     */
    refundReason: RefundReason

    /**
     * The amount for the refund.
     */
    refundAmount: number

    /**
     * The details for the refund.
     */
    refundDetails?: string
  }
}

export type RefundResponse = {
  /**
   * The transaction ID.
   */
  transactionId: string

  /**
   * The reason for the refund.
   */
  refundReason: RefundReason

  /**
   * The amount for the refund.
   */
  refundAmount: number

  /**
   * The details for the refund.
   */
  refundDetails?: string

  /**
   * The ID of the refund.
   */
  id: string

  /**
   * The status of the refund.
   */
  status: RefundStatus

  /**
   * The participant ID of the contested party.
   */
  contestedParticipant: string

  /**
   * The participant ID of the requesting party.
   */
  requestingParticipant: string

  /**
   * The creation time of the refund.
   */
  creationTime: Date

  /**
   * The last modified time of the refund.
   */
  lastModified: Date

  /**
   * The infraction report ID.
   */
  infractionReportId?: string

  /**
   * The analysis result.
   */
  analysisResult?: AnalysisResult

  /**
   * The analysis details.
   */
  analysisDetails?: string

  /**
   * The rejection reason.
   */
  refundRejectionReason?: RefundRejectionReason

  /**
   * The transaction ID.
   */
  refundTransactionId?: string
}

export type CreateRefundResponse = DictResponse & {
  /**
   * The refund object.
   */
  refund: RefundResponse
}

export type ListRefundsParameters = {
  /**
   * The participant ID to list the refunds for.
   */
  participant: string

  /**
   * Whether to include indirect participants.
   */
  includeIndirectParticipants?: boolean

  /**
   * The role of the participant.
   */
  role?: RefundRequestRole

  /**
   * The status of the refunds to list.
   */
  status?: RefundStatus[]

  /**
   * Whether to include the details.
   */
  includeDetails?: boolean

  /**
   * The modified after date.
   */
  modifiedAfter?: Date

  /**
   * The modified before date.
   */
  modifiedBefore?: Date

  /**
   * The limit of the refunds to list.
   */
  limit?: number
}

export type ListRefundsResponse = DictResponse & {
  /**
   * The refunds.
   */
  refunds: {
    refund: RefundResponse[]
  }

  /**
   * Whether there are more refunds to list.
   */
  hasMoreElements: boolean
}

export type GetRefundParameters = {
  /**
   * The ID of the refund to get.
   */
  id: string

  /**
   * The participant ID to get the refund for.
   */
  piRequestingParticipant: string
}

export type GetRefundResponse = DictResponse & {
  /**
   * The refund object.
   */
  refund: RefundResponse
}

export type CancelRefundParameters = {
  /**
   * The ID of the refund to cancel.
   */
  refundId: string

  /**
   * The participant ID to cancel the refund for.
   */
  participant: string
}

export type CancelRefundResponse = DictResponse & {
  /**
   * The refund object.
   */
  refund: RefundResponse
}

export type CloseRefundParameters = {
  /**
   * The ID of the refund to close.
   */
  refundId: string

  /**
   * The participant ID to close the refund for.
   */
  participant: string

  /**
   * The analysis result.
   */
  refundAnalysisResult: RefundAnalysisResult

  /**
   * The analysis details.
   */
  refundAnalysisDetails?: string

  /**
   * The rejection reason.
   */
  refundRejectionReason?: RefundRejectionReason

  /**
   * The transaction ID.
   */
  refundTransactionId?: string
}

export type CloseRefundResponse = DictResponse & {
  /**
   * The refund object.
   */
  refund: RefundResponse
}
