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
class ReviewDAO {
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
    findByProductId(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.schema.find({ productId: productId });
            return resp;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.create({
                id: data.id,
                productId: data.productId,
                userId: data.userId,
                text: data.text,
                rating: data.rating,
                date: data.date,
                title: data.title
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.findOneAndUpdate({ id: id }, { $set: { rating: data.rating, text: data.text } }, { returnNewDocument: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.schema.deleteOne({ id: id });
        });
    }
}
exports.default = ReviewDAO;
