export interface IUserAssets {
    id: number
    userId: number
    assetId: string
    balance: string
    lockedBalance: string
    name: string
    symbol: string
    totalSupply: string
    precision: string
    icon: string
    lastPrice: string
    pendingAmount: string
    fee: number
    priceChange: string
}

export interface IUSerAssetsState {
    myAssets: {
        total: number
        page: number
        size: number
        assetList: IUserAssets[]
    }
    loading: boolean,
    invoice: string
    submitLoading: boolean
    invoiceTime: Date
}

export interface IUserBalanceResponse {
    assetList: IUserAssets[]
    total: number
    page: number
    size: number
}
export interface IDepositResponse {
    invoice: string
}