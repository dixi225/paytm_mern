import express from 'express'
import authRouter from '../../routers/authRouter'
import userRouter from '../../routers/userRouter'

const mainRouter=express.Router()

mainRouter.use('/auth',authRouter)
mainRouter.use('/user',userRouter)


export default mainRouter