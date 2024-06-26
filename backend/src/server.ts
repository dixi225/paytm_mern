import app from './index'
import connectDB from './dbConnect';
import  http from 'http'


const PORT= process.env.Port||4001 
const server=http.createServer(app);
const  startServer=async()=>{
    await connectDB()
    server.listen(PORT,()=>{
        console.log(`server starting at port : ${PORT}`);
    })
}
startServer()