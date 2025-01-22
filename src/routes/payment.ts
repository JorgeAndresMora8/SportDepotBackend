import { Router } from "express";
import { invoiceService } from "../Arquitecture/Payment/invoiceService";
import { Payment } from "../db/models/models";

export const PaymentRouter = Router()


//Obtengo todos los recibos
PaymentRouter.get('/', async (req, res) => { 
    const resp = await invoiceService.getAllInvoices()
    res.status(200).json(resp)
})


//Obtengo los recibos dependiendo de un ID
PaymentRouter.get('/:id', async (req, res) => { 
    const invoice = await invoiceService.getInvoiceById(req.params.id);
    res.status(200).json(invoice)
})


PaymentRouter.get('/user/:id', async (req, res) => { 
    const invoice = await invoiceService.getInvoiceByUserId(req.params.id); 
    res.status(200).json(invoice)
})

PaymentRouter.post('/', async (req, res) => { 
    const { user, total, products, bank, installments } = req.body;
    await invoiceService.generateInvoce({user, total, products, bank, installments})
    // res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ state:'succesfull', message:'order recieved' })

})
