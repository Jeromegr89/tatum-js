import { TatumEthSDK } from '@tatumio/eth'
import { REPLACE_ME_WITH_TATUM_API_KEY } from '@tatumio/shared-testing-common'

const ethSDK = TatumEthSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

export async function ethTxWithSignatureIdExample(): Promise<void> {
  // NATIVE
  const preparedTransferNativeTransaction = await ethSDK.transaction.prepare.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  const sentTransferNativeTransaction = await ethSDK.transaction.send.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  // ERC20(FUNGIBLE TOKEN)
  const preparedDeployErc20Transaction = await ethSDK.erc20.prepare.deploySignedTransaction({
    symbol: 'ERC_SYMBOL',
    name: 'mytx',
    address: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    supply: '10000000',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    digits: 18,
    totalCap: '10000000',
    nonce: 3252345722143,
    fee: {
      gasLimit: '171864',
      gasPrice: '20',
    },
  })

  const sentDeployErc20Transaction = await ethSDK.erc20.send.deploySignedTransaction({
    symbol: 'ERC_SYMBOL',
    name: 'mytx',
    address: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    supply: '10000000',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    digits: 18,
    totalCap: '10000000',
    nonce: 3252345722143,
    fee: {
      gasLimit: '171864',
      gasPrice: '20',
    },
  })

  const preparedTransferErc20Transaction = await ethSDK.erc20.prepare.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    digits: 18,
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  const sentTransferErc20Transaction = await ethSDK.erc20.send.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    digits: 18,
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  const preparedMintErc20Transaction = await ethSDK.erc20.prepare.mintSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
  })

  const sentMintErc20Transaction = await ethSDK.erc20.send.mintSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
  })

  const preparedBurnErc20Transaction = await ethSDK.erc20.prepare.burnSignedTransaction({
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
  })

  const sentBurnErc20Transaction = await ethSDK.erc20.send.burnSignedTransaction({
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 3252345722143,
  })

  // ERC721(NFT)
  const preparedDeployErc721Transaction = await ethSDK.nft.prepare.deploySignedTransaction({
    chain: 'ETH',
    name: 'MY_TOKEN',
    symbol: '1oido3id3',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentDeployErc721Transaction = await ethSDK.nft.send.deploySignedTransaction({
    chain: 'ETH',
    name: 'MY_TOKEN',
    symbol: '1oido3id3',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintSignedTransaction = await ethSDK.nft.prepare.mintSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    url: 'https://my_token_data.com',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintSignedTransaction = await ethSDK.nft.send.mintSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    url: 'https://my_token_data.com',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleSignedTransaction = await ethSDK.nft.prepare.mintMultipleSignedTransaction({
    chain: 'ETH',
    to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
    tokenId: ['345634563', '53545345'],
    url: ['https://my_token_data.com', 'https://my_token_data2.com'],
    authorAddresses: [
      ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      ['0x687422eEA2cB73B5d3e242bA5456b782919AFc85'],
    ],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintMultipleSignedTransaction = await ethSDK.nft.send.mintMultipleSignedTransaction({
    chain: 'ETH',
    to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
    tokenId: ['345634563', '53545345'],
    url: ['https://my_token_data.com', 'https://my_token_data2.com'],
    authorAddresses: [
      ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      ['0x687422eEA2cB73B5d3e242bA5456b782919AFc85'],
    ],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintCashbackSignedTransaction = await ethSDK.nft.prepare.mintCashbackSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    tokenId: '45343653',
    url: 'https://my_token_data.com',
    cashbackValues: ['0.5', '0.5'],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintCashbackSignedTransaction = await ethSDK.nft.send.mintCashbackSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    tokenId: '45343653',
    url: 'https://my_token_data.com',
    cashbackValues: ['0.5', '0.5'],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleCashbackSignedTransaction =
    await ethSDK.nft.prepare.mintMultipleCashbackSignedTransaction({
      chain: 'ETH',
      tokenId: ['53564656', '536456456'],
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      url: ['https://my_token_data.com', 'https://my_token_data2.com'],
      cashbackValues: [['0.5'], ['0.5']],
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentMintMultipleCashbackSignedTransaction =
    await ethSDK.nft.send.mintMultipleCashbackSignedTransaction({
      chain: 'ETH',
      tokenId: ['53564656', '536456456'],
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      url: ['https://my_token_data.com', 'https://my_token_data2.com'],
      cashbackValues: [['0.5'], ['0.5']],
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedMintProvenanceSignedTransaction = await ethSDK.nft.prepare.mintProvenanceSignedTransaction({
    chain: 'ETH',
    tokenId: '5435345',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    url: 'https://my_token_data.com',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintProvenanceSignedTransaction = await ethSDK.nft.send.mintProvenanceSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    tokenId: '5435345',
    url: 'https://my_token_data.com',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleProvenanceSignedTransaction =
    await ethSDK.nft.prepare.mintMultipleProvenanceSignedTransaction({
      chain: 'ETH',
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      tokenId: ['53564656', '536456456'],
      url: ['https://my_token_data.com'],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fixedValues: [['0.5'], ['0.5']],
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentMintMultipleProvenanceSignedTransaction =
    await ethSDK.nft.send.mintMultipleProvenanceSignedTransaction({
      chain: 'ETH',
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      tokenId: ['53564656', '536456456'],
      url: ['https://my_token_data.com'],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fixedValues: [['0.5'], ['0.5']],
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedTransferSignedTransaction = await ethSDK.nft.prepare.transferSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentTransferSignedTransaction = await ethSDK.nft.send.transferSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedUpdateCashbackForAuthorSignedTransaction =
    await ethSDK.nft.prepare.updateCashbackForAuthorSignedTransaction({
      chain: 'ETH',
      tokenId: '453453',
      cashbackValue: '0.8',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentUpdateCashbackForAuthorSignedTransaction =
    await ethSDK.nft.send.updateCashbackForAuthorSignedTransaction({
      chain: 'ETH',
      tokenId: '453453',
      cashbackValue: '0.8',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedBurnErc721Transaction = await ethSDK.nft.prepare.burnSignedTransaction({
    chain: 'ETH',
    tokenId: '45343653',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentBurnErc721Transaction = await ethSDK.nft.send.burnSignedTransaction({
    chain: 'ETH',
    tokenId: '45343653',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  // ERC1155(MULTI TOKEN)
  const preparedDeployMultiTokenTransaction = await ethSDK.multiToken.prepare.deployMultiTokenTransaction({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    uri: 'tatum',
  })

  const sentDeployMultiTokenTransaction = await ethSDK.multiToken.send.deployMultiTokenTransaction({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    uri: 'tatum',
  })

  const preparedMintMultiTokenTransaction = await ethSDK.multiToken.prepare.mintMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '1000',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const sentMintMultiTokenTransaction = await ethSDK.multiToken.send.mintMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '1000',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedMintMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.mintMultiTokenBatchTransaction({
      to: ['0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f', '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f'],
      chain: 'ETH',
      tokenId: [['123'], ['321']],
      amounts: [['1000'], ['100']],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const sentMintMultiTokenBatchTransaction = await ethSDK.multiToken.send.mintMultiTokenBatchTransaction({
    to: ['0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f', '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f'],
    chain: 'ETH',
    tokenId: [['123'], ['321']],
    amounts: [['1000'], ['100']],
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedTransferMultiTokenTransaction = await ethSDK.multiToken.prepare.transferMultiTokenTransaction(
    {
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: '123',
      amount: '10',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    },
  )

  const sentTransferMultiTokenTransaction = await ethSDK.multiToken.send.transferMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '10',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedTransferMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.transferMultiTokenBatchTransaction({
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const sentTransferMultiTokenBatchTransaction =
    await ethSDK.multiToken.send.transferMultiTokenBatchTransaction({
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const preparedBurnMultiTokenTransaction = await ethSDK.multiToken.prepare.burnMultiTokenTransaction({
    chain: 'ETH',
    tokenId: '123',
    amount: '1',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  const sentBurnMultiTokenTransaction = await ethSDK.multiToken.send.burnMultiTokenTransaction({
    chain: 'ETH',
    tokenId: '123',
    amount: '1',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  const preparedBurnMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.burnMultiTokenBatchTransaction({
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
      account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    })

  const sentMintBurnTokenBatchTransaction = await ethSDK.multiToken.send.burnMultiTokenBatchTransaction({
    chain: 'ETH',
    tokenId: ['123', '321'],
    amounts: ['1000', '100'],
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  // CUSTODIAL
  const preparedTransferFromCustodialWallet = await ethSDK.custodial.prepare.transferFromCustodialWallet({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractType: 0,
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    recipient: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenId: '20',
  })

  const sentTransferFromCustodialWallet = await ethSDK.custodial.send.transferFromCustodialWallet({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractType: 0,
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    recipient: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenId: '20',
  })

  const preparedBatchTransferFromCustodialWallet =
    await ethSDK.custodial.prepare.batchTransferFromCustodialWallet({
      chain: 'ETH',
      signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
      contractType: [0, 1, 2, 3],
      custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
      tokenAddress: [
        '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867',
        '0x9b0eea3aa1e61b8ecb7d1c8260cd426eb2a9a698',
        '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
        '0',
      ],
      recipient: [
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      ],
      amount: ['1', '0', '1', '3'],
    })

  const sentBatchTransferFromCustodialWallet = await ethSDK.custodial.send.batchTransferFromCustodialWallet({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractType: [0, 1, 2, 3],
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: [
      '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867',
      '0x9b0eea3aa1e61b8ecb7d1c8260cd426eb2a9a698',
      '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
      '0',
    ],
    recipient: [
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    ],
    amount: ['1', '0', '1', '3'],
  })

  const preparedApproveFromCustodialWallet = await ethSDK.custodial.prepare.approveFromCustodialWallet({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractType: 0,
    custodialAddress: '0x95abdd7406a6aca49797e833bacc3edaa394853a',
    tokenAddress: '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
    spender: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    amount: '1',
  })

  const sentApproveFromCustodialWallet = await ethSDK.custodial.send.approveFromCustodialWallet({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    contractType: 0,
    custodialAddress: '0x95abdd7406a6aca49797e833bacc3edaa394853a',
    tokenAddress: '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
    spender: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    amount: '1',
  })

  const preparedCustodialWalletBatch = await ethSDK.custodial.prepare.custodialWalletBatch({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    batchCount: 100,
    owner: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
  })

  const sentCustodialWalletBatch = await ethSDK.custodial.send.custodialWalletBatch({
    chain: 'ETH',
    signatureId: 'cac88687-33ed-4ca1-b1fc-b02986a90975',
    batchCount: 100,
    owner: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
  })
}

export async function ethTxWithPrivateKeyExample(): Promise<void> {
  // ERC20(FUNGIBLE TOKEN)
  const preparedDeployErc20Transaction = await ethSDK.erc20.prepare.deploySignedTransaction({
    symbol: 'ERC_SYMBOL',
    name: 'mytx',
    address: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    supply: '10000000',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    digits: 18,
    totalCap: '10000000',
    nonce: 3252345722143,
    fee: {
      gasLimit: '171864',
      gasPrice: '20',
    },
  })

  const sentDeployErc20Transaction = await ethSDK.erc20.send.deploySignedTransaction({
    symbol: 'ERC_SYMBOL',
    name: 'mytx',
    address: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    supply: '10000000',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    digits: 18,
    totalCap: '10000000',
    nonce: 3252345722143,
    fee: {
      gasLimit: '171864',
      gasPrice: '20',
    },
  })

  const preparedTransferErc20Transaction = await ethSDK.erc20.prepare.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    digits: 18,
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  const sentTransferErc20Transaction = await ethSDK.erc20.send.transferSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    digits: 18,
    nonce: 3252345722143,
    fee: {
      gasLimit: '53632',
      gasPrice: '20',
    },
  })

  const preparedMintErc20Transaction = await ethSDK.erc20.prepare.mintSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 3252345722143,
  })

  const sentMintErc20Transaction = await ethSDK.erc20.send.mintSignedTransaction({
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 3252345722143,
  })

  const preparedBurnErc20Transaction = await ethSDK.erc20.prepare.burnSignedTransaction({
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 3252345722143,
  })

  const sentBurnErc20Transaction = await ethSDK.erc20.send.burnSignedTransaction({
    amount: '10',
    contractAddress: '0x0b9808fce74030c87aae334a30f6c8f6c66b090d',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 3252345722143,
  })

  // ERC721(NFT)
  const preparedDeployErc721Transaction = await ethSDK.nft.prepare.deploySignedTransaction({
    chain: 'ETH',
    name: 'MY_TOKEN',
    symbol: '1oido3id3',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentDeployErc721Transaction = await ethSDK.nft.send.deploySignedTransaction({
    chain: 'ETH',
    name: 'MY_TOKEN',
    symbol: '1oido3id3',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintSignedTransaction = await ethSDK.nft.prepare.mintSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    url: 'https://my_token_data.com',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintSignedTransaction = await ethSDK.nft.send.mintSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    url: 'https://my_token_data.com',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleSignedTransaction = await ethSDK.nft.prepare.mintMultipleSignedTransaction({
    chain: 'ETH',
    to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
    tokenId: ['345634563', '53545345'],
    url: ['https://my_token_data.com', 'https://my_token_data2.com'],
    authorAddresses: [
      ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      ['0x687422eEA2cB73B5d3e242bA5456b782919AFc85'],
    ],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintMultipleSignedTransaction = await ethSDK.nft.send.mintMultipleSignedTransaction({
    chain: 'ETH',
    to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
    tokenId: ['345634563', '53545345'],
    url: ['https://my_token_data.com', 'https://my_token_data2.com'],
    authorAddresses: [
      ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      ['0x687422eEA2cB73B5d3e242bA5456b782919AFc85'],
    ],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintCashbackSignedTransaction = await ethSDK.nft.prepare.mintCashbackSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    tokenId: '45343653',
    url: 'https://my_token_data.com',
    cashbackValues: ['0.5', '0.5'],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintCashbackSignedTransaction = await ethSDK.nft.send.mintCashbackSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    tokenId: '45343653',
    url: 'https://my_token_data.com',
    cashbackValues: ['0.5', '0.5'],
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleCashbackSignedTransaction =
    await ethSDK.nft.prepare.mintMultipleCashbackSignedTransaction({
      chain: 'ETH',
      tokenId: ['53564656', '536456456'],
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      url: ['https://my_token_data.com', 'https://my_token_data2.com'],
      cashbackValues: [['0.5'], ['0.5']],
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentMintMultipleCashbackSignedTransaction =
    await ethSDK.nft.send.mintMultipleCashbackSignedTransaction({
      chain: 'ETH',
      tokenId: ['53564656', '536456456'],
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      url: ['https://my_token_data.com', 'https://my_token_data2.com'],
      cashbackValues: [['0.5'], ['0.5']],
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedMintProvenanceSignedTransaction = await ethSDK.nft.prepare.mintProvenanceSignedTransaction({
    chain: 'ETH',
    tokenId: '5435345',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    url: 'https://my_token_data.com',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentMintProvenanceSignedTransaction = await ethSDK.nft.send.mintProvenanceSignedTransaction({
    chain: 'ETH',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    tokenId: '5435345',
    url: 'https://my_token_data.com',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedMintMultipleProvenanceSignedTransaction =
    await ethSDK.nft.prepare.mintMultipleProvenanceSignedTransaction({
      chain: 'ETH',
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      tokenId: ['53564656', '536456456'],
      url: ['https://my_token_data.com'],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fixedValues: [['0.5'], ['0.5']],
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentMintMultipleProvenanceSignedTransaction =
    await ethSDK.nft.send.mintMultipleProvenanceSignedTransaction({
      chain: 'ETH',
      to: ['0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9', '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9'],
      tokenId: ['53564656', '536456456'],
      url: ['https://my_token_data.com'],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fixedValues: [['0.5'], ['0.5']],
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedTransferSignedTransaction = await ethSDK.nft.prepare.transferSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentTransferSignedTransaction = await ethSDK.nft.send.transferSignedTransaction({
    chain: 'ETH',
    tokenId: '453453',
    to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const preparedUpdateCashbackForAuthorSignedTransaction =
    await ethSDK.nft.prepare.updateCashbackForAuthorSignedTransaction({
      chain: 'ETH',
      tokenId: '453453',
      cashbackValue: '0.8',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const sentUpdateCashbackForAuthorSignedTransaction =
    await ethSDK.nft.send.updateCashbackForAuthorSignedTransaction({
      chain: 'ETH',
      tokenId: '453453',
      cashbackValue: '0.8',
      contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      nonce: 46533715.43995557,
      fee: {
        gasLimit: '326452',
        gasPrice: '20',
      },
    })

  const preparedBurnErc721Transaction = await ethSDK.nft.prepare.burnSignedTransaction({
    chain: 'ETH',
    tokenId: '45343653',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  const sentBurnErc721Transaction = await ethSDK.nft.send.burnSignedTransaction({
    chain: 'ETH',
    tokenId: '45343653',
    contractAddress: '0x687422eEA2cB73B5d3e242bA5456b782919AFc85',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    nonce: 46533715.43995557,
    fee: {
      gasLimit: '326452',
      gasPrice: '20',
    },
  })

  // ERC1155(MULTI TOKEN)
  const preparedDeployMultiTokenTransaction = await ethSDK.multiToken.prepare.deployMultiTokenTransaction({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    uri: 'tatum',
  })

  const sentDeployMultiTokenTransaction = await ethSDK.multiToken.send.deployMultiTokenTransaction({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    uri: 'tatum',
  })

  const preparedMintMultiTokenTransaction = await ethSDK.multiToken.prepare.mintMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '1000',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const sentMintMultiTokenTransaction = await ethSDK.multiToken.send.mintMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '1000',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedMintMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.mintMultiTokenBatchTransaction({
      to: ['0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f', '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f'],
      chain: 'ETH',
      tokenId: [['123'], ['321']],
      amounts: [['1000'], ['100']],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const sentMintMultiTokenBatchTransaction = await ethSDK.multiToken.send.mintMultiTokenBatchTransaction({
    to: ['0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f', '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f'],
    chain: 'ETH',
    tokenId: [['123'], ['321']],
    amounts: [['1000'], ['100']],
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedTransferMultiTokenTransaction = await ethSDK.multiToken.prepare.transferMultiTokenTransaction(
    {
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: '123',
      amount: '10',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    },
  )

  const sentTransferMultiTokenTransaction = await ethSDK.multiToken.send.transferMultiTokenTransaction({
    to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    chain: 'ETH',
    tokenId: '123',
    amount: '10',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
  })

  const preparedTransferMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.transferMultiTokenBatchTransaction({
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const sentTransferMultiTokenBatchTransaction =
    await ethSDK.multiToken.send.transferMultiTokenBatchTransaction({
      to: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    })

  const preparedBurnMultiTokenTransaction = await ethSDK.multiToken.prepare.burnMultiTokenTransaction({
    chain: 'ETH',
    tokenId: '123',
    amount: '1',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  const sentBurnMultiTokenTransaction = await ethSDK.multiToken.send.burnMultiTokenTransaction({
    chain: 'ETH',
    tokenId: '123',
    amount: '1',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  const preparedBurnMultiTokenBatchTransaction =
    await ethSDK.multiToken.prepare.burnMultiTokenBatchTransaction({
      chain: 'ETH',
      tokenId: ['123', '321'],
      amounts: ['1000', '100'],
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
      account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
    })

  const sentMintBurnTokenBatchTransaction = await ethSDK.multiToken.send.burnMultiTokenBatchTransaction({
    chain: 'ETH',
    tokenId: ['123', '321'],
    amounts: ['1000', '100'],
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractAddress: '0x2c77a428b01e6403f237b7417a7091a3a5179f14',
    account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
  })

  // CUSTODIAL
  const preparedTransferFromCustodialWallet = await ethSDK.custodial.prepare.transferFromCustodialWallet({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractType: 0,
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    recipient: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenId: '20',
  })

  const sentTransferFromCustodialWallet = await ethSDK.custodial.send.transferFromCustodialWallet({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractType: 0,
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    recipient: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenId: '20',
  })

  const preparedBatchTransferFromCustodialWallet =
    await ethSDK.custodial.prepare.batchTransferFromCustodialWallet({
      chain: 'ETH',
      fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
      contractType: [0, 1, 2, 3],
      custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
      tokenAddress: [
        '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867',
        '0x9b0eea3aa1e61b8ecb7d1c8260cd426eb2a9a698',
        '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
        '0',
      ],
      recipient: [
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
        '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      ],
      amount: ['1', '0', '1', '3'],
    })

  const sentBatchTransferFromCustodialWallet = await ethSDK.custodial.send.batchTransferFromCustodialWallet({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractType: [0, 1, 2, 3],
    custodialAddress: '0x009bc01b990e2781e8a961fd792f4ebb12a683b4',
    tokenAddress: [
      '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867',
      '0x9b0eea3aa1e61b8ecb7d1c8260cd426eb2a9a698',
      '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
      '0',
    ],
    recipient: [
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
      '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    ],
    amount: ['1', '0', '1', '3'],
  })

  const preparedApproveFromCustodialWallet = await ethSDK.custodial.prepare.approveFromCustodialWallet({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractType: 0,
    custodialAddress: '0x95abdd7406a6aca49797e833bacc3edaa394853a',
    tokenAddress: '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
    spender: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    amount: '1',
  })

  const sentApproveFromCustodialWallet = await ethSDK.custodial.send.approveFromCustodialWallet({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    contractType: 0,
    custodialAddress: '0x95abdd7406a6aca49797e833bacc3edaa394853a',
    tokenAddress: '0x0fd723c4db392f4bc4b999eaacd2b4a8099fefa3',
    spender: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    amount: '1',
  })

  const preparedCustodialWalletBatch = await ethSDK.custodial.prepare.custodialWalletBatch({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    batchCount: 100,
    owner: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
  })

  const sentCustodialWalletBatch = await ethSDK.custodial.send.custodialWalletBatch({
    chain: 'ETH',
    fromPrivateKey: '0x1612736ca819d2c5907a07d4e4dfb91dd5a8b3691079289afaee824ddcfdf495',
    batchCount: 100,
    owner: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
  })
}

export async function ethTxFeesCovered(): Promise<void> {
  const generateCustodialWalletBatch = await ethSDK.custodial.generateCustodialBatch({
    chain: 'ETH',
    batchCount: 100,
    owner: '0x8cb76aEd9C5e336ef961265c6079C14e9cD3D2eA',
    feesCovered: true,
  })
}
