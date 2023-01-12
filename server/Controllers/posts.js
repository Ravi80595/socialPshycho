import Post from "../models/Post.js"
import User from "../models/User.js"


// Post create Method

export const createPost = async(req,res)=>{
    try{
        const {userId,description,location}= req.body
        const picturePath=req.file.originalname
        console.log(picturePath)
        const user = await User.findById(userId)
        const newPost = new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location,
            description,
            userPicturePath:user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })
        await newPost.save()
        
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}

// Get All Feeds Method


export const getFeedPosts = async(req,res)=>{
    try{
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}

// Get particular user posts

export const getUserPosts = async(req,res)=>{
    try{
        const {userId}=req.params
        const post = await Post.find({userId})
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}


// get single post

export const getSinglePost = async(req,res)=>{
    try{
        const {id}=req.params
        const post = await Post.findById(id)
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}
// Liked posts

export const likePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const {userId}=req.body;
        const post = await Post.findById(id)
        const isLiked = post.likes.get(userId)

        if(isLiked){
            post.likes.delete(userId)
        }else{
            post.likes.set(userId,true)
        }
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes:post.likes},
            {new:true}
        )
        res.status(200).json(updatedPost)
    }
    catch(err){
        console.log(err)
    }
}