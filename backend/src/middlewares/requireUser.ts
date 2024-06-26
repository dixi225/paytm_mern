import { Request,Response } from "express";
import jwt from 'jsonwebtoken'

export default function requireUser(req:Request,res:Response,next:Function){
        const authorizationHeader=req.headers.authorization
        if(!authorizationHeader||!authorizationHeader.startsWith('Bearer')) return res.status(401).json({})
        const toCheckToken:string=authorizationHeader.split(" ")[1]
        const decoded:any=jwt.verify(toCheckToken,`${process.env.JWT_secret_key}`)
        if(!decoded) return res.status(401).json({message:"Invalid Token"})
        req.body._id=decoded._id
        next()
}