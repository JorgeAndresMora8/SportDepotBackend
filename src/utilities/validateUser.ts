import { userRepository } from "../Arquitecture/User/UserRepository"
import { UserService, userService } from "../Arquitecture/User/UserService"
import { User } from "../types/User.types"
import generateID from "./generateID"
import bcrypt from "bcrypt"

export async function validateUser(name: string, lastname:string, email:string, password: string, phone:string, dni:string): Promise<User>{ 

    if(!name || !lastname || !email || !password || !phone || !dni){ 
        throw new Error('fields missing')
    }

    if(name.length < 3) throw new Error('name length too short')

    if(lastname.length < 3) throw new Error('lastname length too short')

    if(email.length < 3) throw new Error('lastname length too short')
    // if(email.includes('@')) throw new Error('email must contain @')

    if(password.length < 3) throw new Error('password too short')
    

    
    if(phone.length < 3) throw new Error('phone length too short')

    if(dni.length < 3) throw new Error('dni length too short')
    
        const hashedPassword = await bcrypt.hash(password, 8)

    return { 
        id:generateID(),
        name: name, 
        lastname: lastname, 
        email: email, 
        password: hashedPassword,
        dni: dni,
        phone: phone, 
        orders: []
    }


}

export async function validateUniqueUser(email:string){
    const emailValidation = await userRepository.getUserByEmail(email)
    if(emailValidation){ 
        throw new Error('error: this user already exits, please select another')
    }
}