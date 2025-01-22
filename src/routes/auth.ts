import { Router } from "express";
import { userService } from "../Arquitecture/User/UserService";
import { validateUniqueUser, validateUser } from "../utilities/validateUser";
import jwt from 'jsonwebtoken'

export const AuthRouter = Router()

AuthRouter.post("/login", async (req, res) => {

  // console.log(req.body)

  const { email, password } = req.body
  
  try {
    const user = await userService.loginUser(email, password)
    const token = jwt.sign({id:user.id, email: user.email}, 'the secret word',{ 
      expiresIn:'1h'
    })
    // res.cookie('access_token', token)
    res.status(200).json({user, token})
    
  } catch (error:any) {
    // console.log(error)
    res.status(400).json({ error:error.message })
  }
});

AuthRouter.post("/signup", async (req, res) => { 
    
  const { name, lastname, email, password, phone, dni } = req.body
  console.log(req.body)
  try{
    const user = await validateUser(name, lastname, email, password, phone, dni)
    
    await validateUniqueUser(email)
    const resp = await userService.registerUser(user)
    const token = jwt.sign({id:user.id, email: user.email}, 'the secret word',{ 
      expiresIn:'1h'
    })
    // res.cookie('access_token', token, { httpOnly:true })
    res.status(200).json({user:resp, token})
  }catch(error: any){
    console.log(error)
    res.status(400).json({ message: error.message })
  }

})

AuthRouter.post("/logout", (req, res) => { 
  

})
