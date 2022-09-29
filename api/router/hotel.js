import express from "express";
import Hotel from "../Model/Hotel.js";
import {createErrors} from "../util/Errors.js";
import {createHotel,deleteHotel,getByIdOfHotel,UpdatedHotel,getAllHotel,countCity,countByType,GetHotelRoom} from "../controller/hotel.js";
import {verifAdmin } from "../util/verfiytoken.js";
const router=express.Router();
router.post("/",verifAdmin,createHotel);
//Update
router.put("/:id",verifAdmin,UpdatedHotel);
// Deleted
router.delete("/:id",verifAdmin,deleteHotel);
// Get by Id
router.get("/find/:id",getByIdOfHotel);
// Get All the data of hotel 
router.get("/",getAllHotel)
// query of City Count
router.get("/countCity",countCity);
router.get("/countByType",countByType);
router.get("/room/:id",GetHotelRoom);


export default router