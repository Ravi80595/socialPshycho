import express from 'express'
import {createPost, getFeedPosts,getSinglePost,getUserPosts,likePost} from "../Controllers/posts.js"
import { verifyToken } from '../middelwares/auth.js'
import multer from 'multer'
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router() 

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'Images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null, `${__dirname}Images`)
    }
})

// const uploads = multer({storage:storage})



// router.post("/create",verifyToken,uploads.single('image'),createPost)


// Get All Posts

router.get("/",verifyToken,getFeedPosts)

//Single User posts

router.get("/:userId/posts",verifyToken,getUserPosts)

// get single post

router.get("/singlepost/:id",verifyToken,getSinglePost)

// For likes posts

router.patch("/:id/like",verifyToken,likePost)

export default router;