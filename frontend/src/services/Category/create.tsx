import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import authHeader from "@services/authHeader"

export interface CreateCategoryRequest {
    name : string
}

export const CreateCategoryService = createAsyncThunk(
    adminEndpoints.CREATECATEGORY,
    async (request: CreateCategoryRequest, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.post(
                adminEndpoints.CREATECATEGORY,
                request,
                authHeader('application/json')
            )
            const data = (response.data as CreateCategoryRequest)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)