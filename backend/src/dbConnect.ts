import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const Mongo_url:string= `${process.env.Database_url}`

mongoose.connection.once('open',()=>console.log("Connected"))
mongoose.connection.once('error',()=>console.log("Some error happened while connecting database"))

const connectDB=async function(){
    await mongoose.connect(Mongo_url)
}

export default connectDB
