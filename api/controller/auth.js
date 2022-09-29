import User from "../Model/user.js";
import bcrypt from "bcrypt";
import {createErrors} from "../util/Errors.js"
import jwt from "jsonwebtoken";
export const RegisterUser =async(req,res,next)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        console.log(salt)
        const hash=bcrypt.hashSync(req.body.password,salt);
        console.log(hash);
     const UserHo=new User({
    username:req.body.username,
    email:req.body.email,
    password:hash
     });
       await UserHo.save();
     
res.status(200).send("User Has been created");
    }catch(err){
        next(err);
    }

}
export  const Login=async(req,res,next)=>{
    try{
const user=await User.findOne({
    username:req.body.username,
})
if(!user) return next(createErrors(404,"This User is not define"))
const isPasswordCorrect=await bcrypt.compare(
    req.body.password,
    user.password
)
if(!isPasswordCorrect)return next(createErrors(404,"Password incorrect !"));
const {password,isAdmin,...otherDetails}=user._doc
const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);
console.log(token);
res.cookie("access_token",token,{httpOnly:true}).status(200).json({details:{...otherDetails},isAdmin});
    }catch(err){
        next(err);
    }
}