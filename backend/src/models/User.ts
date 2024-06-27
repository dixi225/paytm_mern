import mongoose,{Schema} from "mongoose";

const userSchema= new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
 
    },
    firstName:{
        type:String,
        required:true,
        trim:true    
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    }
})

const User= mongoose.model('User',userSchema)

export default User