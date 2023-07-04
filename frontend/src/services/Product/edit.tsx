import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "@config/config"
import { statusActions } from "@store/status"
import { adminEndpoints } from "@constants/endpoint"
import handleError from "@services/errorHandling"
import { Product } from "@models/product"
import { uuid } from "@models/types"
import authHeader from "@services/authHeader"
import { generatePath } from "react-router-dom"
import { category } from "@models/category"
import { shelf } from "@models/shelf"

export interface Params {
    id: uuid,
    name: string, 
    description : string,
    category_id : uuid, 
    shelf_location_id : uuid,
    price : number,
    stock : number,
    code: string,
    category: category,
    shelf: shelf
}

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
    async (params: Params, { dispatch }) => {
        try {
            dispatch(statusActions.setLoading(true))
            const requestBody: Request = {
                id: params.id,
                name : params.name, 
                description : params.description,
                category_id : params.category_id, 
                shelf_location_id : params.shelf_location_id,
                price : params.price,
                stock : params.stock
            }
            const response = await api.put(
                generatePath(adminEndpoints.EDITPRODUCT, {productId: params.id}),
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