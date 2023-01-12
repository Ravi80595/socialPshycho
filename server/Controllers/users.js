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
        console.log(friendId, id)
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