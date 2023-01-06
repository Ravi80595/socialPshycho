import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import User from "../models/User.js"

export const register = async (req,res)=>{
    try{
        const {firstName,lastName,email,password,picturePath,friends,location,occupation} = req.body;
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,occupation,
            viewedProfile:Math.floor(Math.random()*1000),
            impressions:Math.floor(Math.random()*10000),
        })
        const saveUser = await newUser.save()
        res.status(201).send({"msg":"User Saved Successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
}

// login

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        // console.log(email,password)
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User not exist"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"wrong details"})

        const token= jwt.sign({id:user._id},process.env.JWT_KEY)
        delete user.password;
        res.status(200).json({token,user})

    }catch(err){
        console.log(err)
    }
}

