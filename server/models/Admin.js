import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
        firstName:{type:String,require:true},
        lastName:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        role:{type:String,default:"admin"},
        userPicturePath:{type:String,default:"blank.png"},
    },{
        timestamps:true
    })

const Admin = mongoose.model("Admin",adminSchema)

export default Admin;