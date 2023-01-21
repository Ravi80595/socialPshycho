import express from "express"
import {adminLogin, adminProfile, adminSign, AllAdmin, AllUser} from "../Controllers/admin.js"
import { getFeedPosts } from "../Controllers/posts.js"
import {Adminauthenticate} from "../middelwares/Adminauthenticate.js"


const router = express.Router()

router.post("/signup",adminSign)

router.post("/login",adminLogin)

router.get("/profile/:id",adminProfile)

router.get("/users",AllUser)

router.get("/admins",AllAdmin)

router.get("/posts",getFeedPosts)


export default router