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
exports.shoeRepository = exports.Repository = void 0;
const DAO_1 = require("../../db/DAO/DAO");
class Repository {
    constructor(shoeDao) {
        this.shoeDao = shoeDao;
    }
    getAllShoes() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.findAll();
            return resp;
        });
    }
    getShoeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.findById(id);
            return resp;
        });
    }
    getShoesByIdList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.findByIdList(list);
            return resp;
        });
    }
    addShoe(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.create(data);
            return resp;
        });
    }
    searchShoes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.search(params);
            return resp;
        });
    }
    updateShoe(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.update(id, data);
            return resp;
        });
    }
    deleteShoe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.shoeDao.delete(id);
            return resp;
        });
    }
}
exports.Repository = Repository;
exports.shoeRepository = new Repository(DAO_1.shoeDAO);
