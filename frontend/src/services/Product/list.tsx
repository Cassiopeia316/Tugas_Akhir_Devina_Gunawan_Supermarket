import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { endpoints } from "@constants/endpoint"
import UrlUtils from "@utils/urlHelper"
// import authHeader from "@services/authHeader"
import handleError from "@services/errorHandling"
// import { generatePath } from "react-router-dom"
import { Product } from "@models/product"
import { Pagination } from "@models/pagination"

interface Request {
    offset: number
    limit: number
    search: string
}

export type Response = {
    data: Product[]
// }
} & Pagination

export const GetProductListService = createAsyncThunk(
    endpoints.GETPRODUCTLIST,
    async (request: Request, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                // generatePath(endpoints.GETPRODUCTLIST)
                endpoints.GETPRODUCTLIST + "?" + UrlUtils.objectToQueryString(request),
                // authHeader('application/json')
            )

            // dispatch(statusActions.setLoading(false))

            const data = (response.data as Response)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)