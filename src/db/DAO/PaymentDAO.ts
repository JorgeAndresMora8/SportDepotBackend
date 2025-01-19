import { Shoe } from '../../types/Shoe.types';
import { connectDB } from '../Db'
import Invoice from '../../types/Invoice.types'

connectDB()

const GetDate = () => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(2, "0")}/${today.getFullYear()}`;
    return formattedDate
  }
  

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
        const resp = await this.schema.find({id: id})
        return resp
    }

    async findByUserId(userId: string){ 
        const resp = await this.schema.find({userId: userId})
        return resp;
    }

    async create(data: Invoice){ 
           return await this.schema.create({ 
            id: data.id,
            userId: data.user.id,
            date: GetDate(),
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