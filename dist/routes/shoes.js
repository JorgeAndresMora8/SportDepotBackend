"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeRouter = void 0;
const express_1 = require("express");
const ShoeController_1 = require("../controllers/ShoeController");
exports.ShoeRouter = (0, express_1.Router)();
//Get all shoes
exports.ShoeRouter.get('/', ShoeController_1.getAllShoes);
exports.ShoeRouter.get('/search', ShoeController_1.searchShoes);
exports.ShoeRouter.get('/:id', ShoeController_1.getShoesById);
exports.ShoeRouter.post('/', ShoeController_1.createShoe);
exports.ShoeRouter.put('/:id', ShoeController_1.updateShoe);
exports.ShoeRouter.delete('/:id', ShoeController_1.deleteShoe);
