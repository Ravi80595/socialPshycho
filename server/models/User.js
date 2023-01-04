import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{type:String,require:true,min:2,max:40},
    lastName :{type:String,require:true,min:2,max:40},
    email :{type:String,require:true,unique:true,max:40},
    password :{type:String,require:true,min:5},
    picturePath :{type:String,default:""},
    friends:{type:Array,default:[]},
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User 