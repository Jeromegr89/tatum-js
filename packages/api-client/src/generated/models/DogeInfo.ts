/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DogeInfo = {
    /**
     * Chain of the blockchain, main or test.
     */
    chain?: string;
    /**
     * Last block.
     */
    blocks?: number;
    /**
     * Last headers.
     */
    headers?: number;
    /**
     * Hash of the last block.
     */
    bestblockhash?: string;
    /**
     * Difficulty of the PoW algorithm.
     */
    difficulty?: number;
}