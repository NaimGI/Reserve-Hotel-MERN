import express from "express";
import {createUser,UpdatedUser,deleteUser,getByIdOfUser,getAllUser,} from "../controller/user.js"
import {verifToken,verifUser,verifAdmin} from "../util/verfiytoken.js";
const router=express.Router();

router.get("/CheckuserAuthenticated",verifToken,(req,res,next)=>{
    res.send("This user is authenticated ");
});
router.get("/CheckLogin/:id",verifUser,(req,res,next)=>{
    res.send("your are log in And you can deleted your account !")
})
router.get("/CheckAdmin/:id",verifAdmin,(req,res,next)=>{
res.send("Your are log in as admin");
})
router.post("/",verifAdmin,createUser);
//Update
router.put("/:id",verifAdmin,UpdatedUser);
// Deleted
router.delete("/:id",verifAdmin,deleteUser);
// Get by Id
router.get("/:id",getByIdOfUser);
// Get All the data of hotel 
router.get("/",getAllUser)
export default router