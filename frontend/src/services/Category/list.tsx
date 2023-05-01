import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { endpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { generatePath } from "react-router-dom"
import { category } from "@models/category"

export type CategoryResponse = {
    data: category[]
}

export const GetCategoryListService = createAsyncThunk(
    endpoints.GETCATEGORYLIST,
    async (_, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                generatePath(endpoints.GETCATEGORYLIST)
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as CategoryResponse)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)