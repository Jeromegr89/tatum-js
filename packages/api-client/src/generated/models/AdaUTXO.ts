/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdaUTXO = {
    /**
     * Sent amount in Lovelace - 1/1000000 of ADA.
     */
    value?: string;
    /**
     * Index of the output in the transaction.
     */
    index?: number;
    /**
     * Transaction hash.
     */
    txHash?: string;
    /**
     * Recipient address.
     */
    address?: string;
}
