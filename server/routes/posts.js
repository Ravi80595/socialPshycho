import express from 'express'
import {getFeedPosts,getUserPosts,likePost} from "../Controllers/posts.js"
import { verifyToken } from '../middelwares/auth.js'


const router = express.Router() 

// Get All Posts

router.get("/",verifyToken,getFeedPosts)

//Single User posts

router.get("/:userId/posts",verifyToken,getUserPosts)

// For likes posts

router.patch("/:id/like",verifyToken,likePost)

export default router;