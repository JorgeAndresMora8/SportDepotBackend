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
exports.validateUser = validateUser;
exports.validateUniqueUser = validateUniqueUser;
const UserRepository_1 = require("../Arquitecture/User/UserRepository");
const generateID_1 = __importDefault(require("./generateID"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function validateUser(name, lastname, email, password, phone, dni) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!name || !lastname || !email || !password || !phone || !dni) {
            throw new Error('fields missing');
        }
        if (name.length < 3)
            throw new Error('name length too short');
        if (lastname.length < 3)
            throw new Error('lastname length too short');
        if (email.length < 3)
            throw new Error('lastname length too short');
        // if(email.includes('@')) throw new Error('email must contain @')
        if (password.length < 3)
            throw new Error('password too short');
        if (phone.length < 3)
            throw new Error('phone length too short');
        if (dni.length < 3)
            throw new Error('dni length too short');
        const hashedPassword = yield bcrypt_1.default.hash(password, 8);
        return {
            id: (0, generateID_1.default)(),
            name: name,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            dni: dni,
            phone: phone,
            orders: []
        };
    });
}
function validateUniqueUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailValidation = yield UserRepository_1.userRepository.getUserByEmail(email);
        if (emailValidation) {
            throw new Error('error: this user already exits, please select another');
        }
    });
}
