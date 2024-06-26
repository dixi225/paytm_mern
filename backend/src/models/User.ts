import mongoose,{Schema} from "mongoose";

const userSchema= new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        minLength:8,
        maxLength:12,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:12,
    },
    firstName:{
        type:String,
        required:true,
        minLength:8,
        maxLength:12,
        trim:true    
    },
    secondName:{
        type:String,
        required:true,
        minLength:8,
        maxLength:12,
        trim:true
    }
})

const User= mongoose.model('User',userSchema)

export default User