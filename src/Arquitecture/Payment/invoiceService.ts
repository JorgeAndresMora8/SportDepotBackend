import { sendEmail } from "../../mailer/emailService";
import { Shoe } from "../../types/Shoe.types";
import { User } from "../../types/User.types";
import { Repository, invoiceRepository } from "./invoiceRepository";



class InvoiceService { 

    repository: Repository

    constructor(repository: Repository){ 
        this.repository = repository
    }

    async getAllInvoices(): Promise<any[] | []>{ 
        const resp = await this.repository.getAllInvoices()
        return resp
    }

    async getInvoiceByUserId(userId:string): Promise<any[]>{ 
        const resp = await this.repository.getInvoiceByUserId(userId)
        // return resp.filter(invoice => invoice.status === 'successfull')
        return resp
    }
    async getInvoiceById(id: string){ 
        const resp = await this.repository.getInvoice(id)
        return resp
    }

    async generateInvoce({ user, total, products, bank, installments }: { user:User, total:number, products: Shoe[], bank: string, installments:string}){

        const max = 1000;
        const randomInt = Math.floor(Math.random() * max);

        const invoice = { 
            user, 
            total, 
            products, 
            date: String(new Date()),
            status: 'successfull',
            userId: user.id,
            id: '123',
            paymentMode: { 
                type: 'credit', 
                paymentNetwork: 'visa',
                installments: 2
            }
        }

        console.log(bank, installments)
        sendEmail('jorgeandresmm2002@gmail.com', 'Invoice', { user:user, products: products, totalPrice: total, network: bank, installments  })
        sendEmail(user.email, 'Invoice', { user:user, products: products, totalPrice: total, network: bank, installments  })
        await this.repository.saveInvoice(invoice)
    }
}

export const invoiceService = new InvoiceService(invoiceRepository);