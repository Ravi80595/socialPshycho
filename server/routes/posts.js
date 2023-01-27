import express from "express"
import { addComment, getFeedPosts,getLikedUser,getSinglePost,getUserPosts,likePost, postDelete, searchPost} from "../Controllers/posts.js"
import { verifyToken } from '../middelwares/auth.js'
const router = express.Router()

// Get All Posts

router.get("/",verifyToken,getFeedPosts)

//Single User posts

router.get("/:userId/posts",verifyToken,getUserPosts)

// get single post

router.get("/singlepost/:id",verifyToken,getSinglePost)

// For likes posts

router.patch("/:id/like",verifyToken,likePost)

// liked users

router.get("/likes/:id",getLikedUser)
router.get("/search/:id",searchPost)
router.put("/comment",verifyToken,addComment)

router.delete("/delete/:id",verifyToken,postDelete)

export default router;