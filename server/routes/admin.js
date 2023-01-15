import express from "express"
import {adminLogin, adminSign, AllAdmin, AllUser} from "../Controllers/admin.js"
import {Adminauthenticate} from "../middelwares/Adminauthenticate.js"


const router = express.Router()

router.post("/signup",adminSign)

router.post("/login",adminLogin)

router.get("/users",AllUser)

router.get("/admins",AllAdmin)


export default router