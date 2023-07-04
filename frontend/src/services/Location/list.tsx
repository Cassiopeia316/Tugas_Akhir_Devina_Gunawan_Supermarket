import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { generatePath } from "react-router-dom"
import { shelf } from "@models/shelf"

export type ShelfResponse = {
    data: shelf[]
}

export const GetShelfListService = createAsyncThunk(
    adminEndpoints.ELABELDROPDOWN,
    async (_, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))

            const response = await api.get(
                generatePath(adminEndpoints.ELABELDROPDOWN)
            )
            // dispatch(statusActions.setLoading(false))
            const data = (response.data as ShelfResponse)
            return data
        } catch (err) {
            handleError(err, dispatch)
        }
    }
)