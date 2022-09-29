import Rome from "../Model/room.js"
import Hotel from "../Model/Hotel.js"

export const CreateRoom=async(req,res,next)=>{
    const HotelId=req.params.id;
    console.log(HotelId);
    const newRoom =new Rome(req.body);
    try{
const savedRoom= await newRoom.save();
try{  
    await Hotel.findByIdAndUpdate(HotelId,{$push:{rooms:savedRoom._id}});
}catch(err){
    next(err);
}
res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}
export const deleteRoom =async(req,res,next)=>{
    const HotelId=req.params.hotelid;
    try{
           await Rome.findByIdAndDelete(req.params.id);
        try{
           await Hotel.findByIdAndDelete(HotelId,{$pull:{rooms:req.params.id}});
        }catch(err){
            next(err);
        }
        res.status(200).json("room Has Been Deleted");
     }catch(err){
         next(err);
     } 
}
export const getByIdOfRoom =async(req,res,next)=>{
    try{
        const GetRoom=await Rome.findById(req.params.id);
        res.status(200).json(GetRoom);
    }catch(err){
        next(err);
    }
}
export const UpdatedRoom =async(req,res,next)=>{
    try{
        console.log("Hi Am In UpdatedRoom !");
        console.log(req.params.id);
        const UpdateRoom =await Rome.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateRoom);
    }catch(err){
        res.status(500).json(err);
    }
}
export const AvailableRoom =async(req,res,next)=>{
    try{
        await Rome.updateOne({"roomNumber._id":req.params.id},{$push:{"roomNumber.$.unavailableDates":req.body.date}});
        res.status(200).json("room has ben updated");

    }catch(err){
        next(err);
    }
}
export const getAllRooms=async(req,res,next)=>{
  
    try{
     const AllTheDataRoom=await Rome.find();
     res.status(200).json(AllTheDataRoom);
    }catch(err){
        next(err);
    }
}