import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
        firstName:{type:String,require:true},
        lastName:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        role:{type:String,default:"admin"},
        userPicturePath:{type:String,default:"https://cdn3.vectorstock.com/i/thumb-large/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg"},
    },{
        timestamps:true
    })

const Admin = mongoose.model("Admin",adminSchema)

export default Admin;