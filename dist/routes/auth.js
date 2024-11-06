"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/login", (req, res) => {
    // Logic for registering a user
    res.status(201).send("Login User");
});
exports.AuthRouter.post("/signup", (req, res) => {
    res.status(201).json({ "message": "product sended successfully" });
});
