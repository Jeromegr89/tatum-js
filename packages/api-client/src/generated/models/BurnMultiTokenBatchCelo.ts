/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BurnMultiTokenBatchCelo = {
    /**
     * Chain to work with.
     */
    chain: 'CELO';
    /**
     * Address of holder
     */
    account: string;
    /**
     * ID of token to be destroyed.
     */
    tokenId: Array<string>;
    /**
     * amounts of token to be destroyed.
     */
    amounts: Array<string>;
    /**
     * Address of Multi Token token
     */
    contractAddress: string;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Nonce to be set to Celo transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: 'CELO' | 'CUSD' | 'CEUR';
}
