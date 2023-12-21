import { createSlice } from '@reduxjs/toolkit'
import { IUSerAssetsState } from 'types'


const initialState: IUSerAssetsState = {
    myAssets: {
        total: 0,
        page: 0,
        size: 0,
        assetList: []
    },
    loading: false,
    invoice: "",
    invoiceTime: new Date(),
    submitLoading: false
}

const slice = createSlice({
    name: "bitrgb-frontend/assets",
    initialState,
    reducers: {
        setMyAssetsList(state, { payload }) {
            state.myAssets = payload
        },
        setLoading(state, { payload }) {
            state.loading = payload
        },
        setInvoice(state, { payload }) {
            state.invoice = payload
            state.invoiceTime = new Date()
        },
        setSubmitLoading(state, { payload }) {
            state.submitLoading = payload
        }
    }
})

export const AssestReducer = slice.reducer

export const { setMyAssetsList, setLoading, setInvoice, setSubmitLoading } = slice.actions