import Review from "../../types/Review.types";
import { validateReview } from "../../utilities/validateReview";
import { userService } from "../User/UserService";
import { Repository, reviewRepository } from "./ReviewRepository";

export class ReviewService {
  repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async getAllReviews() {
    const resp = await this.repository.getAllReviews();
    return resp;
  }

  async createReview(data: any) {
    try {
      const review = validateReview(data);
      await this.repository.createReview(review);
    } catch (error) {
      console.log(error)
    }
  }

  async getReviewsByProductId(productId: string) {
    const resp = await this.repository.getReviewByProductId(productId) as Review[];


    const reviewWithUser = await Promise.all(
      resp.map(async (review) => {
        const user = await userService.getUserById(review.userId);
        return {
          id: review.id,
          productId: review.productId,
          user: user,
          text: review.text,
          rating: review.rating,
          date: review.date,
          title: review.title
        };
      })
    );

    return reviewWithUser;
  }

  async deleteReview(id: string) {
    const resp = await this.repository.deleteReview(id);
    return resp;
  }
}

export const reviewService = new ReviewService(reviewRepository);
