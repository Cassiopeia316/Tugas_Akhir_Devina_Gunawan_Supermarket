import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { endpoints } from "@constants/endpoint"
import { statusActions } from "@store/status"
import handleError from "./errorHandling"

export interface SignInRequest {
    email: string
    password: string
}

export interface SignInResponse {
    token: string
    name: string
    // id: string
    // email: string
    // isAdmin: boolean
}

export const signInService = createAsyncThunk(
    'signin',
    async (req: SignInRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                endpoints.SIGNIN,
                req,
            )

            dispatch(statusActions.setLoading(false))
            const data = (response.data as SignInResponse)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)