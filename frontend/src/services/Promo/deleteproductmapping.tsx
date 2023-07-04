import { generatePath } from "react-router-dom"
import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import authHeader from "@services/authHeader"
import { promoproductmapping } from "@models/promoproductmapping"
import { uuid } from "@models/types"

export const DeletePromoProductMappingService = createAsyncThunk(
    adminEndpoints.DELETEPROMOPRODUCTMAPPING,
    async (promoproductmappingId: uuid, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.delete(
                generatePath(adminEndpoints.DELETEPROMOPRODUCTMAPPING, {promoproductmappingId: promoproductmappingId}),
                authHeader('application/json')
            )
            const data = (response.data as promoproductmapping)
            dispatch(statusActions.setLoading(false))
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)