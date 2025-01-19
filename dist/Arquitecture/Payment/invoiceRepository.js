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
exports.invoiceRepository = exports.Repository = void 0;
const DAO_1 = require("../../db/DAO/DAO");
class Repository {
    constructor(paymentDAO) {
        this.paymentDAO = paymentDAO;
    }
    getInvoiceByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.paymentDAO.findByUserId(userId);
            return resp;
        });
    }
    getAllInvoices() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.paymentDAO.findAll();
            return resp;
        });
    }
    getInvoice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.paymentDAO.findById(id);
            return resp;
        });
    }
    saveInvoice(invoice) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.paymentDAO.create(invoice);
            return resp;
        });
    }
}
exports.Repository = Repository;
exports.invoiceRepository = new Repository(DAO_1.paymentDAO);
