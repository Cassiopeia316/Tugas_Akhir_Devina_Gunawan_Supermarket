import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import authHeader from "@services/authHeader"
import { promo } from "@models/promo"

export interface CreatePromoRequest {
    description: string
    value: number
    start_date: string
    end_date: string
}

export const CreatePromoService = createAsyncThunk(
    adminEndpoints.CREATEPROMO,
    async (request: CreatePromoRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                adminEndpoints.CREATEPROMO,
                request,
                authHeader('application/json')
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as promo)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)