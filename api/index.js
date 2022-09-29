import express from "express";
const app=express();
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./router/auth.js"
import hotelRouter from "./router/hotel.js";
import usersRouter from "./router/users.js";
import roomRouter from "./router/rooms.js";
import cookieParser from "cookie-parser";
dotenv.config();
const connect =async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo db");
       }catch(error){
       throw error;
       
       }
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoBd disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDb connected");
})
// midellWare
app.use(cookieParser());
app.use(express.json());
app.use("/api/user",usersRouter);
app.use("/api/auth",authRouter);
app.use("/api/hotel",hotelRouter);
app.use("/api/room",roomRouter);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errormesssage=err.message || "Something went wrong";
   return  res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errormesssage,
    stack:err.stack
   });
})
app.listen(8800,()=>{
    connect();
    console.log("connected to backend");
})