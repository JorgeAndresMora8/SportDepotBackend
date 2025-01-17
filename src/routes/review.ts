import { Router } from "express";
import { reviewService } from "../Arquitecture/Review/ReviewService";

export const ReviewRouter = Router()


ReviewRouter.get('/', async (req, res) => { 
    const resp = await reviewService.getAllReviews()
    res.status(200).json({ resp })
})

ReviewRouter.get('/product/:id', async (req, res) => { 
    const resp = await reviewService.getReviewsByProductId(req.params.id)
    // console.log(resp)
    res.status(200).json(resp)
})

ReviewRouter.post('/', async (req, res) => { 
    await reviewService.createReview(req.body)
    res.status(200).json({status:200, message:'review successfully created', date: Date.now()})
})

ReviewRouter.delete('/:id', async (req, res) => { 
    await reviewService.deleteReview(req.params.id)
    res.status(200).json({ message: 'review deleted succesfully' })
})
