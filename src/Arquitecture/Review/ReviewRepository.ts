
import { reviewDAO, userDAO } from "../../db/DAO/DAO";
import ReviewDAO from "../../db/DAO/ReviewDAO";
import UserDAO from "../../db/DAO/UserDAO";
import Review from "../../types/Review.types";
import { User } from "../../types/User.types";

export class    Repository { 

    shoeDao: ReviewDAO

    constructor(shoeDao: ReviewDAO){ 
        this.shoeDao = shoeDao;
    }

    async getAllReviews(): Promise<Review[] | []>{ 
        const resp = await this.shoeDao.findAll()
        return resp
    }

    async getReviewById(id: string): Promise<Review | void>{
        const resp = await this.shoeDao.findById(id)
        return resp
    }

    async getReviewByProductId(productId:string): Promise<Review[] | void> { 
        const resp = await this.shoeDao.findByProductId(productId)
        console.log(resp)
        return resp
    }

    async createReview( data: Review ): Promise<Review[] | void>{
        const resp = await this.shoeDao.create(data)
        return resp
     }

    // async searchShoes(params: Object){ 
    //     const resp = await this.shoeDao.search(params)
    //     return resp
 
    // }

    async updateReview(id: string, data: Review): Promise<Review | void>{ 
        const resp = await this.shoeDao.update(id, data)
        return resp
    }

    async deleteReview(id: string){ 
        const resp = await this.shoeDao.delete(id)
        return resp
    }
}

export const reviewRepository = new Repository(reviewDAO)