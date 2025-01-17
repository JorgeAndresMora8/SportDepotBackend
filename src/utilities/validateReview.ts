import Review from "../types/Review.types";
import createId from "./createId";

export function validateReview(data: any): Review { 
    if(!data.productId || !data.userId || !data.text || !data.rating || !data.date){ 
        throw new Error('Invalid review: fields missing...')
    }

    if(data.text.length <=1){ 
        throw new Error('Invalid review: text too short...')
    }

    const obj = { 
        id: createId(), 
        title: data.title,
        productId: data.productId,
        userId: data.userId,
        text: data.text,
        rating: data.rating, 
        date: data.date
    }

    return obj
}