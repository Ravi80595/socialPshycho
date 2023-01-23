import Post from "../models/Post.js"
import User from "../models/User.js"


// ........................... Post Create Method ...............................

export const createPost = async(req,res)=>{
    try{
        const {userId,description,location,image,picturePath}= req.body
        const user = await User.findById(userId)
        console.log(user)
        const newPost = new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location,
            description,
            userPicturePath:user.picturePath,
            username:user.username,
            picturePath,
            likes:[],
            comments:[]
        })
        console.log(newPost)
        await newPost.save()
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}

// ........................... All Feeds Method ...............................

export const getFeedPosts = async(req,res)=>{
    try{
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}

// ........................... Single User all posts ...............................

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

// ........................... Single Post Get Method ...............................

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

// ........................... Post Like Method ...............................

export const likePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const {userId}=req.body;
        const post = await Post.findById(id)

        if(post.like.includes(userId)){
            post.like=post.like.filter((id)=>id!==userId)
        }else{
            post.like.push(userId)
        }
        await post.save()
        const posts = await Post.find()
        res.status(200).json(posts)
    }
    catch(err){
        console.log(err)
    }
}

// ........................... Post Liked users...............................

export const getLikedUser=async(req,res)=>{
    try{
        const {id}=req.params
        const post = await Post.findById(id)
        const like = await Promise.all(
            post.like.map((id)=>User.findById(id))
        )
        const formatedUsers = like.map(
            ({_id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath }
            }
        )
        res.status(200).json(formatedUsers)
    }
    catch(err){
        console.log(err)
    }
}

// ........................... Friend List Get Method ...............................

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )
        const formatedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath }
            }
        );
        res.status(200).json(formatedFriends)
    }
    catch (err) {
        console.log(err)
    }
}

// ........................... Add Comment method ...............................

export const addComment=async(req,res)=>{
    let userid=req.user.id
    const user =await User.findById(userid)
    const comment={
        text:req.body.text,
        postedBy:user.username,
        postedid:req.user.id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    // .populate("comments.postedBy","_id username")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
}

// ........................... Post Delete Method ...............................

export const postDelete=async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
        await Post.findByIdAndDelete({_id:id})
        res.status(200).json({"msg":"Post delete Success"})
    }catch(err){
        console.log(err)
    }
}