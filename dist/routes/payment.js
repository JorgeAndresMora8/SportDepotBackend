"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRouter = void 0;
const express_1 = require("express");
const invoiceService_1 = require("../Arquitecture/Payment/invoiceService");
exports.PaymentRouter = (0, express_1.Router)();
//Obtengo todos los recibos
exports.PaymentRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield invoiceService_1.invoiceService.getAllInvoices();
    res.status(200).json(resp);
}));
//Obtengo los recibos dependiendo de un ID
exports.PaymentRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoiceService_1.invoiceService.getInvoiceById(req.params.id);
    res.status(200).json(invoice);
}));
exports.PaymentRouter.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoiceService_1.invoiceService.getInvoiceByUserId(req.params.id);
    res.status(200).json(invoice);
}));
exports.PaymentRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, total, products, bank, installments } = req.body;
    yield invoiceService_1.invoiceService.generateInvoce({ user, total, products, bank, installments });
    res.status(200).json({ state: 'succesfull', message: 'order recieved' });
}));
