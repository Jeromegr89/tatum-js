/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlgoBlock } from '../models/AlgoBlock';
import type { AlgoTx } from '../models/AlgoTx';
import type { AlgoTxsWithPagination } from '../models/AlgoTxsWithPagination';
import type { AlgoWallet } from '../models/AlgoWallet';
import type { BroadcastKMS } from '../models/BroadcastKMS';
import type { SignatureId } from '../models/SignatureId';
import type { TransactionHashKMS } from '../models/TransactionHashKMS';
import type { TransferAlgorandBlockchain } from '../models/TransferAlgorandBlockchain';
import type { TransferAlgorandBlockchainKMS } from '../models/TransferAlgorandBlockchainKMS';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BlockchainAlgorandAlgoService {

    /**
     * Generate Algorand wallet
     * <h4>1 credit per API call.</h4><br/><p>Tatum supports Algorand wallets.</p>
     *
     * @param mnemonic Mnemonic to use for generation of extended public and private keys.
     * @returns AlgoWallet OK
     * @throws ApiError
     */
    public static algorandGenerateWallet(
        mnemonic?: string,
    ): CancelablePromise<AlgoWallet> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/wallet`,
            query: {
                'mnemonic': mnemonic,
            },
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Generate Algorand account address from private key
     * <h4>1 credit per API call.</h4><br/>
     * <p>Generate Algorand account deposit address from private key.</p>
     *
     * @param priv private key of wallet.
     * @returns any OK
     * @throws ApiError
     */
    public static algorandGenerateAddress(
        priv: string,
    ): CancelablePromise<{
        /**
         * Algorand address
         */
        address?: string;
    }> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/address/${priv}`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Access Algorand Indexer GET node endpoints
     * <h4>1 credit per API call.</h4><br/>
     * <p>Use this endpoint URL as a http-based url to connect directly to the Algorand node provided by Tatum.
     * You can check al available APIs here - <a href="https://developer.algorand.org/docs/rest-apis/indexer/" target="_blank">https://developer.algorand.org/docs/rest-apis/indexer/</a>.
     * <br/>
     * Example call for Get Tx By ID is described in the response. <a href="https://developer.algorand.org/docs/rest-apis/indexer/#get-v2transactionstxid" target="_blank">https://developer.algorand.org/docs/rest-apis/indexer/#get-v2transactionstxid</a>.
     * <br/>
     * URL used for this call would be <pre>https://api-eu1.tatum.io/v3/algorand/node/indexer/YOUR_API_KEY/v2/transactions/HNIQ76UTJYPOLZP5FWODYABBJPYPGJNEM2QEJSMDMQRWEKHEYJHQ</pre>
     * </p>
     *
     * @param xApiKey Tatum X-API-Key used for authorization.
     * @returns AlgoTx OK
     * @throws ApiError
     */
    public static algoNodeIndexerGetDriver(
        xApiKey: string,
    ): CancelablePromise<AlgoTx> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/node/indexer/${xApiKey}/**`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Access Algorand Algod GET node endpoints
     * <h4>1 credit per API call.</h4><br/>
     * <p>Use this endpoint URL as a http-based url to connect directly to the Algorand node provided by Tatum.
     * You can check al available APIs here - <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/</a>.
     * <br/>
     * Example call for Get Block is described in the response. <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/#get-v2blocksround" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/#get-v2blocksround</a>.
     * <br/>
     * URL used for this call would be <pre>https://api-eu1.tatum.io/v3/algorand/node/algod/YOUR_API_KEY/v2/blocks/16775567</pre>
     * </p>
     *
     * @param xApiKey Tatum X-API-Key used for authorization.
     * @returns AlgoBlock OK
     * @throws ApiError
     */
    public static algoNodeGetDriver(
        xApiKey: string,
    ): CancelablePromise<AlgoBlock> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/node/algod/${xApiKey}/**`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Access Algorand Algod POST node endpoints
     * <h4>2 credits per API call.</h4><br/>
     * <p>Use this endpoint URL as a http-based url to connect directly to the Algorand node provided by Tatum.
     * You can check al available APIs here - <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/</a>.
     * <br/>
     * Example call for Broadcast a raw transaction is described in the response. <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2transactions" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2transactions</a>.
     * <br/>
     * URL used for this call would be <pre>https://api-eu1.tatum.io/v3/algorand/node/algod/YOUR_API_KEY/v2/transactions</pre>
     * </p>
     *
     * @param xApiKey Tatum X-API-Key used for authorization.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static algoNodePostDriver(
        xApiKey: string,
        requestBody: {
            /**
             * Check here - <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2transactions" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2transactions</a>
             */
            rawtxn?: string;
        },
    ): CancelablePromise<{
        /**
         * Check here - <a href="https://developer.algorand.org/docs/rest-apis/algod/v2/#rawtransaction-response-200" target="_blank">https://developer.algorand.org/docs/rest-apis/algod/v2/#rawtransaction-response-200</a>
         */
        txId?: string;
    }> {
        return __request({
            method: 'POST',
            path: `/v3/algorand/node/algod/${xApiKey}/**`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Get Algorand Account balance
     * <h4>1 credit per API call.</h4><br/>
     * <p>Get Algorand account balance in ALGO.</p>
     *
     * @param address Account address
     * @returns any OK
     * @throws ApiError
     */
    public static algorandGetBalance(
        address: string,
    ): CancelablePromise<{
        /**
         * Balance in ALGO
         */
        balance?: number;
    }> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/account/balance/${address}`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Get current block number
     * <h4>1 credit per API call.</h4><br/><p>Get Algorand current block number. This is the number of the latest block in the blockchain.</p>
     * @returns number OK
     * @throws ApiError
     */
    public static algorandGetCurrentBlock(): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/block/current`,
            errors: {
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Get Algorand block by block round number
     * <h4>1 credit per API call.</h4><br/><p>Get Algorand block by block round number.</p>
     * @param roundNumber Block round number
     * @returns AlgoBlock OK
     * @throws ApiError
     */
    public static algorandGetBlock(
        roundNumber: number,
    ): CancelablePromise<AlgoBlock> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/block/${roundNumber}`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Send ALGO from account to account
     * <h4>2 credits per API call.</h4><br/>
     * <p>Send ALGO from account to account.<br/><br/>
     * This operation needs the private key of the blockchain address.
     * No one should ever send it's own private keys to the internet because there is a strong possibility of stealing keys and loss of funds. In this method, it is possible to enter privateKey
     * or signatureId. PrivateKey should be used only for quick development on testnet versions of blockchain when there is no risk of losing funds. In production,
     * <a href="https://github.com/tatumio/tatum-kms" target="_blank">Tatum KMS</a> should be used for the highest security standards, and signatureId should be present in the request.
     * Alternatively, using the Tatum client library for supported languages.
     * </p>
     *
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static algorandBlockchainTransfer(
        requestBody: (TransferAlgorandBlockchain | TransferAlgorandBlockchainKMS),
    ): CancelablePromise<(TransactionHashKMS | SignatureId)> {
        return __request({
            method: 'POST',
            path: `/v3/algorand/transaction`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Get Algorand Transaction
     * <h4>1 credit per API call.</h4><br/><p>Get Algorand transaction by transaction id.</p>
     * @param txid Transaction id
     * @returns AlgoTx OK
     * @throws ApiError
     */
    public static algorandGetTransaction(
        txid: string,
    ): CancelablePromise<AlgoTx> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/transaction/${txid}`,
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Get Algorand Transactions between from and to
     * <h4>1 credit per API call.</h4><br/><p>Get Algorand transaction by specified period of time.</p>
     * @param from Start timestamp in specified period of time
     * @param to End timestamp in specified period of time
     * @param limit page size for pagination
     * @param next Algorand Next Token for getting the next page results
     * @returns AlgoTxsWithPagination OK
     * @throws ApiError
     */
    public static algorandGetPayTransactionsByFromTo(
        from: string,
        to: string,
        limit?: string,
        next?: string,
    ): CancelablePromise<AlgoTxsWithPagination> {
        return __request({
            method: 'GET',
            path: `/v3/algorand/transactions/${from}/${to}`,
            query: {
                'limit': limit,
                'next': next,
            },
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

    /**
     * Broadcast signed Algorand transaction
     * <h4>2 credits per API call.</h4><br/>
     * <p>Broadcast signed transaction to Algorand blockchain. This method is used internally from Tatum KMS or Tatum client libraries.
     * It is possible to create custom signing mechanism and use this method only for broadcasting data to the blockchian.</p>
     *
     * @param requestBody
     * @returns TransactionHashKMS OK
     * @throws ApiError
     */
    public static algoandBroadcast(
        requestBody: BroadcastKMS,
    ): CancelablePromise<TransactionHashKMS> {
        return __request({
            method: 'POST',
            path: `/v3/algorand/broadcast`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. Validation failed for the given object in the HTTP Body or Request parameters.`,
                401: `Unauthorized. Not valid or inactive subscription key present in the HTTP Header.`,
                500: `Internal server error. There was an error on the server during the processing of the request.`,
            },
        });
    }

}