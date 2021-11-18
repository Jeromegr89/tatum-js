import {Currency, SolanaNftMetadata} from '../model';
import {mintSolanaNft, sendSolana, transferSolanaNft, transferSolanaSlpToken} from './solana';

jest.setTimeout(99999);

describe('Solana tests', () => {
    it('should send SOL', async () => {
        console.log(await sendSolana(true, {
            from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
            fromPrivateKey: '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
            to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
            amount: '0.001'
        }, 'https://api.testnet.solana.com'));
    });

    it('should send SLP fungible token', async () => {
        console.log(await transferSolanaSlpToken(true, {
            from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
            fromPrivateKey: '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
            to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
            amount: '0.001',
            decimals: 6,
            contractAddress: '',
        }, 'https://api.testnet.solana.com'));
    });

    it('should mint NFT', async () => {
        console.log(await mintSolanaNft(true, {
            from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
            fromPrivateKey: '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
            to: 'FZAS4mtPvswgVxbpc117SqfNgCDLTCtk5CoeAtt58FWU',
            metadata: new SolanaNftMetadata(
                'Tatum',
                'TTM',
                'https://tatum.io/images/logo/logo.svg',
                0,
            ),
            chain: Currency.SOL
        }, 'https://api.testnet.solana.com'));
    });

    it('should transfer NFT', async () => {
        console.log(await transferSolanaNft(true, {
            from: 'FZAS4mtPvswgVxbpc117SqfNgCDLTCtk5CoeAtt58FWU',
            fromPrivateKey: 'cb6ef9dc81967be3f9157a2dedf14d89fcf4b5fbb7cd2a9fcab7a600179d929cd840de2a454960308f688cd3ee308c1fa01ecfa0b03770aaaf3b52d71d46c31d',
            to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
            contractAddress: '3tzudv5KaoqmieWiBUqzWokKEtTvx1wQMapVKeH7CHaq',
            chain: Currency.SOL
        }, 'https://api.testnet.solana.com'));
    });
});