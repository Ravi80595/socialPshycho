import Post from "../models/Post.js"
import User from "../models/User.js"

// Get User Method

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}


// update profile

export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.file.originalname)
        const picturePaths = req.file.originalname
        // console.log(id,userPicturePath)
        const newUser = await User.findByIdAndUpdate({ _id: id }, {
            picturePath: picturePaths
        })
       const newPost = await Post.findByIdAndUpdate({userId:id},{
            userPicturePath:picturePaths
        })
        res.status(200).json(newUser,newPost)
    } catch (err) {
        console.log(err)
    }
}

// Update User Name and Bio

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {firstName,lastName,bio,phone}=req.body
        console.log(id,req.body)
        const newUser = await User.findByIdAndUpdate({ _id: id }, {
            firstName:firstName,
            lastName:lastName,
            bio:bio,
            phone:phone
        })
    //    const newPost = await Post.findByIdAndUpdate({userId:id},{
    //         firstName:firstName
    //     })
        // console.log(newPost)
        res.status(200).json(newUser)
    } catch (err) {
        console.log(err)
    }
}

// User Search Method

export const searchUser=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({username:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}

// Get User Friends Methods

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

// Friends add Remove method

export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id)
        const friend = await User.findById(friendId)

        if (user.friends.includes(friendId)) {
            user.friends = friend.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

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