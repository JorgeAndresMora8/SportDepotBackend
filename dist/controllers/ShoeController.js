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
exports.deleteShoe = exports.updateShoe = exports.createShoe = exports.searchShoes = exports.getShoesById = exports.getShoeList = exports.getAllShoes = void 0;
const ShoeService_1 = require("../Arquitecture/Shoes/ShoeService");
const validateShoe_1 = require("../utilities/validateShoe");
const getAllShoes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.cookies['access_token'])
    const allShoes = yield ShoeService_1.shoeService.getShoes();
    res.status(200).json(allShoes);
});
exports.getAllShoes = getAllShoes;
const getShoeList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { list } = req.body;
    const shoes = yield ShoeService_1.shoeService.getShoeByIdList(list);
    res.status(200).json(shoes);
});
exports.getShoeList = getShoeList;
const getShoesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shoe = yield ShoeService_1.shoeService.getShoeById(req.params.id);
    res.status(200).json(shoe);
});
exports.getShoesById = getShoesById;
const searchShoes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req;
    const result = yield ShoeService_1.shoeService.searchShoes(query);
    res.status(200).json(result);
});
exports.searchShoes = searchShoes;
const createShoe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = (0, validateShoe_1.validateShoe)(req.body);
        yield ShoeService_1.shoeService.createShoe(validatedData);
        res.status(200).json({ message: "shoe added succesfully" });
    }
    catch (error) {
        // console.log(error)
        res.status(400).json({ data: 'error' });
    }
});
exports.createShoe = createShoe;
const updateShoe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shoe = yield ShoeService_1.shoeService.getShoeById(req.params.id);
    if (!shoe) {
        res.status(200).json({ message: "this shoe doesnt exits" });
        return;
    }
    try {
        const newDoc = yield ShoeService_1.shoeService.updateShoe(req.body, req.params.id);
        res.status(201).json(newDoc);
    }
    catch (error) {
        res.status(400).json({ message: `there was an error ${error}` });
    }
});
exports.updateShoe = updateShoe;
const deleteShoe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ShoeService_1.shoeService.deletedShoe(req.params.id);
        res.status(200).json({ message: 'shoe deleted succesfully' });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.deleteShoe = deleteShoe;
