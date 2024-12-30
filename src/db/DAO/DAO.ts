import { Shoe as shoeType } from '../../types/Shoe.types'
import { connectDB } from '../Db'
import Shoe from '../models/models'

connectDB()

export class Container { 

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

    async search(params: any){ 
        
        // const resp = await this.schema.find({ $text: { $search: params.category } })
        // return resp

        let mongoDbParams = []

        if(params.name !== "" && params.name !== null && params.name !== undefined ) mongoDbParams.push( { $text: { $search: params.name } })
        if(params.category !== "") mongoDbParams.push({ category: params.category })
        
        console.log(mongoDbParams)

        if(mongoDbParams.length >= 1){
        const response = await this.schema.find({$and: mongoDbParams})
        
        return response
        }else { 
            const response = await this.schema.find({}, {_id: 0, __v: 0}).lean();
            return response
        }
    }

    async create(data: shoeType){ 
       return await this.schema.create({ 
        id: data.id, 
        name: data.name, 
        image: data.image, 
        price: data.price, 
        description: data.description,
        stock: data.stock,
        size: [], 
        category: data.category,
        brand: data.brand,
        features: data.features
    }) 
    }

    async update(id: string, data: any){ 
        return await this.schema.findOneAndUpdate(
            { id: id }, 
            { $set: { brand: data.brand, name: data.name, price: data.price, image: data.image, description: data.description, stock: data.stock, category: data.category } }, 
            { returnNewDocument: true }      
        )

    }

    async delete(id: string){ 
        return await this.schema.deleteOne({ id: id })
    }

}

export const ShoeDAO = new Container(Shoe)