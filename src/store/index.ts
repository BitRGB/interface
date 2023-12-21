import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ApplicationReducer } from './application'
import { AssestReducer } from './assets'
import { userReducer } from './user'
import { mintReducer } from './mint'

export const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        assets: AssestReducer,
        user: userReducer,
        mint: mintReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector