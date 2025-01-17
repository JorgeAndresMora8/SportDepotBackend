import { Schema, model, Document } from 'mongoose'


export interface Payment extends Document { 
    id: string;
    userId: string;
    date: string;
    products: any[];
    total: number;
    paymentMethod: object;
}

const PaymentSchema = new Schema<Payment>({ 
    id: { type: String, required: true },
    userId: { type: String, required: true },
    date: { type: String, required: true },
    products: { type: [], required: true },
    total: { type: Number, required: true },
    paymentMethod: { type: {}, required: true }
})

export const Payment = model<Payment>('payment', PaymentSchema)

// Review Schema
export interface Review extends Document { 
    id: string; 
    productId:string; 
    userId:string; 
    text:string; 
    rating: number;
    date: string; 
    title: string
}

const ReviewSchema = new Schema<Review>({ 
    id: {type:String, required: true}, 
    productId: { type:String, required:true }, 
    userId: { type:String, required:true }, 
    text: { type:String, required:true }, 
    rating: { type:Number, required:true },
    date: { type:String, required: true }, 
    title: { type: String, required: true }
})

export const Review = model<Review>('review', ReviewSchema)

//User Schema
export interface User extends Document { 
    id: string; 
    name: string; 
    lastname: string; 
    dni: string; 
    password:string
    phone: string; 
    email: string; 
    orders: Array<any>
}


const UserSchema =new Schema<User>({ 
    id: { type:String, required:true },
    name: { type:String, required:true },
    password: { type:String, required: true },
    lastname: { type:String, required:true },
    dni: { type:String, required:true },
    phone: { type:String, required:true },
    email: { type:String, required:true },
    orders: { type:[], required:true },
})


export const User = model<User>("user", UserSchema)





//Shoes Schema
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

export const Shoes = model<ISchema>("shoes", ProductSchema)





