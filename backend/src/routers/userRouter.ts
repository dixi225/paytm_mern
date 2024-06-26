import { Router } from "express";
import { signInController, signUpController, searchController } from "../controllers/user.controller";

const userRouter= Router()

userRouter.get('/bulk',searchController)
userRouter.post('/signup',signUpController)
userRouter.post('/signin',signInController)

export default userRouter