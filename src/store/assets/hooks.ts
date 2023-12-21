import axios from "axios";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { setInvoice, setLoading, setMyAssetsList, setSubmitLoading } from './slice'
import { BACKEND_URL, GET_INVOICE_AMOUNT_URL, GET_MY_ASSETS_URL, POST_DEPOSIT_URL, POST_TRANSFER_ASSETS, POST_WITHDRAW_URL } from "config";
import { IHTTPResponse, IUserBalanceResponse } from "types";
import { Toast } from "components";
import { handleEvent } from "utils";

export const useAssetsState = () => {
    return useAppSelector((state: RootState) => state.assets)
}

export const useGetMyAssets = () => {
    const dispatch = useAppDispatch()
    return async (page: number, size: number, userPubKey?: string) => {
        dispatch(setLoading(true))
        try {
            let url = `${BACKEND_URL}${GET_MY_ASSETS_URL}?&page=${page}&size=${size}`
            if (userPubKey) {
                url += `&userPubKey=${userPubKey}`
            }
            const { data } = await axios.get<IHTTPResponse<IUserBalanceResponse>>(url)
            if (data.eCode == 200) {
                dispatch(setMyAssetsList(data.data))
            }
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        }
    }
}

export const useCreateInvoice = () => {
    const dispatch = useAppDispatch()
    return async (userPubKey: string, amount: string, assetId: string, description = "") => {
        dispatch(setSubmitLoading(true))
        try {
            const url = `${BACKEND_URL}${POST_DEPOSIT_URL}`
            const content = {
                type: "deposit",
                amount,
                assetId
            }
            const event = await handleEvent(JSON.stringify(content))
            const { data } = await axios.post<IHTTPResponse<string>>(url, event)
            if (data.data) {
                dispatch(setInvoice(data.data))
            } else {
                Toast.error(data.eMsg)
            }
            dispatch(setSubmitLoading(false))
        } catch (error) {
            console.log("create invoice error", error)
            dispatch(setSubmitLoading(false))
            Toast.error("create invoice failed")
        }
    }
}

export const useGetInvoiceAmount = () => {
    return async (invoice: string) => {
        try {
            const url = `${BACKEND_URL}${GET_INVOICE_AMOUNT_URL}?invoice=${invoice}`
            const { data } = await axios.get<IHTTPResponse<string>>(url)
            return { amount: data.data, msg: "" }
        } catch (error) {
            return { amount: "0", msg: "invoice Incorrect" }
        }
    }
}

export const useWithdraw = () => {
    const dispatch = useAppDispatch()
    return async (amount: string, invoice: string, assetId: string) => {
        dispatch(setSubmitLoading(true))
        try {
            const url = `${BACKEND_URL}${POST_WITHDRAW_URL}`
            const content = {
                amount,
                invoice,
                assetId,
                type: "withdraw"
            }
            const envent = await handleEvent(JSON.stringify(content))
            const { data } = await axios.post<IHTTPResponse<any>>(url, envent)
            if (data.eCode == 200) {
                Toast.success("Send Successful")
            } else {
                Toast.error(data.eMsg)
            }
            dispatch(setSubmitLoading(false))
        } catch (error) {
            console.log("withdraw error", error)
            dispatch(setSubmitLoading(false))
            Toast.error("Send failed")
        }
    }
}

export const useTransferAssets = () => {
    const dispatch = useAppDispatch()
    return async (amount: string, receiveAddress: string, assetId: string) => {
        dispatch(setSubmitLoading(true))
        try {
            const url = `${BACKEND_URL}${POST_TRANSFER_ASSETS}`
            const content = { type: "transfer", amount, toAddress: receiveAddress, assetId }
            const event = await handleEvent(JSON.stringify(content))
            const { data } = await axios.post<IHTTPResponse<any>>(url, event)
            if (data.eCode == 200) {
                Toast.success("transfer successful")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                Toast.error(data.eMsg)
            }
            dispatch(setSubmitLoading(false))
        } catch (error) {
            dispatch(setSubmitLoading(false))
        }
    }
}

export const useClearInvoice = () => {
    const dispatch = useAppDispatch()
    return () => {
        dispatch(setInvoice(""))
    }
}