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
class UserDAO {
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
            const resp = yield this.schema.findOne({ id: id });
            return resp;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.findOne({ name: name });
            return resp;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.findOne({ email: email });
            return resp;
        });
    }
    search(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let mongoDbParams = [];
            if (params.name !== "" && params.name !== null && params.name !== undefined)
                mongoDbParams.push({ $text: { $search: params.name } });
            if (params.category !== "")
                mongoDbParams.push({ category: params.category });
            // console.log(mongoDbParams)
            if (mongoDbParams.length >= 1) {
                const response = yield this.schema.find({ $and: mongoDbParams });
                return response;
            }
            else {
                const response = yield this.schema.find({}, { _id: 0, __v: 0 }).lean();
                return response;
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.create({
                id: data.id,
                name: data.name,
                lastname: data.lastname,
                password: data.password,
                dni: data.dni,
                email: data.email,
                phone: data.phone,
                order: []
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.findOneAndUpdate({ id: id }, { $set: {
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    dni: data.dni,
                    orders: data.orders
                } }, { returnNewDocument: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.deleteOne({ id: id });
        });
    }
}
exports.default = UserDAO;
