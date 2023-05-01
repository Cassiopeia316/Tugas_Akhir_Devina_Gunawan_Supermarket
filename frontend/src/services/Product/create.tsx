import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { Product } from "@models/product"
import { uuid } from "@models/types"
import authHeader from "@services/authHeader"

export interface CreateProductRequest {
    name : string, 
    description : string,
    category_id : uuid, 
    shelf_location_id : uuid,
    price : string,
    stock : string
}

export const CreateProductService = createAsyncThunk(
    adminEndpoints.CREATEPRODUCT,
    async (request: CreateProductRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                adminEndpoints.CREATEPRODUCT,
                request,
                authHeader('application/json')
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as Product)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)