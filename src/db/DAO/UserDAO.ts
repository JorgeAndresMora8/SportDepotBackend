import { User as UserType } from '../../types/User.types'
import { connectDB } from '../Db'
import {Shoes} from '../models/models'

connectDB()



class UserDAO { 

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


    async findByName(name:string){ 
        const resp = await this.schema.findOne({name:name})
        return resp
    }

    async findByEmail(email:string){ 
        const resp = await this.schema.findOne({email:email})
        return resp
    }
    async search(params: any){ 

        let mongoDbParams = []

        if(params.name !== "" && params.name !== null && params.name !== undefined ) mongoDbParams.push( { $text: { $search: params.name } })
        if(params.category !== "") mongoDbParams.push({ category: params.category })
        
        // console.log(mongoDbParams)

        if(mongoDbParams.length >= 1){
        const response = await this.schema.find({$and: mongoDbParams})
        
        return response
        }else { 
            const response = await this.schema.find({}, {_id: 0, __v: 0}).lean();
            return response
        }
    }

    async create(data: UserType){ 
       return await this.schema.create({ 
        id: data.id, 
        name: data.name, 
        lastname: data.lastname, 
        password: data.password,
        dni: data.dni, 
        email: data.email, 
        phone: data.phone, 
        order: []
    }) 
    }

    async update(id: string, data: UserType){ 
        return await this.schema.findOneAndUpdate(
            { id: id }, 
            { $set: { 
                name: data.name, 
                lastname: data.lastname, 
                email: data.email, 
                phone: data.phone, 
                dni: data.dni, 
                orders: data.orders 
            } }, 
            { returnNewDocument: true }      
        )

    }

    async delete(id: string){ 
        return await this.schema.deleteOne({ id: id })
    }

}


export default UserDAO