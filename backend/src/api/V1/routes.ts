import express from 'express'
import accountRouter from '../../routers/accountRouter'
import userRouter from '../../routers/userRouter'

const mainRouter=express.Router()

mainRouter.use('/account',accountRouter)
mainRouter.use('/user',userRouter)


export default mainRouter