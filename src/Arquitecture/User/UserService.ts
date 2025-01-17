import { User } from '../../types/User.types'
import { validateUser } from '../../utilities/validateUser'
import { Repository, userRepository } from './UserRepository'
import { compare } from 'bcrypt'

export class UserService { 

    repository: Repository

    constructor(repository: Repository){ 
        this.repository = repository
    }

    async getUserById(id: string){ 
        const resp = await this.repository.getUserById(id)
        return resp
    }

    async loginUser(email: string, password:string){ 
        
        const resp = await this.repository.getUserByEmail(email)
        if(!resp) throw new Error('this user doesnt exits')

        const isValid = await compare(password, resp.password)
        // console.log(isValid)
        if(isValid) return resp
        else throw new Error('invalid password')
        
    }

    async registerUser(data: User){ 
        const resp = await this.repository.createUser(data)
        // console.log(resp)
        return resp
    }

    async deleteUser(id:string){
        const resp = await this.repository.deleteUser(id)
        return resp
    }
}

export const userService = new UserService(userRepository)