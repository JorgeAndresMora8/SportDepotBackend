"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Create the mongoose schema
const ProductSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: [String], required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    size: { type: [Number], required: true },
    brand: { type: String, required: true },
    features: { type: [String], required: true }
});
const Shoes = (0, mongoose_1.model)("shoes", ProductSchema);
exports.default = Shoes;
