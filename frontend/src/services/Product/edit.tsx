import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { Product } from "@models/product"
import { uuid } from "@models/types"
import authHeader from "@services/authHeader"
import { generatePath } from "react-router-dom"

export interface Request {
    id: uuid,
    name : string, 
    description : string,
    category_id : uuid, 
    shelf_location_id : uuid,
    price : number,
    stock : number
}

export const EditProductService = createAsyncThunk(
    adminEndpoints.EDITPRODUCT,
    async (request: Product, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))
            const requestBody: Request = {
                id: request.id,
                name : request.name, 
                description : request.description,
                category_id : request.category_id, 
                shelf_location_id : request.shelf_location_id,
                price : request.price,
                stock : request.stock
            }
            const response = await api.put(
                generatePath(adminEndpoints.EDITPRODUCT, {productId: request.id}),
                requestBody,
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