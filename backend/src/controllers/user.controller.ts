import { Request, Response, Router } from 'express';
import User from '../models/User';
import  bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { signUpBody, sigInBody } from '../utills/validations';
import Bank from '../models/bank.model';


export const signUpController=async function(req:Request,res:Response):Promise<Response>{
        const {success}=signUpBody.safeParse(req.body)
        if(!success){
            return res.status(411).json("Invalid Inputs")
        }
        const existingUser=await User.findOne({
            userName:req.body.userName,
        })            
        if(existingUser) return res.status(411).json("User already exists")
        
        const hashedPassword=await bcrypt.hash(req.body.password,10)
            


        const user=await User.create({
            userName:req.body.userName,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password:hashedPassword
        })
        const token=generateAccessToken(user.userName)
        return res.status(200).json({
            messege:"New User Created",
            token: token,
        })}       

export const signInController=async function(req:Request,res:Response):Promise<Response>{
        const {success}= sigInBody.safeParse(req.body)
        if(!success) res.status(411).json("Invalid inputs")
        const{userName,password}=req.body
        const user=await User.findOne({
            userName
        })
        if(!user) return res.status(411).json("User not registered")
        
        const match=await bcrypt.compare(password,user.password) 
        if(!match) return res.status(411).json("Incorrect Password")
        const token=generateAccessToken(userName)
        return res.status(200).json({
            token: token
        })
}

export const searchController= async function(req:Request ,res:Response){
        const filter=req.params.filter || ""
        const users=await User.find(
            {
                $or:[{
                    firstName:{
                        "$regex": filter
                    },
                    lastName:{
                        "$regex": filter
                    }
                }]
            }
        )
        return res.status(200).json(users)
}

// Internal Functions

function generateAccessToken(data:string):string{
    const accessToken=jwt.sign(data,`${process.env.JWT_secret_key}`)
    return accessToken
}

