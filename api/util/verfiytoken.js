import jwt from "jsonwebtoken";
import {createErrors} from  "./Errors.js"

export const verifToken=(req,res,next)=>{
    const token =req.cookies.access_token;
    console.log(token);
    if(!token){return next(createErrors(401,"You are not authenticated !"));}
jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err) return next(createErrors(401,"this token is invalid"));
    req.user=user;
    console.log("user is verfiy:",req.user.id);
    next();
})
}
export const verifUser=(req,res,next)=>{
    verifToken(req,res,next,()=>{
        console.log(req.user.id);
        console.log(req.params.id);
        if(req.user.id===req.params.id || req.user.isAdmin){
            console.log("Hello you there !");
            next()
        }else{
            return next(createErrors(403,"This user is not authenticated !"));
        }
    })
}
export const verifAdmin=(req,res,next)=>{
    verifToken(req,res,next,()=>{
        console.log(req.user.isAdmin);
if(req.user.isAdmin){
    next()
}else{
    return next(createErrors(403,"This not a admin"));
}
    });
}
