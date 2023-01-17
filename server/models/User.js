import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{type:String,unique:true,require:true},
    firstName:{type:String,require:true,min:2,max:40},
    lastName :{type:String,require:true,min:2,max:40},
    email :{type:String,require:true,unique:true,max:40},
    password :{type:String,require:true,min:5},
    picturePath :{type:String,default:"https://cdn3.vectorstock.com/i/thumb-large/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg"},
    friends:{type:Array,default:[]},
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,
    bio:{type:String,default:"Enter Bio"}
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User 