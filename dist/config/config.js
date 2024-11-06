"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getEnv = () => {
    return {
        MONGODB_URI: process.env.MONGODB_URI
    };
};
exports.getEnv = getEnv;
exports.config = (0, exports.getEnv)();
