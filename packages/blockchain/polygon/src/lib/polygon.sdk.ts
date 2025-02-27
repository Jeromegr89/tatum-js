import { evmBasedMarketplace, evmBasedSdk } from '@tatumio/shared-blockchain-evm-based'
import { Blockchain, Web3Request, Web3Response } from '@tatumio/shared-core'
import { BlockchainPolygonMaticService, BlockchainFungibleTokenService } from '@tatumio/api-client'
import { SDKArguments } from '@tatumio/shared-abstract-sdk'
import { polygonWeb3 } from './services/polygon.web3'
import { polygonKmsService } from './services/polygon.kms'
import { polygonTxService } from './services/polygon.tx'
import { polygonAuctionService } from './services/polygon.auction'

const blockchain = Blockchain.POLYGON

export const TatumPolygonSDK = (args: SDKArguments) => {
  const web3 = polygonWeb3({ blockchain })
  const api = BlockchainPolygonMaticService
  const txService = polygonTxService({ blockchain, web3 })
  const { nft, ...evmSdk } = evmBasedSdk({ ...args, blockchain, web3 })

  return {
    ...evmSdk,
    api,
    kms: polygonKmsService({ blockchain, web3 }),
    transaction: txService.native,
    erc20: {
      ...txService.erc20,
      getErc20TransactionByAddress: BlockchainFungibleTokenService.erc20GetTransactionByAddress,
      getErc20AccountBalance: BlockchainFungibleTokenService.erc20GetBalance,
    },
    nft: {
      ...txService.erc721,
      ...nft,
    },
    multiToken: txService.multiToken,
    smartContract: txService.smartContract,
    custodial: txService.custodial,
    marketplace: {
      ...evmBasedMarketplace({
        blockchain,
        web3,
        broadcastFunction: BlockchainPolygonMaticService.polygonBroadcast,
      }),
      auction: polygonAuctionService({ blockchain, web3 }),
    },
    httpDriver: async (request: Web3Request): Promise<Web3Response> => {
      return api.polygonWeb3Driver(args.apiKey, { ...request, jsonrpc: '2.0' })
    },
    blockchain: {
      broadcast: BlockchainPolygonMaticService.polygonBroadcast,
      getTransactionsCount: BlockchainPolygonMaticService.polygonGetTransactionCount,
      getCurrentBlock: BlockchainPolygonMaticService.polygonGetCurrentBlock,
      getBlock: BlockchainPolygonMaticService.polygonGetBlock,
      getBlockchainAccountBalance: BlockchainPolygonMaticService.polygonGetBalance,
      get: BlockchainPolygonMaticService.polygonGetTransaction,
      getAccountTransactions: BlockchainPolygonMaticService.polygonGetTransactionByAddress,
      estimateGas: BlockchainPolygonMaticService.polygonEstimateGas,
      smartContractInvocation: BlockchainPolygonMaticService.polygonBlockchainSmartContractInvocation,
      blockchainTransfer: BlockchainPolygonMaticService.polygonBlockchainTransfer,
      generateAddress: BlockchainPolygonMaticService.polygonGenerateAddress,
      generateAddressPrivateKey: BlockchainPolygonMaticService.polygonGenerateAddressPrivateKey,
      generateWallet: BlockchainPolygonMaticService.polygonGenerateWallet,
      web3Driver: BlockchainPolygonMaticService.polygonWeb3Driver,
    },
  }
}
