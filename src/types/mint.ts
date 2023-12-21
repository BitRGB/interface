import { IMarkEventReponse } from "./event"

export interface IRoundInfoResponse {
    id: number
    mintAmount: string
    totalAmount: string
    minAmount: string
    maxAmount: string
    priceSats: string
    state: number
    start: number
    end: number
}

export interface IRoundWhiteReponse {
    publicKey: string
    minAmount: string
    maxAmount: string
    boughtAmount: string
    priceSats: string
}

export interface IMintState {
    whiteList?: IRoundWhiteReponse
    round1?: IRoundInfoResponse
    round2?: IRoundInfoResponse
    submitLoading: boolean
    loading: boolean
    whiteLoading: boolean
    recordList: IMarkEventReponse
    recordLoading: boolean
    round2MintInfo?: IIsMintRound2Response | null
    newUserMintInfo?: IUserMintInfoReponse | null
}

export interface IIsMintRound2Response {
    type: string
    assetId: string
    price: string
    amount: string
    round: string
}

export interface IUserMintInfoReponse {
    id: number
    publicKey: string
    minAmount: string
    maxAmount: string
    boughtAmount: string
    priceSats: string
}