import { category } from "./category"
import { shelf } from "./shelf"
import { uuid } from "./types"

export type Product = {
    id: uuid
    category_id: uuid
    code : string
    description : string
    name : string
    price : number
    shelf_location_id : uuid
    stock: number
    category: category
    shelf : shelf
    description_promo : string
    price_after_promo : number
    promo_price: number
}