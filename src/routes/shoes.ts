import { Router } from "express";
import { 
    getAllShoes, 
    getShoesById, 
    createShoe, 
    updateShoe, 
    deleteShoe,
    searchShoes
 } from '../controllers/ShoeController'

export const ShoeRouter = Router()

//Get all shoes
ShoeRouter.get('/', getAllShoes)
ShoeRouter.get('/search', searchShoes)
ShoeRouter.get('/:id', getShoesById)
ShoeRouter.post('/', createShoe)
ShoeRouter.put('/:id', updateShoe)
ShoeRouter.delete('/:id', deleteShoe)