/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LtcTx = {
    /**
     * Transaction hash.
     */
    hash?: string;
    /**
     * Witness hash in case of a SegWit transaction.
     */
    witnessHash?: string;
    /**
     * Fee paid for this transaction, in LTC.
     */
    fee?: string;
    rate?: string;
    ps?: number;
    /**
     * Height of the block this transaction belongs to.
     */
    height?: number;
    /**
     * Hash of the block this transaction belongs to.
     */
    block?: string;
    /**
     * Time of the transaction.
     */
    ts?: number;
    /**
     * Index of the transaction in the block.
     */
    index?: number;
    /**
     * Index of the transaction.
     */
    version?: number;
    flag?: number;
    /**
     * List of transactions, from which assets are being sent.
     */
    inputs?: Array<{
        prevout?: {
            /**
             * Transaction hash of the input.
             */
            hash?: string;
            /**
             * Transaction index of the input.
             */
            index?: number;
        };
        /**
         * Data generated by a spender which is almost always used as variables to satisfy a pubkey script.
         */
        script?: string;
        /**
         * Transaction witness.
         */
        witness?: string;
        sequence?: number;
        coin?: {
            version?: number;
            height?: number;
            /**
             * Value of the transaction, in LTC.
             */
            value?: string;
            script?: string;
            /**
             * Sender address.
             */
            address?: string;
            /**
             * Coinbase transaction - miner fee.
             */
            coinbase?: boolean;
        };
    }>;
    /**
     * List of recipient addresses and amounts to send to each of them.
     */
    outputs?: Array<{
        /**
         * Sent amount in LTC.
         */
        value?: string;
        /**
         * Transaction script.
         */
        script?: string;
        /**
         * Recipient address.
         */
        address?: string;
    }>;
    /**
     * Block this transaction was included in.
     */
    locktime?: number;
}
