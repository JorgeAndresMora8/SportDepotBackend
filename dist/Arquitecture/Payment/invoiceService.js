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
exports.invoiceService = void 0;
const emailService_1 = require("../../mailer/emailService");
const invoiceRepository_1 = require("./invoiceRepository");
class InvoiceService {
    constructor(repository) {
        this.repository = repository;
    }
    getAllInvoices() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getAllInvoices();
            return resp;
        });
    }
    getInvoiceByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getInvoiceByUserId(userId);
            // return resp.filter(invoice => invoice.status === 'successfull')
            return resp;
        });
    }
    getInvoiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getInvoice(id);
            return resp;
        });
    }
    generateInvoce(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user, total, products, bank, installments }) {
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
            };
            console.log(bank, installments);
            (0, emailService_1.sendEmail)('jorgeandresmm2002@gmail.com', 'Invoice', { user: user, products: products, totalPrice: total, network: bank, installments });
            yield this.repository.saveInvoice(invoice);
        });
    }
}
exports.invoiceService = new InvoiceService(invoiceRepository_1.invoiceRepository);
