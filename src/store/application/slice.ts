import { createSlice } from '@reduxjs/toolkit'
import { IApplicationState } from 'types'
import { nip19 } from 'nostr-tools'

const pubkey_key = "pubkey"
const address_key = "address"
const language_key = "language"
const walletName_key = "wallet_name"
const language = window.localStorage.getItem(language_key) || "english"
const pubkey = window.localStorage.getItem(pubkey_key) || ""
const address = window.localStorage.getItem(address_key) || ""
const walletName = window.localStorage.getItem(walletName_key) || ""
const initalState: IApplicationState = {
    language,
    pubkey,
    address,
    btcPrice: "0",
    showWalletModal: false,
    walletName: walletName,
    installWallet: {
        name: "",
        isInstall: false
    }
}


const slice = createSlice({
    name: "bitrgb-frontend/application",
    initialState: initalState,
    reducers: {
        setLanguage(state, { payload }) {
            state.language = payload
            window.localStorage.setItem(language_key, payload)
        },
        setAddress(state, { payload }) {
            state.pubkey = payload
            state.address = nip19.npubEncode(payload)
            window.localStorage.setItem(pubkey_key, payload)
            window.localStorage.setItem(address_key, state.address)
        },
        setDisconnect(state, { payload }) {
            state.pubkey = ""
            state.address = ""
        },
        setBTCPrice(state, { payload }) {
            state.btcPrice = payload
        },
        setShowWalletModal(state, { payload }) {
            state.showWalletModal = payload
        },
        setWalletName(state, { payload }) {
            state.walletName = payload
            window.localStorage.setItem(walletName_key, payload)
        },
        setInstallWallet(state, { payload }) {
            state.installWallet = payload
        }
    }
})


export const ApplicationReducer = slice.reducer

export const { setInstallWallet, setLanguage, setAddress, setBTCPrice, setDisconnect, setShowWalletModal, setWalletName } = slice.actions