export interface IMarketEvent {
    id: number
    userId: number
    userPubKey: string
    eventType: number
    eventSubType: string
    orderId: number
    eventId: string
    assetId: string
    assetSymbol: string
    raw: string
    RawContent: string
    status: number
    createTime: string
    updateTime: string
}

export interface IMarkEventReponse {
    total: number
    page: number
    size: number
    dataList: IMarketEvent[]
}

export interface IExploreState {
    marketEvents: IMarkEventReponse
    loading: boolean
}