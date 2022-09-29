import User from "../Model/user.js";
export const createUser =async(req,res,next)=>{
    const UserlSh=new User(req.body);
    try{
        const newUser=await UserlSh.save();
       res.status(200).json(newUser);
    }catch(err){
        res.status(500).json(err);
    }
}
export const deleteUser =async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has Been Deleted");
     }catch(err){
         next(err);
     } 
}
export const getByIdOfUser =async(req,res,next)=>{
    try{
        const GetUser=await User.findById(req.params.id);
        res.status(200).json(GetUser);
    }catch(err){
        next(err);
    }
}
export const UpdatedUser =async(req,res,next)=>{
    try{
        console.log("IM here",req.params.id);
        const UpdateUserOf =await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateUserOf);
    }catch(err){
        res.status(500).json(err);
    }
}
export const getAllUser=async(req,res,next)=>{
    const failed=true;
    if (failed) return next(createErrors(401,"The auth is required"));
    try{
     const AllTheDataUser=await User.find();
     res.status(200).json(AllTheDataUser);
    }catch(err){
        next(err);
    }
}