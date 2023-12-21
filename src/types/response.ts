export interface IHTTPResponse<T> {
    eCode: number
    eMsg: string
    data: T
}