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
exports.reviewService = exports.ReviewService = void 0;
const validateReview_1 = require("../../utilities/validateReview");
const UserService_1 = require("../User/UserService");
const ReviewRepository_1 = require("./ReviewRepository");
class ReviewService {
    constructor(repository) {
        this.repository = repository;
    }
    getAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getAllReviews();
            return resp;
        });
    }
    createReview(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const review = (0, validateReview_1.validateReview)(data);
                yield this.repository.createReview(review);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getReviewsByProductId(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.getReviewByProductId(productId);
            const reviewWithUser = yield Promise.all(resp.map((review) => __awaiter(this, void 0, void 0, function* () {
                const user = yield UserService_1.userService.getUserById(review.userId);
                return {
                    id: review.id,
                    productId: review.productId,
                    user: user,
                    text: review.text,
                    rating: review.rating,
                    date: review.date,
                    title: review.title
                };
            })));
            return reviewWithUser;
        });
    }
    deleteReview(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.repository.deleteReview(id);
            return resp;
        });
    }
}
exports.ReviewService = ReviewService;
exports.reviewService = new ReviewService(ReviewRepository_1.reviewRepository);
