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
const Db_1 = require("../Db");
(0, Db_1.connectDB)();
const GetDate = () => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
    return formattedDate;
};
class PaymentDAO {
    constructor(schema) {
        this.schema = schema;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.find({});
            return resp;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.find({ id: id });
            return resp;
        });
    }
    findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.find({ userId: userId });
            return resp;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.create({
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
            });
        });
    }
}
exports.default = PaymentDAO;
