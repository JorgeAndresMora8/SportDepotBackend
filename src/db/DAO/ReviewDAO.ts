import { text } from 'stream/consumers';
import { connectDB } from '../Db'
import {Shoes} from '../models/models'
import Review from '../../types/Review.types';


connectDB()



class ReviewDAO { 

    schema: any

    constructor(schema:any){ 
        this.schema = schema
    }

    async findAll(){ 
        const resp = await this.schema.find({})
        return resp
    }

    async findById(id: string){ 
        const resp = await this.schema.findOne({id: id})
        return resp
    }

    async findByProductId(productId: string){ 
        const resp = await this.schema.find({productId: productId})
        return resp
    }

    async create(data: Review){ 
       return await this.schema.create({ 
        id: data.id, 
        productId: data.productId, 
        userId: data.userId, 
        text: data.text, 
        rating: data.rating,
        date: data.date, 
        title: data.title
    }) 
    }

    async update(id: string, data: Review){ 
        return await this.schema.findOneAndUpdate(
            { id: id }, 
            { $set: { rating: data.rating, text: data.text } }, 
            { returnNewDocument: true }      
        )

    }

    async delete(id: string){ 
        return await this.schema.deleteOne({ id: id })
    }

}

export default ReviewDAO