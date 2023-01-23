import Admin from "../models/Admin.js"
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken"
import User from "../models/User.js"

// ........................... Admin Signup Method ...............................

export const adminSign = async(req,res)=>{
    try{
        const {email,password,firstName,lastName,role,key}= req.body
        if(key!=="social"){
            res.status(201).send({"msg":"Wrong Secret Key"})
        }else{
        let existingAdmin = await Admin.findOne({email})
        if(existingAdmin){
            res.status(404).send({"msg":"Admin already exists Please Login"})
        }else{
            bcrypt.hash(password,4, async(err,hash)=>{
        const admins = new Admin({email,password:hash,firstName,lastName,role})
                await admins.save()
                res.status(200).send({"msg":`${firstName} Sign Up Successfull`})
            })
        }
    }
    }catch(err){
        console.log(err)
    }
}

// ........................... Admin Login Method ...............................

export const adminLogin = async(req,res)=>{
    try{
        const {email,password}= req.body
        console.log(req.body)
        let admin = await Admin.findOne({email:email})
        if(admin){
            const hashed_password = admin.password
            bcrypt.compare(password,hashed_password,function(err,result){
                if(result){
                    const token = jwt.sign({"adminID":admin._id},'ravi')
                    res.status(200).send({"admin":admin,"token":token})
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

// ........................... Admin Profile Get Method ...............................

export const adminProfile=async(req,res)=>{
    try{
        const {id}=req.params
        const admin = await Admin.findById(id)
        res.status(200).json(admin)
    }catch(err){
        console.log(err)
    }
}

// ........................... Admin Profile Edit Method ...............................

export const adminProfileEdit=async(req,res)=>{
    try {
        const { id } = req.params;
        const {firstName,lastName,image,phone}=req.body
        const newAdmin = await Admin.findByIdAndUpdate({ _id: id }, {
            firstName:firstName,
            lastName:lastName,
            userPicturePath:image,
            phone:phone
        })
        console.log(newAdmin)
        res.status(200).json(newAdmin)
    } catch (err) {
        console.log(err)
    }
}


// ........................... All User Get Method Admin ...............................

export const AllUser = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send(users)
    }catch(err){
        console.log(err)
    }
}

// ........................... All Admins ...............................

export const AllAdmin = async(req,res)=>{
    try{
        const admins = await Admin.find()
        res.status(200).send(admins)
    }catch(err){
        console.log(err)
    }
}
