import { Router } from 'express'
import { transactionController, getBalance } from '../controllers/account.controller'

const accountRouter=Router()

accountRouter.get('/balance',getBalance)
accountRouter.get('/transfer',transactionController)


export default accountRouter