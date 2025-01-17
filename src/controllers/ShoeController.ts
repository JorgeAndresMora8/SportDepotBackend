import { Request, Response } from "express"
import { shoeService } from "../Arquitecture/Shoes/ShoeService"
import { Shoe } from "../types/Shoe.types"
import { validateShoe } from "../utilities/validateShoe"

export const getAllShoes = async (req: Request, res: Response) => {
    // console.log(req.cookies['access_token'])
    const allShoes = await shoeService.getShoes()
    res.status(200).json(allShoes)
}

export const getShoesById = async (req: Request, res: Response) => { 
    const shoe = await shoeService.getShoeById(req.params.id) 
    res.status(200).json(shoe)
}

export const searchShoes = async (req: Request, res: Response) => { 
    const { query } = req
    const result = await shoeService.searchShoes(query)
    res.status(200).json(result)
}

export const createShoe = async (req: Request, res: Response) => { 

    try{ 
        const validatedData = validateShoe(req.body)
        await shoeService.createShoe(validatedData as Shoe)
        res.status(200).json({ message: "shoe added succesfully" })
    }catch(error){ 
        // console.log(error)
        res.status(400).json({ data :'error' })
    }
    
}

export const updateShoe = async (req: Request, res: Response) => { 
    const shoe = await shoeService.getShoeById(req.params.id)
    if(!shoe){ 
        res.status(200).json({message: "this shoe doesnt exits"}); 
        return;
    }

    try{ 
        const newDoc = await shoeService.updateShoe(req.body, req.params.id)
        res.status(201).json(newDoc)
    }catch(error){ 
        res.status(400).json({message: `there was an error ${error}`})
    }
    
}

export const deleteShoe = async (req: Request, res: Response) => { 
    
    try{
        await shoeService.deletedShoe(req.params.id)
        res.status(200).json({ message: 'shoe deleted succesfully' })
    }catch(error){ 
        res.status(400).json({ error })
    }
}