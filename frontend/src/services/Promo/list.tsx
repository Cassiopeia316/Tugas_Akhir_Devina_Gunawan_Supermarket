import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { endpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { promo } from "@models/promo"
import UrlUtils from "@utils/urlHelper"

interface Request {
    promo_id: string
}

export type PromoResponse = {
    data: promo[]
}

export const GetPromoListService = createAsyncThunk(
    endpoints.GETPROMOLIST,
    async (request: Request, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                // generatePath(endpoints.GETPRODUCTLIST)
                endpoints.GETPROMOLIST + "?" + UrlUtils.objectToQueryString(request),
                // authHeader('application/json')
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as PromoResponse)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)