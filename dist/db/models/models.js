"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoes = exports.User = exports.Review = exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    userId: { type: String, required: true },
    date: { type: String, required: true },
    products: { type: [], required: true },
    total: { type: Number, required: true },
    paymentMethod: { type: {}, required: true }
});
exports.Payment = (0, mongoose_1.model)('payment', PaymentSchema);
const ReviewSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true }
});
exports.Review = (0, mongoose_1.model)('review', ReviewSchema);
const UserSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    lastname: { type: String, required: true },
    dni: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    orders: { type: [], required: true },
});
exports.User = (0, mongoose_1.model)("user", UserSchema);
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
exports.Shoes = (0, mongoose_1.model)("shoes", ProductSchema);
