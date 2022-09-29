import express from "express";
import {CreateRoom,deleteRoom,UpdatedRoom,getByIdOfRoom,getAllRooms,AvailableRoom} from "../controller/room.js";
import {verifAdmin} from "../util/verfiytoken.js";
const router=express.Router();

router.post("/:id",CreateRoom);
//Update
router.put("/:id",verifAdmin,UpdatedRoom);
// Deleted
router.delete("/:id/:hotelid",deleteRoom);
router.put("/Available/:id",AvailableRoom)
// Get by Id
router.get("/:id",getByIdOfRoom);
// Get All the data of hotel 
router.get("/",getAllRooms);

export default router