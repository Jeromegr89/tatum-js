import { isHex, stringToHex, toHex } from 'web3-utils'
import { axios, validateBody, CreateRecord, ChainCreateRecord, Currency } from '@tatumio/tatum-core'
import { TransferQuorum } from '../model'

/**
 * Send Quorum store data transaction to the blockchain.
 * This operation is irreversible.
 * @param body content of the transaction to broadcast
 * @param provider url of the Quorum Server to connect to.
 * @returns transaction id of the transaction in the blockchain
 */
export const sendStoreDataTransaction = async (body: ChainCreateRecord, provider: string) => {
  ;(body as CreateRecord).chain = Currency.QUORUM
  await validateBody(body, CreateRecord)
  const data = (
    await axios.post(provider, {
      jsonrpc: '2.0',
      method: 'eth_sendTransaction',
      params: [
        {
          from: body.from,
          to: body.to,
          nonce: body.nonce,
          data: body.data ? (isHex(body.data) ? stringToHex(body.data) : toHex(body.data)) : undefined,
        },
      ],
      id: 1,
    })
  ).data
  if (data.result) {
    return { txId: data.result }
  }
  throw new Error(data.error.message)
}

/**
 * Send Quorum transaction to the blockchain.
 * This operation is irreversible.
 * @param body content of the transaction to broadcast
 * @param provider url of the Quorum Server to connect to.
 * @returns transaction id of the transaction in the blockchain
 */
export const sendBlockchainTransaction = async (body: TransferQuorum, provider: string) => {
  await validateBody(body, TransferQuorum)
  const data = (
    await axios.post(provider, {
      jsonrpc: '2.0',
      method: 'eth_sendTransaction',
      params: [body],
      id: 1,
    })
  ).data
  if (data.result) {
    return { txId: data.result }
  }
  throw new Error(data.error.message)
}