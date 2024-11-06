import createId from "./createId"
import {Shoe} from '../types/Shoe.types'

export const validateShoe = (data: any): Shoe | void => { 
    if(!data.name || !data.price || data.price <= 0){ 
        throw new Error('Fields missings')
    }

    const obj: Shoe = { 
        id: createId(), 
        name: data.name,
        price: data.price,
        image: data.image,
        description: data.description, 
        stock: data.stock, 
        category: data.category,
        brand: data.brand,
        size: [],
        features: data.features || []
    }

    return obj
}