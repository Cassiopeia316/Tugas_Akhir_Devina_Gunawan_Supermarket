import { Product } from "./product"
import { promo } from "./promo"
import { uuid } from "./types"

export type promoproductmapping = {
    id: uuid
    product_id: uuid
    promo_id: uuid
    product: Product
    promo: promo
}