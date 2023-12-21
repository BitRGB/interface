import axios from "axios";
import { Toast } from "components";
import { BACKEND_URL, GET_EVENT_URL, GET_MINT_INFO_BY_ROUND_URL, GET_MINT_ROUND_INFO, GET_MINT_WHITELIST_URL, GET_ROUND2_MINTED, MINT_ASSETS_ID, POST_MINT_URL } from "config";
import { useDispatch } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { IHTTPResponse, IIsMintRound2Response, IMarkEventReponse, IRoundInfoResponse, IRoundWhiteReponse, IUserMintInfoReponse } from "types";
import { handleEvent } from "utils";
import { setLoading, setRecordLoading, setRound, setWhiteList, setWhiteLoading, setSubmitLoading, setRecordList, setRound2Info, setNewMintInfo } from "./slice";

export const useMintState = () => useAppSelector((state: RootState) => state.mint)

export const useIsInWhiteList = () => {
    const dispatch = useAppDispatch()
    return async (address: string) => {
        dispatch(setWhiteLoading(true))
        try {
            const url = `${BACKEND_URL}${GET_MINT_WHITELIST_URL}?public_key=${address}`
            const { data } = await axios.get<IHTTPResponse<IRoundWhiteReponse>>(url)
            if (data.eCode == 200) {
                dispatch(setWhiteList(data.data))
            }
            dispatch(setWhiteLoading(false))
        } catch (error) {
            dispatch(setWhiteLoading(false))
        }
    }
}

/** 获取轮次信息 */
export const useGetRoundInfo = () => {
    const dispatch = useAppDispatch()
    return async (roundId: string | number) => {
        dispatch(setLoading(true))
        try {
            const url = `${BACKEND_URL}${GET_MINT_INFO_BY_ROUND_URL}?round=${roundId}`
            const { data } = await axios.get<IHTTPResponse<IRoundInfoResponse>>(url)
            console.log("data",data)
            if (data.eCode == 200) {
                dispatch(setRound({ roundId, round: data.data }))
            }
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
}




/** 获取mint 记录 */
export const useGetMintList = () => {
    const dispatch = useAppDispatch()
    return async ({ page, size, userPubKey }: { page: Number, size: number, userPubKey?: string }) => {
        dispatch(setRecordLoading(true))
        try {
            let url = `${BACKEND_URL}${GET_EVENT_URL}?page=${page}&size=${size}&eventType=4`
            if (userPubKey != undefined) {
                url += `&userPubKey=${userPubKey}`
            }
            const { data } = await axios.get<IMarkEventReponse>(url)
            dispatch(setRecordList(data))
            dispatch(setRecordLoading(false))
        } catch (error) {
            dispatch(setRecordLoading(false))
        }
    }
}

export const useMint = () => {
    const dispatch = useAppDispatch()
    return async (price: string, amount: string, roundId: string, repeat: string) => {
        dispatch(setSubmitLoading(true))
        try {
            const url = `${BACKEND_URL}${POST_MINT_URL}`
            const content = { type: "mint", assetId: MINT_ASSETS_ID, price, amount, round: roundId, count: repeat }
            const event = await handleEvent(JSON.stringify(content))
            const { data } = await axios.post<IHTTPResponse<any>>(url, event)
            if (data.eCode != 200) {
                Toast.error(data.eMsg)
            } else {
                Toast.success("mint successful")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
            dispatch(setSubmitLoading(false))
        } catch (error) {
            console.log('mint error', error)
            dispatch(setSubmitLoading(false))
        }
    }
}
export const useIsMintRound2 = () => {
    const dispatch = useAppDispatch()
    return async (address: string) => {
        const url = `${BACKEND_URL}${GET_ROUND2_MINTED}?address=${address}`
        try {
            const { data } = await axios.get<IHTTPResponse<IIsMintRound2Response | null>>(url)
            if (data.data != null) {
                dispatch(setRound2Info(data))
            }
        } catch (ex) {
            console.log("get user round mint info error", ex)
        }
    }
}

export const useNewUserMintInfo = () => {
    const dispatch = useDispatch()
    return async (address: string) => {
        const url = `${BACKEND_URL}${GET_MINT_ROUND_INFO}?address=${address}`
        try {
            const { data } = await axios.get<IHTTPResponse<IUserMintInfoReponse>>(url)
            if (data.eCode == 200) {
                dispatch(setNewMintInfo(data.data))
            }
        } catch (error) {
            console.log("error", error)
        }
    }
}