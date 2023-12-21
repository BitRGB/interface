import { createSlice } from '@reduxjs/toolkit'
import { IUserState } from 'types'


const user_id = window.localStorage.getItem("userId") || ""
const initialState: IUserState = {
    user_id
}

const slice = createSlice({
    name: "bitrgb/users",
    initialState,
    reducers: {
        setUserId(state, { payload }) {
            state.user_id = payload
            window.localStorage.setItem("userId", payload)
        }
    }
})

export const userReducer = slice.reducer

export const { setUserId } = slice.actions