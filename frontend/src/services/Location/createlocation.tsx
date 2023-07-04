import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import authHeader from "@services/authHeader"
import { shelf } from "@models/shelf"

export interface CreateLocationRequest {
    elabel_code: string
}

export const CreateLocationService = createAsyncThunk(
    adminEndpoints.CREATELABELLOCATION,
    async (request: CreateLocationRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                adminEndpoints.CREATELABELLOCATION,
                request,
                authHeader('application/json')
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as shelf)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)