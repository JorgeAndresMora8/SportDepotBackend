import { Schema, model, Document } from 'mongoose'

export interface ISchema extends Document { 
    id: string; 
    name: string; 
    price: number; 
    image: string[];
    category: string; 
    description: string; 
    stock: number; 
    size: number[];
    brand: string; 
    features: string[]
}

//Create the mongoose schema
const ProductSchema = new Schema<ISchema>({ 
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: [String], required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    size: { type: [Number], required: true}, 
    brand: { type: String, required: true}, 
    features: { type: [String], required: true  }
})

const Shoes = model<ISchema>("shoes", ProductSchema)



export default Shoes;

