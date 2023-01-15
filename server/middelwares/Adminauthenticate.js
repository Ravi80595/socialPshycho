import jwt from "jsonwebtoken";

export const Adminauthenticate=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,'ravi')
        if(decoded){
            const adminID = decoded.adminID
            req.body.adminID= adminID
            next()
        }else{
            res.send("Please Login")
        }
    }
    else{
        res.send("Please Login")
    }
}