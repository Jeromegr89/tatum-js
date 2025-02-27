import {
  blockchainTestFactory,
  REPLACE_ME_WITH_TATUM_API_KEY,
  TestCasesApiCallMapping,
} from '@tatumio/shared-testing-common'
import * as apiClient from '@tatumio/api-client'
import { TatumAlgoSDK } from '../algo.sdk'

jest.mock('@tatumio/api-client')
const mockedApi = jest.mocked(apiClient.ApiServices, true)

describe('TatumAlgoSDK - node', () => {
  const sdk = TatumAlgoSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

  afterEach(() => {
    jest.clearAllMocks()
  })

  const node = sdk.node
  const api = mockedApi.blockchain.algo

  const nodeFunctionsMapping: TestCasesApiCallMapping<typeof node> = {
    indexerGetDriver: [api.algoNodeIndexerGetDriver, 'some-api-key'],
    getDriver: [api.algoNodeGetDriver, 'some-api-key'],
    postDriver: [api.algoNodePostDriver, 'some-api-key', { rawtxn: 'hello' }],
  }

  describe('API methods mapping', () => {
    blockchainTestFactory.apiMethods(node, nodeFunctionsMapping)
  })
})
