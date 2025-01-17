import ShoeDAO from "./ShoeDAO";
import UserDAO from "./UserDAO";
import {Payment, Review, Shoes, User} from '../models/models';
import ReviewDAO from "./ReviewDAO";
import PaymentDAO from "./PaymentDAO";

export const shoeDAO = new ShoeDAO(Shoes)
export const userDAO = new UserDAO(User)
export const reviewDAO = new ReviewDAO(Review)
export const paymentDAO = new PaymentDAO(Payment)