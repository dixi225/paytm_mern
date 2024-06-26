import { Response, Request } from "express"
import Bank from "../models/bank.model"
import mongoose from "mongoose";

export const transactionController=async function(req:Request,res:Response){
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account:any = await Bank.findOne({ userId: req.body.userId }).session(session);

    if(!account) return res.status(400).json({
        message: "Account not found"
    });

    if (account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Bank.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Bank.updateOne({ userId: req.body.userId }, { $inc: { balance: -amount } }).session(session);
    await Bank.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
}

export const getBalance=async function(req:Request,res:Response){
    const userId=req.body._id
    const balance= await Bank.find({
        userId: userId,
    })
    return res.status(200).json({balance:balance})
}