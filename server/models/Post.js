import mongoose from "mongoose";
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";


const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()

const postSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true
        },
        location:String,
        description:String,
        picturePath:String,
        userPicturePath:String,
        likes:{type:Array,default:[]},
        like:{type:Array,default:[]},
        comments:{
            type:Array,
            default:[]
        },
        date:{type:String,default:currentDate},
        time:{type:String,default:currentTime}
    },{
        timestamps:true
    }
)

const Post = mongoose.model("Post",postSchema)

export default Post;