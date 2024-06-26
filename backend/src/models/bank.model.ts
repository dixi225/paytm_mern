import mongoose,{Schema} from "mongoose";
import User from "./User";


const bankSchema=new Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    balance:{
        type:Number,
        requird:true
    }
})

const Bank=mongoose.model("Bank",bankSchema)

export default Bank