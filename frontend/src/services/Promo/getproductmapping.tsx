import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { endpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import UrlUtils from "@utils/urlHelper"
import { promoproductmapping } from "@models/promoproductmapping"

interface Request {
    promo_id : string
}
export type PromoProductMappingResponse = {
    data: promoproductmapping[]
}

export const GetPromoProductMappingService = createAsyncThunk(
    endpoints.GETPROMOPRODUCTMAPPING,
    async (request: Request, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                // generatePath(endpoints.GETPROMOPRODUCTMAPPING)
                endpoints.GETPROMOPRODUCTMAPPING + "?" + UrlUtils.objectToQueryString(request),
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as PromoProductMappingResponse)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)