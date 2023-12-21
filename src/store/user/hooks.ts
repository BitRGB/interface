import axios from "axios";
import { useDispatch } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { handleEvent } from "utils";
import { setUserId } from "./slice";
import { BACKEND_URL, POST_USER_REGISTER } from "config";
import { IHTTPResponse, IUSerLoginResponse } from "types";

export const useGetUserState = () => useAppSelector((state: RootState) => state.user)

export const useLogin = () => {
    const dispatch = useDispatch()
    return async () => {
        try {
            const url = `${BACKEND_URL}${POST_USER_REGISTER}`
            const content = { "type": "login bitrgb" }
            const event = await handleEvent(JSON.stringify(content))
            const { data } = await axios.post<IHTTPResponse<IUSerLoginResponse>>(url, event)
            if (data.eCode == 200) {
                dispatch(setUserId(data.data.userId))
            }
        } catch (error) {
            console.log("login error", error)
        }
    }
}

