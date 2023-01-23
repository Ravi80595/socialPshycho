import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const adminSchema = new mongoose.Schema({
        firstName:{type:String,require:true},
        lastName:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        role:{type:String,default:"admin"},
        userPicturePath:{type:String,default:"https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="},
        date:{type:String,default:currentDate},
        time:{type:String,default:currentTime}
    },{
        timestamps:true
    })

const Admin = mongoose.model("Admin",adminSchema)

export default Admin;