import express,{Request} from 'express'
import mainRouter from './api/V1/routes'
import helmet from 'helmet'
import cors from 'cors'
const app=express()

app.use(express.json())
app.use(helmet())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

app.use('/api/v1',mainRouter)

export default app