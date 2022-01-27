import { SdkWithErc20Functions } from '@tatumio/shared-blockchain-abstract'
import { BlockchainTestData, expectHexString } from '../shared-testing'

export const erc20TestFactory = {
  decimals: (sdk: SdkWithErc20Functions, testData: BlockchainTestData) => {
    xdescribe('mainnet', () => {
      it('valid', async () => {
        // Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.
        const result = await sdk.decimals(testData.MAINNET.CONTRACT_ADDRESS)

        expect(result).toBeDefined()
      })
    })
  },
  prepare: {
    deploySignedTransaction: (sdk: SdkWithErc20Functions, testData: BlockchainTestData) => {
      describe('mainnet', () => {
        it('valid', async () => {
          const nonce = 3252345722143

          const result = await sdk.prepare.deploySignedTransaction({
            symbol: 'ERC_SYMBOL',
            name: 'bO6AN',
            address: testData.MAINNET.ERC_20.ADDRESS,
            supply: '10000000',
            fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
            signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
            digits: 18,
            totalCap: '10000000',
            nonce,
            fee: {
              gasLimit: '40000',
              gasPrice: '20',
            },
          })

          const json = JSON.parse(result)

          expect(json.nonce).toBe(nonce)
          expect(json.gasPrice).toBe('20000000000')
          expect(json.from).toBe(0)
          expectHexString(json.data)
        })

        it('invalid address', async () => {
          try {
            await sdk.prepare.deploySignedTransaction({
              symbol: 'ERC_SYMBOL',
              name: 'bO6AN',
              address: 'someinvalidaddress',
              supply: '10000000',
              fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
              signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
              digits: 18,
              totalCap: '10000000',
              nonce: 3252345722143,
              fee: {
                gasLimit: '40000',
                gasPrice: '20',
              },
            })
            fail()
          } catch (e) {
            expect(e.reason).toMatch('invalid address')
          }
        })
      })
    },
    transferSignedTransaction: (sdk: SdkWithErc20Functions, testData: BlockchainTestData) => {
      it('valid', async () => {
        const nonce = 3252345722143

        const result = await sdk.prepare.transferSignedTransaction({
          to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
          amount: '10',
          contractAddress: testData.MAINNET.ERC_20.ADDRESS,
          fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
          signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
          digits: 18,
          nonce,
          fee: {
            gasLimit: '40000',
            gasPrice: '20',
          },
        })

        const json = JSON.parse(result)

        expect(json.nonce).toBe(nonce)
        expect(json.gasPrice).toBe('20000000000')
        expect(json.from).toBe(0)
        expectHexString(json.data)
      })

      it('invalid address', async () => {
        try {
          await sdk.prepare.transferSignedTransaction({
            to: 'someinvalidaddress',
            contractAddress: testData.MAINNET.ERC_20.ADDRESS,
            amount: '10',
            fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
            signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
            digits: 18,
            nonce: 3252345722143,
            fee: {
              gasLimit: '40000',
              gasPrice: '20',
            },
          })
          fail()
        } catch (e) {
          expect(e.reason).toMatch('invalid address')
        }
      })
    },
    mintSignedTransaction: (sdk: SdkWithErc20Functions, testData: BlockchainTestData) => {
      it('valid', async () => {
        const nonce = 3252345722143

        const result = await sdk.prepare.mintSignedTransaction({
          to: '0x811DfbFF13ADFBC3Cf653dCc373C03616D3471c9',
          amount: '10',
          contractAddress: testData.MAINNET.ERC_20.ADDRESS,
          fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
          signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
          nonce,
        })

        const json = JSON.parse(result)

        expect(json.nonce).toBe(nonce)
        expect(json.gasPrice).toBe('20000000000')
        expect(json.from).toBe(0)
        expectHexString(json.data)
      })

      it('invalid address', async () => {
        try {
          await sdk.prepare.mintSignedTransaction({
            to: 'someinvalidaddress',
            amount: '10',
            contractAddress: testData.MAINNET.ERC_20.ADDRESS,
            fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
            signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
            nonce: 3252345722143,
          })
          fail()
        } catch (e) {
          console.log(e)
          expect(e.reason).toMatch('invalid address')
        }
      })
    },
    burnSignedTransaction: (sdk: SdkWithErc20Functions, testData: BlockchainTestData) => {
      it('valid', async () => {
        const nonce = 3252345722143

        const result = await sdk.prepare.burnSignedTransaction({
          amount: '10',
          contractAddress: testData.MAINNET.ERC_20.ADDRESS,
          fromPrivateKey: testData.MAINNET.PRIVATE_KEY_0, // todo this or signatureID
          signatureId: '1f7f7c0c-3906-4aa1-9dfe-4b67c43918f6',
          nonce,
        })

        const json = JSON.parse(result)

        expect(json.nonce).toBe(nonce)
        expect(json.gasPrice).toBe('20000000000')
        expect(json.from).toBe(0)
        expectHexString(json.data)
      })
    },
  },
}
