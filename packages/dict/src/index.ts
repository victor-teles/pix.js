import { pascalCase } from 'change-case/keys'
import {
  AcknowledgePortabilityParameters,
  AcknowledgePortabilityResponse,
  CancelPortabilityParameters,
  CancelPortabilityResponse,
  CheckKeyResponse,
  CompletePortabilityParameters,
  CompletePortabilityResponse,
  ConfirmPortabilityParameters,
  ConfirmPortabilityResponse,
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  CreatePortabilityRequest,
  CreatePortabilityResponse,
  DeleteEntryRequest,
  DeleteEntryResponse,
  GetDirectoryByCidParameters,
  GetDirectoryByCidResponse,
  GetDirectoryParameters,
  GetDirectoryResponse,
  GetPortabilityParameters,
  GetPortabilityResponse,
  ListPortabilityParameters,
  ListPortabilityResponse,
  UpdateDirectoryRequest,
  UpdateDirectoryResponse,
} from './models'
import {
  CreateCidsFileParameters,
  CreateCidsFileResponse,
  GetCidsFileParameters,
  GetCidsFileResponse,
  ListCidsEventsParameters,
  ListCidsEventsResponse,
  VerifySyncParameters,
  VerifySyncResponse,
} from './models/cid'
import {
  CancelFraudMarkerParameters,
  CancelFraudMarkerResponse,
  GetFraudMarkerParameters,
  GetFraudMarkerResponse,
  MarkFraudParameters,
  MarkFraudResponse,
} from './models/fraud'
import {
  AcknowledgeInfractionParameters,
  AcknowledgeInfractionResponse,
  CancelInfractionParameters,
  CancelInfractionResponse,
  CancelRefundParameters,
  CancelRefundResponse,
  CloseInfractionParameters,
  CloseInfractionResponse,
  CloseRefundParameters,
  CloseRefundResponse,
  CreateRefundParameters,
  CreateRefundResponse,
  GetInfractionParameters,
  GetInfractionResponse,
  GetRefundParameters,
  GetRefundResponse,
  ListInfractionsParameters,
  ListInfractionsResponse,
  ListRefundsParameters,
  ListRefundsResponse,
  ReportInfractionParameters,
  ReportInfractionResponse,
} from './models/infraction'
import { PixDictApiOptions } from './types'
import { buildDictXml, parseDictXml, toQueryString } from './utils'

export class PixDictApi {
  private readonly url: string

  constructor(options: PixDictApiOptions) {
    if (!options.url) {
      throw new Error('Dict api url is required')
    }
    this.url = options.url
  }

  /**
   * Creates a new key binding with a transactional account.
   * @param request - The CreateDirectoryRequest object containing the key and transactional account information.
   * @returns A Promise that resolves to the CreateDirectoryResponse object containing the operation result.
   */
  public async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    const requestObject = buildDictXml(request, 'CreateEntryRequest')

    const response = await fetch(`${this.url}/api/v2/entries/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    const data = await response.text()
    return parseDictXml(data, 'CreateEntryResponse')
  }

  /**
   * Retrieves directory information for a specific key.
   * @param key - The key to retrieve information for.
   * @param parameters - The GetDirectoryParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetDirectoryResponse object containing the directory information.
   */
  public async getDirectory(key: string, parameters: GetDirectoryParameters): Promise<GetDirectoryResponse> {
    const response = await fetch(
      `${this.url}/api/v2/entries/${key}?IncludeStatistics=${parameters.includeStatistics}`,
      {
        headers: {
          'Content-Type': 'application/xml',
          'PI-RequestingParticipant': parameters.piRequestingParticipant,
          'PI-PayerId': parameters.piPayerId,
          'PI-EndToEndId': parameters.piEndToEndId,
        },
      },
    )

    return parseDictXml(await response.text(), 'GetEntryResponse')
  }

  /**
   * Retrieves directory information for a specific CID.
   * @param parameters - The GetDirectoryByCidParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetDirectoryByCidResponse object containing the directory information.
   */
  public async getDirectoryByCid(parameters: GetDirectoryByCidParameters): Promise<GetDirectoryByCidResponse> {
    const response = await fetch(`${this.url}/api/v2/cids/entries/${parameters.cid}`, {
      headers: {
        'Content-Type': 'application/xml',
        'PI-RequestingParticipant': parameters.piRequestingParticipant,
      },
    })

    return parseDictXml(await response.text(), 'GetEntryByCidResponse')
  }

  /**
   * Updates the directory information for a specific key.
   * @param request - The UpdateDirectoryRequest object containing the key and updated information.
   * @returns A Promise that resolves to the UpdateDirectoryResponse object containing the operation result.
   */
  public async updateDirectory(request: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> {
    const requestObject = buildDictXml(request, 'UpdateEntryRequest')

    const response = await fetch(`${this.url}/api/v2/entries/${request.key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'UpdateEntryResponse')
  }

  /**
   * Deletes the directory information for a specific key.
   * @param key - The key to delete information for.
   * @returns A Promise that resolves to the DeleteEntryResponse object containing the operation result.
   */
  public async deleteDirectory(request: DeleteEntryRequest): Promise<DeleteEntryResponse> {
    const requestObject = buildDictXml(request, 'DeleteEntryRequest')
    const response = await fetch(`${this.url}/api/v2/entries/${request.key}/delete`, {
      method: 'POST',
      body: requestObject,
      headers: {
        'Content-Type': 'application/xml',
      },
    })

    return parseDictXml(await response.text(), 'DeleteEntryResponse')
  }

  /**
   * Checks the status of multiple keys.
   * @param keys - An array of keys to check.
   * @returns A Promise that resolves to the CheckKeyResponse object containing the status of the keys.
   */
  public async checkKey(keys: string[]): Promise<CheckKeyResponse> {
    const keysObject = keys.map((key) => ({ key }))
    const requestObject = buildDictXml({ keys: keysObject }, 'CheckKeysRequest')

    const response = await fetch(`${this.url}/api-np/v2/keys/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CheckKeysResponse')
  }

  /**
   * Creates a portability request for a specific key. (aka. Reivindicação)
   * @param request - The CreatePortabilityRequest object containing the key and portability information.
   * @returns A Promise that resolves to the CreatePortabilityResponse object containing the operation result.
   */
  public async createPortability(request: CreatePortabilityRequest): Promise<CreatePortabilityResponse> {
    const requestObject = buildDictXml(request, 'CreateClaimRequest')
    const response = await fetch(`${this.url}/api/v2/claims/`, {
      method: 'POST',
      body: requestObject,
      headers: {
        'Content-Type': 'application/xml',
      },
    })

    return parseDictXml(await response.text(), 'CreateClaimResponse')
  }

  /**
   * Retrieves a list of portabilities, ordered by the LastModified field in ascending order, according to the filters passed.
   * @param parameters - The ListPortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ListPortabilityResponse object containing the portability information.
   */
  public async listPortability(parameters: ListPortabilityParameters): Promise<ListPortabilityResponse> {
    const queryParams = toQueryString(
      pascalCase({
        participant: parameters.participant,
        includeIndirectParticipants: parameters.includeIndirectParticipants,
        isDonor: parameters.isDonor,
        isClaimer: parameters.isClaimer,
        status: parameters.status,
        type: parameters.type,
        modifiedAfter: parameters.modifiedAfter,
        modifiedBefore: parameters.modifiedBefore,
        limit: parameters.limit,
      }) as Record<string, string | number | boolean | string[]>,
    )

    const response = await fetch(`${this.url}/api/v2/claims/?${queryParams}`)
    return parseDictXml(await response.text(), 'ListClaimsResponse')
  }

  /**
   * Retrieves the details of a specific portability claim.
   * @param parameters - The GetPortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetPortabilityResponse object containing the portability claim details.
   */
  public async getPortability(parameters: GetPortabilityParameters): Promise<GetPortabilityResponse> {
    const response = await fetch(`${this.url}/api/v2/claims/${parameters.id}`, {
      headers: {
        'PI-RequestingParticipant': parameters.participant,
        'Content-Type': 'application/xml',
      },
    })
    return parseDictXml(await response.text(), 'GetClaimResponse')
  }

  /**
   * Acknowledges a portability from the donor participant.
   * @param parameters - The AcknowledgePortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the AcknowledgePortabilityResponse object containing the operation result.
   */
  public async acknowledgePortability(
    parameters: AcknowledgePortabilityParameters,
  ): Promise<AcknowledgePortabilityResponse> {
    const requestObject = buildDictXml(parameters, 'AcknowledgeClaimRequest')
    const response = await fetch(`${this.url}/api/v2/claims/${parameters.claimId}/acknowledge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'AcknowledgeClaimResponse')
  }

  /**
   * Confirms a portability from the donor participant.
   * @param parameters - The ConfirmPortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ConfirmPortabilityResponse object containing the operation result.
   */
  public async confirmPortability(parameters: ConfirmPortabilityParameters): Promise<ConfirmPortabilityResponse> {
    const requestObject = buildDictXml(parameters, 'ConfirmClaimRequest')
    const response = await fetch(`${this.url}/api/v2/claims/${parameters.claimId}/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'ConfirmClaimResponse')
  }

  /**
   * Cancels a portability or ownership claim.
   * @param parameters - The CancelPortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CancelPortabilityResponse object containing the operation result.
   */
  public async cancelPortability(parameters: CancelPortabilityParameters): Promise<CancelPortabilityResponse> {
    const requestObject = buildDictXml(parameters, 'CancelClaimRequest')
    const response = await fetch(`${this.url}/api/v2/claims/${parameters.claimId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CancelClaimResponse')
  }

  /**
   * Completes a portability or ownership claim.
   * @param parameters - The CompletePortabilityParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CompletePortabilityResponse object containing the operation result.
   */
  public async completePortability(parameters: CompletePortabilityParameters): Promise<CompletePortabilityResponse> {
    const requestObject = buildDictXml(parameters, 'CompleteClaimRequest')
    const response = await fetch(`${this.url}/api/v2/claims/${parameters.claimId}/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CompleteClaimResponse')
  }

  /**
   * Creates a sync verification for a participant and key type.
   * @param parameters - The VerifySyncParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the VerifySyncResponse object containing the operation result.
   */
  public async verifySync(parameters: VerifySyncParameters): Promise<VerifySyncResponse> {
    const requestObject = buildDictXml(parameters, 'CreateSyncVerificationRequest')
    const response = await fetch(`${this.url}/api/v2/sync-verifications/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CreateSyncVerificationResponse')
  }

  /**
   * Creates a CIDs file for a participant and key type.
   * @param parameters - The CreateCidsFileParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CreateCidsFileResponse object containing the operation result.
   */
  public async createCidsFile(parameters: CreateCidsFileParameters): Promise<CreateCidsFileResponse> {
    const requestObject = buildDictXml(parameters, 'CreateCidsFileRequest')
    const response = await fetch(`${this.url}/api/v2/cids/file`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CreateCidSetFileResponse')
  }

  /**
   * Retrieves a CIDs file by ID.
   * @param parameters - The GetCidsFileParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetCidsFileResponse object containing the CIDs file details.
   */
  public async getCidsFile(parameters: GetCidsFileParameters): Promise<GetCidsFileResponse> {
    const response = await fetch(`${this.url}/api/v2/cids/file/${parameters.id}`, {
      headers: {
        'Content-Type': 'application/xml',
        'PI-RequestingParticipant': parameters.piRequestingParticipant,
      },
    })

    return parseDictXml(await response.text(), 'GetCidSetFileResponse')
  }

  /**
   * Retrieves a list of CIDs events for a participant and key type.
   * @param parameters - The ListCidsEventsParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ListCidsEventsResponse object containing the CIDs events.
   */
  public async listCidsEvents(parameters: ListCidsEventsParameters): Promise<ListCidsEventsResponse> {
    const queryParams = toQueryString(
      pascalCase({
        participant: parameters.participant,
        keyType: parameters.keyType,
        startTime: parameters.startTime,
        endTime: parameters.endTime,
        limit: parameters.limit,
      }) as Record<string, string | number | boolean | string[]>,
    )

    const response = await fetch(`${this.url}/api/v2/cids/events?${queryParams}`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })

    return parseDictXml(await response.text(), 'ListCidSetEventsResponse')
  }

  /**
   * Reports an infraction for a participant.
   * @param parameters - The ReportInfractionParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ReportInfractionResponse object containing the operation result.
   */
  public async reportInfraction(parameters: ReportInfractionParameters): Promise<ReportInfractionResponse> {
    const requestObject = buildDictXml(parameters, 'CreateInfractionReportRequest')

    const response = await fetch(`${this.url}/api/v2/infraction-reports/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CreateInfractionReportResponse')
  }

  /**
   * Retrieves a list of infractions for a participant.
   * @param parameters - The ListInfractionsParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ListInfractionsResponse object containing the infractions.
   */
  public async listInfractions(parameters: ListInfractionsParameters): Promise<ListInfractionsResponse> {
    const queryParams = toQueryString(
      pascalCase({
        participant: parameters.participant,
        includeIndirectParticipants: parameters.includeIndirectParticipants,
        isReporter: parameters.isReporter,
        isCounterparty: parameters.isCounterparty,
        status: parameters.status,
        modifiedAfter: parameters.modifiedAfter,
        modifiedBefore: parameters.modifiedBefore,
        limit: parameters.limit,
        includeDetails: parameters.includeDetails,
      }) as Record<string, string | number | boolean | string[]>,
    )

    const response = await fetch(`${this.url}/api/v2/infraction-reports?${queryParams}`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })

    return parseDictXml(await response.text(), 'ListInfractionReportsResponse')
  }

  /**
   * Retrieves an infraction by ID.
   * @param parameters - The GetInfractionParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetInfractionResponse object containing the infraction.
   */
  public async getInfraction(parameters: GetInfractionParameters): Promise<GetInfractionResponse> {
    const response = await fetch(`${this.url}/api/v2/infraction-reports/${parameters.id}`, {
      headers: {
        'Content-Type': 'application/xml',
        'PI-RequestingParticipant': parameters.piRequestingParticipant,
      },
    })

    return parseDictXml(await response.text(), 'GetInfractionReportResponse')
  }

  /**
   * Acknowledges an infraction.
   * @param parameters - The AcknowledgeInfractionParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the AcknowledgeInfractionResponse object containing the operation result.
   */
  public async acknowledgeInfraction(
    parameters: AcknowledgeInfractionParameters,
  ): Promise<AcknowledgeInfractionResponse> {
    const requestObject = buildDictXml(parameters, 'AcknowledgeInfractionReportRequest')
    const response = await fetch(`${this.url}/api/v2/infraction-reports/${parameters.infractionReportId}/acknowledge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'AcknowledgeInfractionReportResponse')
  }

  /**
   * Cancels an infraction.
   * @param parameters - The CancelInfractionParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CancelInfractionResponse object containing the operation result.
   */
  public async cancelInfraction(parameters: CancelInfractionParameters): Promise<CancelInfractionResponse> {
    const requestObject = buildDictXml(parameters, 'CancelInfractionReportRequest')
    const response = await fetch(`${this.url}/api/v2/infraction-reports/${parameters.infractionReportId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CancelInfractionReportResponse')
  }

  /**
   * Closes an infraction.
   * @param parameters - The CloseInfractionParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CloseInfractionResponse object containing the operation result.
   */
  public async closeInfraction(parameters: CloseInfractionParameters): Promise<CloseInfractionResponse> {
    const requestObject = buildDictXml(parameters, 'CloseInfractionReportRequest')
    const response = await fetch(`${this.url}/api/v2/infraction-reports/${parameters.infractionReportId}/close`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CloseInfractionReportResponse')
  }

  /**
   * The refund request can be created by the payer's PSP in cases where there is a well-founded suspicion of fraud and in those where there is an operational failure in the system of any of the participants involved in the transaction.
   * @param parameters - The CreateRefundParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CreateRefundResponse object containing the operation result.
   */
  public async createRefund(parameters: CreateRefundParameters): Promise<CreateRefundResponse> {
    const requestObject = buildDictXml(parameters, 'CreateRefundRequest')
    const response = await fetch(`${this.url}/api/v2/refunds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CreateRefundResponse')
  }

  /**
   * Retrieves a list of refunds for a participant.
   * @param parameters - The ListRefundsParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the ListRefundsResponse object containing the refunds.
   */
  public async listRefunds(parameters: ListRefundsParameters): Promise<ListRefundsResponse> {
    const queryParams = toQueryString(
      pascalCase({
        participant: parameters.participant,
        includeIndirectParticipants: parameters.includeIndirectParticipants,
        role: parameters.role,
        status: parameters.status,
        modifiedAfter: parameters.modifiedAfter,
        modifiedBefore: parameters.modifiedBefore,
        limit: parameters.limit,
        includeDetails: parameters.includeDetails,
      }) as Record<string, string | number | boolean | string[]>,
    )

    const response = await fetch(`${this.url}/api/v2/refunds?${queryParams}`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })

    return parseDictXml(await response.text(), 'ListRefundsResponse')
  }

  /**
   * Retrieves a refund by ID.
   * @param parameters - The GetRefundParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the GetRefundResponse object containing the refund.
   */
  public async getRefund(parameters: GetRefundParameters): Promise<GetRefundResponse> {
    const response = await fetch(`${this.url}/api/v2/refunds/${parameters.id}`, {
      headers: {
        'Content-Type': 'application/xml',
        'PI-RequestingParticipant': parameters.piRequestingParticipant,
      },
    })

    return parseDictXml(await response.text(), 'GetRefundResponse')
  }

  /**
   * Cancels a refund.
   * @param parameters - The CancelRefundParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CancelRefundResponse object containing the operation result.
   */
  public async cancelRefund(parameters: CancelRefundParameters): Promise<CancelRefundResponse> {
    const requestObject = buildDictXml(parameters, 'CancelRefundRequest')
    const response = await fetch(`${this.url}/api/v2/refunds/${parameters.refundId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CancelRefundResponse')
  }

  /**
   * Closes a refund.
   * @param parameters - The CloseRefundParameters object containing the parameters for the request.
   * @returns A Promise that resolves to the CloseRefundResponse object containing the operation result.
   */
  public async closeRefund(parameters: CloseRefundParameters): Promise<CloseRefundResponse> {
    const requestObject = buildDictXml(parameters, 'CloseRefundRequest')
    const response = await fetch(`${this.url}/api/v2/refunds/${parameters.refundId}/close`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CloseRefundResponse')
  }

  public async markFraud(parameters: MarkFraudParameters): Promise<MarkFraudResponse> {
    const requestObject = buildDictXml(parameters, 'CreateFraudMarkerRequest')
    const response = await fetch(`${this.url}/api/v2/fraud-markers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CreateFraudMarkerResponse')
  }

  public async getFraudMarker(parameters: GetFraudMarkerParameters): Promise<GetFraudMarkerResponse> {
    const response = await fetch(`${this.url}/api/v2/fraud-markers/${parameters.id}`, {
      headers: {
        'Content-Type': 'application/xml',
        'PI-RequestingParticipant': parameters.piRequestingParticipant,
      },
    })

    return parseDictXml(await response.text(), 'GetFraudMarkerResponse')
  }

  public async cancelFraudMarker(parameters: CancelFraudMarkerParameters): Promise<CancelFraudMarkerResponse> {
    const requestObject = buildDictXml(parameters, 'CancelFraudMarkerRequest')
    const response = await fetch(`${this.url}/api/v2/fraud-markers/${parameters.fraudMarkerId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
      },
      body: requestObject,
    })

    return parseDictXml(await response.text(), 'CancelFraudMarkerResponse')
  }
}
