/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateSubscriptionOffchain = {
    /**
     * Type of the subscription.
     */
    type: 'OFFCHAIN_WITHDRAWAL';
    /**
     * Additional attributes based on the subscription type.
     */
    attr: {
        /**
         * Currency of the accounts, on which outgoing off-chain scanning will be enabled. BTC, LTC, DOGE, BCH, ETH and ERC20 tokens are allowed.
         */
        currency: string;
    };
}
