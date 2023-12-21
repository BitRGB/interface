import { createSlice } from '@reduxjs/toolkit'
import { IMintState } from 'types'

const initstate: IMintState = {
    loading: false,
    round1: undefined,
    round2: undefined,
    submitLoading: false,
    whiteLoading: false,
    whiteList: undefined,
    recordList: {
        total: 0,
        page: 1,
        size: 10,
        dataList: []
    },
    recordLoading: false,
    round2MintInfo: undefined,
    newUserMintInfo: undefined
}

const slice = createSlice({
    name: "bigrgb-frontend/mint",
    initialState: initstate,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload
        },
        setWhiteLoading(state, { payload }) {
            state.whiteLoading = payload
        },
        setRound(state, { payload }) {
            const { roundId, round } = payload
          /*   if (roundId == 1) {
                state.round1 = round
            } else {
               
            } */
            state.round2 = round
        },
        setWhiteList(state, { payload }) {
            state.whiteList = payload
        },
        setSubmitLoading(state, { payload }) {
            state.submitLoading = payload
        },
        setRecordLoading(state, { payload }) {
            state.recordLoading = payload
        },
        setRecordList(state, { payload }) {
            state.recordList = payload
        },
        setRound2Info(state, { payload }) {
            state.round2MintInfo = payload
        },
        setNewMintInfo(state, { payload }) {
            state.newUserMintInfo = payload
        }
    }
})

export const mintReducer = slice.reducer

export const { setNewMintInfo, setLoading, setWhiteList, setRound, setWhiteLoading, setSubmitLoading, setRecordList, setRecordLoading, setRound2Info } = slice.actions