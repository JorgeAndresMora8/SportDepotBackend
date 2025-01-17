import { Shoe } from '../../types/Shoe.types';
import { connectDB } from '../Db'
import Invoice from '../../types/Invoice.types'

connectDB()


class PaymentDAO { 

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

    async create(data: Invoice){ 
           return await this.schema.create({ 
            id: data.id,
            userId: data.user.id,
            date: data.date,
            products: data.products,
            total: data.total,
            paymentMethod: {
                type: data.paymentMode.type,
                paymentNetwork: data.paymentMode.paymentNetwork,
                installments: data.paymentMode.installments
            }
        }) 
        }

}

export default PaymentDAO