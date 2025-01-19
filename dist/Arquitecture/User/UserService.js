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
exports.userService = exports.UserService = void 0;
const UserRepository_1 = require("./UserRepository");
const bcrypt_1 = require("bcrypt");
class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getUserById(id);
            return resp;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getUserByEmail(email);
            if (!resp)
                throw new Error('this user doesnt exits');
            const isValid = yield (0, bcrypt_1.compare)(password, resp.password);
            // console.log(isValid)
            if (isValid)
                return resp;
            else
                throw new Error('invalid password');
        });
    }
    registerUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.createUser(data);
            // console.log(resp)
            return resp;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.deleteUser(id);
            return resp;
        });
    }
}
exports.UserService = UserService;
exports.userService = new UserService(UserRepository_1.userRepository);
