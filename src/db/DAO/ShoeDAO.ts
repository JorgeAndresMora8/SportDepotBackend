import { Shoe, Shoe as shoeType } from '../../types/Shoe.types'
import { connectDB } from '../Db'
import {Shoes} from '../models/models'

connectDB()



class ShoeDAO { 

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

        let mongoDbParams = []

        if(params.name !== "" && params.name !== null && params.name !== undefined ) mongoDbParams.push( { $text: { $search: params.name } })
        if(params.category !== "" && params.category !== null && params.category !== undefined) mongoDbParams.push({ category: params.category })
        if(params.brand !== "" && params.brand !== null && params.brand !== undefined) mongoDbParams.push({ brand: params.brand  })
            
        // console.log(mongoDbParams)

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

    async update(id: string, data: Shoe){ 
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

export default ShoeDAO