import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import multer from "multer"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import { fileURLToPath } from "url"
import {register} from "./Controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

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
    destination:function(req,file,cb){
        cb(null,"public/assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})


app.post("auth/register",upload.single("picture"),register)


app.use("/auth",authRoutes)
app.use("/users",userRoutes)

        // Database connection

const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`server connected on ${PORT}`))
}).catch((error)=>console.log(`No connection ${error}`))
