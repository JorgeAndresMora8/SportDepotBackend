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
class ShoeDAO {
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
    findByIdList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.find({ id: { $in: list } });
            return resp;
        });
    }
    search(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let mongoDbParams = [];
            if (params.name !== "" && params.name !== null && params.name !== undefined)
                mongoDbParams.push({ $text: { $search: params.name } });
            if (params.category !== "" && params.category !== null && params.category !== undefined)
                mongoDbParams.push({ category: params.category });
            if (params.brand !== "" && params.brand !== null && params.brand !== undefined)
                mongoDbParams.push({ brand: params.brand });
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
                image: data.image,
                price: data.price,
                description: data.description,
                stock: data.stock,
                size: [],
                category: data.category,
                brand: data.brand,
                features: data.features
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.findOneAndUpdate({ id: id }, { $set: { brand: data.brand, name: data.name, price: data.price, image: data.image, description: data.description, stock: data.stock, category: data.category } }, { returnNewDocument: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.deleteOne({ id: id });
        });
    }
}
exports.default = ShoeDAO;
