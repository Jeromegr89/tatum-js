import { REPLACE_ME_WITH_TATUM_API_KEY, TEST_DATA } from '@tatumio/shared-testing-common'
import {
  ChainFlowBurnNft,
  ChainFlowMintMultipleNft,
  ChainFlowMintNft,
  ChainFlowTransferNft,
  Blockchain,
  TransferFlow,
  TransferFlowCustomTx,
} from '@tatumio/shared-core'
import dedent from 'dedent-js'
import { flowTxService } from '../services/flow.tx'

describe('flowTxService', () => {
  jest.setTimeout(999999)

  const txService = flowTxService({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

  describe('transactions', () => {
    describe('sign', () => {
      it('signs', () => {
        expect(txService.sign(TEST_DATA.FLOW.TESTNET.PRIVATE_KEY_0, Buffer.from('some message'))).toEqual(
          'b4fc7c69b22b61dd23d93c0059e674919e6f27dcb6a3234aa920c6a03998ee0d5f91a1b40c18c3c3360e1e6d23bd7eaf2a974f4e65c4dfa44be0fcb644ba0932',
        )
      })
    })
    describe('getSigner', () => {
      it('get signer with sign function', async () => {
        const signer = txService.getSigner(
          TEST_DATA.FLOW.TESTNET.PRIVATE_KEY_0,
          TEST_DATA.FLOW.TESTNET.ADDRESS_0,
        )
        expect(signer).toBeDefined()
        expect(signer.signer({ account: 'account' }).account).toBe('account')
        expect(
          await signer.signer({ account: 'account' }).signingFunction({ message: 'some message' }),
        ).toEqual({
          addr: '0x8091e703a79317a535d96ae6f4bf1c73d2120983e039b2b4cac93093eab8a6f2c6c4e1d0c6a5b99650af3a68f7c855e87d41d761bfc779a250790aa14162625f',
          keyId: 0,
          signature:
            '361fe2a2c79ab9378576c4436a9df1a275e1a67592c67cb6d430de0579bda8ba565d67a25457603120707c048eeb80be094974a8f1729064c847a27479b8dfa0',
        })
      })
    })
    describe('getApiSigner', () => {
      it('get api signer', async () => {
        const apiSigner = txService.getApiSigner(true)
        expect(apiSigner.keyHash.startsWith('FLOW_PROPOSAL_KEY')).toBeTruthy()
        expect(
          await (await apiSigner.signer({ account: 'account' })).signingFunction({ message: 'some message' }),
        ).toEqual({
          addr: '0x87fe4ebd0cddde06',
          keyId: 0,
          signature:
            'a1c86ebfe1a60cb4a710c25b2655f0878f929b0a7a47420e65d3f256b5703f9200be814628be0ded12855ff2bd13427f74e298fd6d80a780660e019608311b24',
        })
      })
    })
    it('create account from public key', async () => {
      const result = await txService.createAccountFromPublicKey(
        true,
        '968c3ce11e871cb2b7161b282655ee5fcb051f3c04894705d771bf11c6fbebfc6556ab8a0c04f45ea56281312336d0668529077c9d66891a6cad3db877acbe90',
        '0x955cd3f17b2fd8ad',
        '37afa218d41d9cd6a2c6f2b96d9eaa3ad96c598252bc50e4d45d62f9356a51f8',
      )
      expect(result.txId).toBeDefined()
      expect(result.address).toBeDefined()
    })
    it('should add public key to account', async () => {
      const result = await txService.addPublicKeyToAccount(
        true,
        '968c3ce11e871cb2b7161b282655ee5fcb051f3c04894705d771bf11c6fbebfc6556ab8a0c04f45ea56281312336d0668529077c9d66891a6cad3db877acbe90',
        '0x955cd3f17b2fd8ad',
        '37afa218d41d9cd6a2c6f2b96d9eaa3ad96c598252bc50e4d45d62f9356a51f8',
      )
      expect(result.address).toBe('0x955cd3f17b2fd8ad')
      expect(result.txId).toBeDefined()
    })
    it('should send FLOW transaction', async () => {
      const body: TransferFlow = {
        to: '0x21cbd745a4df66f1',
        amount: '0.001',
        currency: Blockchain.FLOW,
        privateKey: '44179e42e147b391d3deb8a7a160b9490941cd7292936e6cc7277166a99ef058',
        account: '0x4f09d8d43e4967b7',
      }
      const result = await txService.sendTransaction(
        true,
        body,
        () =>
          txService.getSigner(
            '44179e42e147b391d3deb8a7a160b9490941cd7292936e6cc7277166a99ef058',
            '0x4f09d8d43e4967b7',
            0,
          ).signer,
        () =>
          txService.getSigner(
            '44179e42e147b391d3deb8a7a160b9490941cd7292936e6cc7277166a99ef058',
            '0x4f09d8d43e4967b7',
          ).signer,
      )
      expect(result.txId).toBeDefined()
    })

    it('should send FLOW API signer transaction', async () => {
      const body: TransferFlow = {
        to: '0x21cbd745a4df66f1',
        amount: '0.001',
        account: '0x4f09d8d43e4967b7',
        privateKey: '44179e42e147b391d3deb8a7a160b9490941cd7292936e6cc7277166a99ef058',
        currency: Blockchain.FLOW,
      }
      const result = await txService.sendTransaction(true, body)
      expect(result.txId).toBeDefined()
    })

    it('should mint NFT FLOW API signer transaction', async () => {
      const body: ChainFlowMintNft = {
        to: '0x10247089e55180c9',
        contractAddress: '2d103773-50e2-4a37-ac3d-61bc6af8faee',
        url: 'https://www.my-nft-url.com',
        account: '0x10247089e55180c9',
        privateKey: '3881849dd540a0c80383c3727951d35e3e9e8c238ec82a581726c3fc2ca17bc4',
      }
      const result = await txService.sendNftMintToken(true, body)
      expect(result.txId).toBeDefined()
      expect(result.tokenId).toBeDefined()
    })

    it('should burn NFT FLOW API signer transaction', async () => {
      const { tokenId } = await mintNFT()
      const body: ChainFlowBurnNft = {
        tokenId,
        contractAddress: '2d103773-50e2-4a37-ac3d-61bc6af8faee',
        account: '0x10247089e55180c9',
        privateKey: '3881849dd540a0c80383c3727951d35e3e9e8c238ec82a581726c3fc2ca17bc4',
      }
      const result = await txService.sendNftBurnToken(true, body)
      expect(result.txId).toBeDefined()
    })

    it('should mint multiple NFT FLOW API signer transaction', async () => {
      const body: ChainFlowMintMultipleNft = {
        to: ['0x10247089e55180c9'],
        contractAddress: '2d103773-50e2-4a37-ac3d-61bc6af8faee',
        url: ['url'],
        account: '0x10247089e55180c9',
        privateKey: '3881849dd540a0c80383c3727951d35e3e9e8c238ec82a581726c3fc2ca17bc4',
      }
      const result = await txService.sendNftMintMultipleToken(true, body)
      expect(result.txId).toBeDefined()
      expect(result.tokenId).toBeDefined()
    })

    it('should send FLOW custom transaction', async () => {
      const body: TransferFlowCustomTx = {
        transaction: dedent`transaction() {
    prepare(signer: AuthAccount) {
      signer.addPublicKey("f845b840181369ec8500ddc70252c0825fba8c2914cf9f778ed67fa103ebf7f665ffb37476ccbe17ecf4115de2710aca493be06c5f592a6686805be78d55640c4ec555b6030380".decodeHex())
    }}`,
        args: [],
        account: '0x955cd3f17b2fd8ad',
        privateKey: '37afa218d41d9cd6a2c6f2b96d9eaa3ad96c598252bc50e4d45d62f9356a51f8',
      }
      const result = await txService.sendCustomTransaction(true, body)
      expect(result.txId).toBeDefined()
      expect(result.events).toBeDefined()
    })

    it('should get NFT token by address', async () => {
      await mintNFT()
      const result = await txService.getNftTokenByAddress(true, '0x10247089e55180c9', 'String')
      expect(result).toBeDefined()
    })

    it('should get NFT token metadata', async () => {
      const { tokenId } = await mintNFT()
      const result = await txService.getNftMetadata(
        true,
        '0x10247089e55180c9',
        tokenId,
        '2d103773-50e2-4a37-ac3d-61bc6af8faee',
      )
      expect(result).toBeDefined()
    })

    it('sendNftTransferToken', async () => {
      const { tokenId } = await mintNFT()
      const body: ChainFlowTransferNft = {
        to: '0x10247089e55180c9',
        account: '0x10247089e55180c9',
        contractAddress: '2d103773-50e2-4a37-ac3d-61bc6af8faee',
        tokenId,
        privateKey: '3881849dd540a0c80383c3727951d35e3e9e8c238ec82a581726c3fc2ca17bc4',
      }
      const result = await txService.sendNftTransferToken(true, body)
      expect(result.txId).toBeDefined()
    })
  })

  async function mintNFT() {
    const body: ChainFlowMintNft = {
      to: '0x10247089e55180c9',
      contractAddress: '2d103773-50e2-4a37-ac3d-61bc6af8faee',
      url: 'https://www.my-nft-url.com',
      account: '0x10247089e55180c9',
      privateKey: '3881849dd540a0c80383c3727951d35e3e9e8c238ec82a581726c3fc2ca17bc4',
    }
    return await txService.sendNftMintToken(true, body)
  }
})
