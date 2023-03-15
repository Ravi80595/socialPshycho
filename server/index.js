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
import http from 'http'
import { Server } from 'socket.io';



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
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})
 

app.post("/auth/register",upload.single("picture"),register)
app.patch("/users/editprofile/:id",upload.single("images"),updateProfile)
app.post("/posts/create",verifyToken,upload.single("image"),createPost)
app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
app.use("/admin",adminRoutes)



io.on('connection', (socket) => {
    socket.on('message', (data) => {
      io.emit('message', data);
    });
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
});
  



const PORT = process.env.PORT || 3001
// mongoose.set("strictQuery", false);
let connections = mongoose.connect(process.env.MONGO_URL)

server.listen(PORT,()=>{
    try{
        connections
        console.log(`Server Connected With DataBase ${PORT}`)
    }
    catch(err){
    console.log("Somethning Wents Wrong",err)
    }
})

  

