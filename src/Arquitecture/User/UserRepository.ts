
import { userDAO } from "../../db/DAO/DAO";
import UserDAO from "../../db/DAO/UserDAO";
import { User } from "../../types/User.types";


export class Repository { 

    shoeDao: UserDAO

    constructor(shoeDao: UserDAO){ 
        this.shoeDao = shoeDao;
    }

    async getAllUsers(): Promise<User[] | []>{ 
        const resp = await this.shoeDao.findAll()
        return resp
    }

    async getUserById(id: string): Promise<User | void>{
        const resp = await this.shoeDao.findById(id)
        return resp
    }
    async getUserByName(name: string): Promise<User | void>{
        const resp = await this.shoeDao.findByName(name)
        return resp
    }

    async getUserByEmail(email:string): Promise<User | void> { 
        const resp = await this.shoeDao.findByEmail(email)
        return resp
    }

    async createUser( data: User ): Promise<User[] | void>{
        const resp = await this.shoeDao.create(data)
        return resp
     }

    async searchShoes(params: Object){ 
        const resp = await this.shoeDao.search(params)
        return resp
 
    }

    async updateUser(id: string, data: User): Promise<User | void>{ 
        const resp = await this.shoeDao.update(id, data)
        return resp
    }

    async deleteUser(id: string){ 
        const resp = await this.shoeDao.delete(id)
        return resp
    }
}

export const userRepository = new Repository(userDAO)