import express from "express"
import {getUser,getUserFriends,addRemoveFriend, searchUser} from "../Controllers/users.js"
import {verifyToken} from "../middelwares/auth.js"


const router = express.Router()

router.get("/search/:id",searchUser)
router.get("/:id",verifyToken,getUser)
router.get("/:id/friends",verifyToken,getUserFriends)
router.get("/:id/:friendId",verifyToken,addRemoveFriend)

export default router;