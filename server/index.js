import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import multer from "multer"
import express from "express"
import mongoose from "mongoose"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import adminRoutes from './routes/admin.js'
import {register} from "./Controllers/auth.js"
import {createPost} from "./Controllers/posts.js"
import { verifyToken } from "./middelwares/auth.js"
import { updateProfile } from "./Controllers/users.js"
// const { Server } = require("socket.io");
// import { Server } from "socket.io"
// const io = new Server(Server);
// import http
// const http = require('http');
// const server = http.createServer(app);

    //  configuration

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use("/assets",express.static(path.join(__dirname,'public/assets')))


    // storing system

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})

// Routes 

app.post("/auth/register",upload.single("picture"),register)
app.patch("/users/editprofile/:id",upload.single("images"),updateProfile)
app.post("/posts/create",verifyToken,upload.single("image"),createPost)
app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
app.use("/admin",adminRoutes)


// Socket connection here





// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });

        // Database connection

const PORT = process.env.PORT || 3001
let connections = mongoose.connect(process.env.MONGO_URL)

app.listen(PORT,async()=>{
    try{
        await connections
        console.log("Server Connected With DataBase")
    }
    catch(err){
    console.log("Somethning Wents Wrong",err)
    }
    })

  

