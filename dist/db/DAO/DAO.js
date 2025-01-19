"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentDAO = exports.reviewDAO = exports.userDAO = exports.shoeDAO = void 0;
const ShoeDAO_1 = __importDefault(require("./ShoeDAO"));
const UserDAO_1 = __importDefault(require("./UserDAO"));
const models_1 = require("../models/models");
const ReviewDAO_1 = __importDefault(require("./ReviewDAO"));
const PaymentDAO_1 = __importDefault(require("./PaymentDAO"));
exports.shoeDAO = new ShoeDAO_1.default(models_1.Shoes);
exports.userDAO = new UserDAO_1.default(models_1.User);
exports.reviewDAO = new ReviewDAO_1.default(models_1.Review);
exports.paymentDAO = new PaymentDAO_1.default(models_1.Payment);
