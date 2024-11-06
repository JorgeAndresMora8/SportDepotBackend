"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateShoe = void 0;
const createId_1 = __importDefault(require("./createId"));
const validateShoe = (data) => {
    if (!data.name || !data.price || data.price <= 0) {
        throw new Error('Fields missings');
    }
    const obj = {
        id: (0, createId_1.default)(),
        name: data.name,
        price: data.price,
        image: data.image,
        description: data.description,
        stock: data.stock,
        category: data.category,
        brand: data.brand,
        size: [],
        features: data.features || []
    };
    return obj;
};
exports.validateShoe = validateShoe;
