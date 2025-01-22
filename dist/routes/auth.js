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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const UserService_1 = require("../Arquitecture/User/UserService");
const validateUser_1 = require("../utilities/validateUser");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const { email, password } = req.body;
    try {
        const user = yield UserService_1.userService.loginUser(email, password);
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, 'the secret word', {
            expiresIn: '1h'
        });
        // res.cookie('access_token', token)
        res.status(200).json({ user, token });
    }
    catch (error) {
        // console.log(error)
        res.status(400).json({ error: error.message });
    }
}));
exports.AuthRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, email, password, phone, dni } = req.body;
    console.log(req.body);
    try {
        const user = yield (0, validateUser_1.validateUser)(name, lastname, email, password, phone, dni);
        yield (0, validateUser_1.validateUniqueUser)(email);
        const resp = yield UserService_1.userService.registerUser(user);
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, 'the secret word', {
            expiresIn: '1h'
        });
        // res.cookie('access_token', token, { httpOnly:true })
        res.status(200).json({ user: resp, token });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}));
exports.AuthRouter.post("/logout", (req, res) => {
});
