/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Error403BscTxSign = {
    /**
     * bsc.transaction.sign
     */
    errorCode: string;
    /**
     * Unable to sign transaction. ${error}
     */
    message: string;
    /**
     * 403
     */
    statusCode: number;
}