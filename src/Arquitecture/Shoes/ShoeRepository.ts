import { Container, ShoeDAO } from "../../db/DAO/DAO";
import { Shoe } from "../../types/Shoe.types";


export class Repository { 

    shoeDao: Container

    constructor(shoeDao: Container){ 
        this.shoeDao = shoeDao;
    }

    async getAllShoes(): Promise<Shoe[] | []>{ 
        const resp = await this.shoeDao.findAll()
        return resp
    }

    async getShoeById(id: string): Promise<Shoe | void>{
        const resp = await this.shoeDao.findById(id)
        return resp
    }

    async addShoe( data: Shoe ): Promise<Shoe[] | void>{
        const resp = await this.shoeDao.create(data)
        return resp
     }

    async searchShoes(params: Object){ 
        const resp = await this.shoeDao.search(params)
        return resp
 
    }

    async updateShoe(id: string, data: Shoe): Promise<Shoe | void>{ 
        const resp = await this.shoeDao.update(id, data)
        return resp
    }

    async deleteShoe(id: string){ 
        const resp = await this.shoeDao.delete(id)
        return resp
    }
}

export const shoeRepository = new Repository(ShoeDAO)