import Admin from "../models/Admin.js"
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken"
import User from "../models/User.js"


export const adminSign = async(req,res)=>{
    try{
        const {email,password,firstname,lastname,role,avtar}= req.body
        let existingUser = await Admin.findOne({email})
        if(existingUser){
            res.status(404).send({"msg":"Admin already exists Please Login"})
        }else{
            bcrypt.hash(password,4, async(err,hash)=>{
        let admin = new Admin({email,password:hash,firstname,lastname,role,avtar})
                await admin.save()
                res.status(200).send({"msg":`${firstname} Sign Up Successfull`})
            })
        }
    }catch(err){
        console.log(err)
    }
}



export const adminLogin = async(req,res)=>{
    try{
        const {email,password}= req.body
        console.log(req.body)
        let admin = await Admin.find({email})
        if(admin.length>0){
            const hashed_password = admin[0].password
            bcrypt.compare(password,hashed_password,function(err,result){
                if(result){
                    const token = jwt.sign({"adminID":admin[0]._id},'ravi')
                    res.status(200).send({"msg":"Login success ","token":token})
                }else{
                    res.status(400).send({"msg":"Login Faileds"})
                }
            })
        }
        else{
            res.status(400).send({"msg":"Login Failed"})
        }
    }
    catch(err){
        console.log(err)
        res.status(404).send({"msg":"Something Went wrong"})
    }
}


// All Users Get Methods

export const AllUser = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send(users)
    }catch(err){
        console.log(err)
    }
}

// All Admins Get Methods

export const AllAdmin = async(req,res)=>{
    try{
        const admins = await Admin.find()
        res.status(200).send(admins)
    }catch(err){
        console.log(err)
    }
}
