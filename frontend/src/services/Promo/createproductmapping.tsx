import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import authHeader from "@services/authHeader"
import { promoproductmapping } from "@models/promoproductmapping"

export interface CreatePromoProductMappingRequest {
    product_id : string
    promo_id : string
}

export const CreatePromoProductMappingService = createAsyncThunk(
    adminEndpoints.CREATEPROMOPRODUCTMAPPING,
    async (request: CreatePromoProductMappingRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                adminEndpoints.CREATEPROMOPRODUCTMAPPING,
                request,
                authHeader('application/json')
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as promoproductmapping)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)