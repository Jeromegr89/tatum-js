import { TatumSDK } from '@tatumio/sdk'
import { REPLACE_ME_WITH_TATUM_API_KEY } from '@tatumio/shared-testing-common'
import { Currency } from '@tatumio/api-client'

const tatumSDK = TatumSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

export async function logExample() {
  const { txId } = await tatumSDK.record.storeLog({
    chain: 'ETH',
    data: 'record',
    fromPrivateKey: 'PRIVATE KEY',
  })

  // @TODO OPENAPI BUG - only ETH
  const { data } = await tatumSDK.record.getLog(Currency.ETH, txId)
}
