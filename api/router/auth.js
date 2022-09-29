import express from "express";
import {RegisterUser,Login} from "../controller/auth.js";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("hello from authontification");
})
router.post("/register",RegisterUser);
router.post("/login",Login);

export default router

