import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { endpoints } from "@constants/endpoint"
import UrlUtils from "@utils/urlHelper"
import handleError from "@services/errorHandling"
import { Pagination } from "@models/pagination"
import { shelf } from "@models/shelf"

interface Request {
    offset: number
    limit: number
}

export type Response = {
    data: shelf[]
} & Pagination

export const GetElabelListService = createAsyncThunk(
    endpoints.GETELABELCODELIST,
    async (request: Request, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                endpoints.GETELABELCODELIST + "?" + UrlUtils.objectToQueryString(request),
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as Response)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)