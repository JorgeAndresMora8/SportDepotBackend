import { Shoe } from "../../types/Shoe.types";
import { Repository, shoeRepository } from "./ShoeRepository";



class ShoeService { 

    repository: Repository

    constructor(repository: Repository){ 
        this.repository = repository
    }

    async getShoes(): Promise<Shoe[]>{ 
        return await this.repository.getAllShoes()
    }

    async getShoeById(id: string){ 
        return await this.repository.getShoeById(id)
    }

    async getShoeByIdList(list: string[]){ 
        return await this.repository.getShoesByIdList(list)
    }

    async searchShoes(params: Object){ 
        return await this.repository.searchShoes(params)
    }

    async createShoe(shoe: Shoe): Promise<Shoe[] | void>{ 
        return await this.repository.addShoe(shoe)
    }

    async updateShoe(shoe: Shoe, id: string): Promise<Shoe | void>{ 
        return await this.repository.updateShoe(id, shoe)
    }

    async deletedShoe(id: string): Promise<void>{ 
        await this.repository.deleteShoe(id)
    }
}

export const shoeService = new ShoeService(shoeRepository);