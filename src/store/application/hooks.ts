import axios from 'axios'
import { BACKEND_URL, GET_BTC_PRICE } from 'config'
import { useDispatch } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from 'store'
import { useLogin } from 'store/user'
import { IHTTPResponse } from 'types'
import { getNostrPubkey } from 'utils'
import { setAddress, setBTCPrice, setDisconnect, setInstallWallet, setLanguage, setShowWalletModal, setWalletName } from './slice'


export const useApplicationState = () => useAppSelector((state: RootState) => state.application)

export const useConnectWallet = () => {
    const dispatch = useDispatch()
    const onLogin = useLogin()
    return async (name: string) => {
        try {
            const res = await getNostrPubkey(name)
            dispatch(setWalletName(name))
            await onLogin()
            dispatch(setAddress(res))
            dispatch(setShowWalletModal(false))
        } catch (error) {
            console.log("connect wallet error:", error)
        }
    }
}

export const useDisconnected = () => {
    const dispatch = useDispatch()
    return () => {
        dispatch(setDisconnect(undefined))
    }
}

export const useBtcPrice = () => {
    const dispatch = useDispatch()
    return async () => {
        const url = `${BACKEND_URL}${GET_BTC_PRICE}`
        try {
            const { data } = await axios.get<IHTTPResponse<{ last_price: string }>>(url)
            if (data.eCode == 200) {
                dispatch(setBTCPrice(data.data.last_price))
            }
        } catch (error) {
            console.log("get btc price error:", error)
        }
    }
}

export const useToggleWalletModal = () => {
    const dispatch = useAppDispatch()
    return (flag: boolean) => {
        dispatch(setShowWalletModal(flag))
    }
}

export const useToggleInstallWalletModal = () => {
    const dispatch = useAppDispatch()
    return (flag: boolean, name?: string) => {
        dispatch(setInstallWallet({ name, isInstall: flag }))
    }
}
