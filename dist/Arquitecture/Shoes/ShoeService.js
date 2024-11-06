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
exports.shoeService = void 0;
const ShoeRepository_1 = require("./ShoeRepository");
class ShoeService {
    constructor(repository) {
        this.repository = repository;
    }
    getShoes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getAllShoes();
        });
    }
    getShoeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getShoeById(id);
        });
    }
    searchShoes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.searchShoes(params);
        });
    }
    createShoe(shoe) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.addShoe(shoe);
        });
    }
    updateShoe(shoe, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.updateShoe(id, shoe);
        });
    }
    deletedShoe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.deleteShoe(id);
        });
    }
}
exports.shoeService = new ShoeService(ShoeRepository_1.shoeRepository);
