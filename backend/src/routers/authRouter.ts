import {Router} from 'express'

const authRouter=Router()

authRouter.get('/',(req,res)=>console.log("req recived"))


export default authRouter