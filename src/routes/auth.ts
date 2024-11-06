import { Router } from "express";

export const AuthRouter = Router()

AuthRouter.post("/login", (req, res) => {
  // Logic for registering a user
  res.status(201).send("Login User");
});

AuthRouter.post("/signup", (req, res) => { 
    res.status(201).json({"message": "product sended successfully"})
})