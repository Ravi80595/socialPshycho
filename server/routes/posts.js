import express from "express"
import { getFeedPosts,getLikedUser,getSinglePost,getUserPosts,likePost} from "../Controllers/posts.js"
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

export default router;