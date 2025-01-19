import { paymentDAO } from "../../db/DAO/DAO";
import PaymentDAO from "../../db/DAO/PaymentDAO";
import Invoice from "../../types/Invoice.types";
import { Shoe } from "../../types/Shoe.types";
import { User } from "../../types/User.types";

export class Repository { 

    paymentDAO: PaymentDAO

    constructor(paymentDAO: PaymentDAO){ 
        this.paymentDAO = paymentDAO;
    }

    async getInvoiceByUserId(userId:string): Promise<Invoice[]>{ 
        const resp = await this.paymentDAO.findByUserId(userId)
        return resp
    }

    async getAllInvoices(){ 
        const resp = await this.paymentDAO.findAll()
        return resp
    }

    async getInvoice(id: string){ 
        const resp = await this.paymentDAO.findById(id)
        return resp
    }

    async saveInvoice(invoice:Invoice ): Promise<any>{ 
        const resp = await this.paymentDAO.create(invoice)
        return resp
    }


}

export const invoiceRepository = new Repository(paymentDAO)