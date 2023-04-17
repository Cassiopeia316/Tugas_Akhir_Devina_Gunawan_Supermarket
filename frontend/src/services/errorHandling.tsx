import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { AxiosError, AxiosResponse } from "axios"
import { ErrorResponse } from "@models/error"
import { statusActions } from "@store/status"

const handleError = (e: unknown, dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    const error = e as AxiosError
    const response = (error.response as AxiosResponse)
    const errorResponse = (response.data as ErrorResponse)
    dispatch(statusActions.setError(errorResponse.message))
}

export default handleError