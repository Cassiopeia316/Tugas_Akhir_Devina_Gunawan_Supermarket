import { uuid } from "./types"

export type promo = {
    id: uuid
    code: string
    description: string
    value: number
    start_date: Date
    end_date: Date
    isExpired: boolean
    isActive: boolean
}