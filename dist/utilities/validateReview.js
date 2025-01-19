"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReview = validateReview;
const createId_1 = __importDefault(require("./createId"));
function validateReview(data) {
    if (!data.productId || !data.userId || !data.text || !data.rating || !data.date) {
        throw new Error('Invalid review: fields missing...');
    }
    if (data.text.length <= 1) {
        throw new Error('Invalid review: text too short...');
    }
    const obj = {
        id: (0, createId_1.default)(),
        title: data.title,
        productId: data.productId,
        userId: data.userId,
        text: data.text,
        rating: data.rating,
        date: data.date
    };
    return obj;
}
