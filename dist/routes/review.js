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
exports.ReviewRouter = void 0;
const express_1 = require("express");
const ReviewService_1 = require("../Arquitecture/Review/ReviewService");
exports.ReviewRouter = (0, express_1.Router)();
exports.ReviewRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield ReviewService_1.reviewService.getAllReviews();
    res.status(200).json({ resp });
}));
exports.ReviewRouter.get('/product/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield ReviewService_1.reviewService.getReviewsByProductId(req.params.id);
    // console.log(resp)
    res.status(200).json(resp);
}));
exports.ReviewRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield ReviewService_1.reviewService.createReview(req.body);
    res.status(200).json({ status: 200, message: 'review successfully created', date: Date.now() });
}));
exports.ReviewRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield ReviewService_1.reviewService.deleteReview(req.params.id);
    res.status(200).json({ message: 'review deleted succesfully' });
}));
