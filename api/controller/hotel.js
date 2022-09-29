import Room from "../Model/room.js";
import Hotel from "../Model/Hotel.js";
export const createHotel =async(req,res,next)=>{
    const HotelSh=new Hotel(req.body);
    try{
        const newHotel=await HotelSh.save();
       res.status(200).json(newHotel);
    }catch(err){
        res.status(500).json(err);
    }
}
export const deleteHotel =async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has Been Deleted");
     }catch(err){
         next(err);
     } 
}
export const getByIdOfHotel =async(req,res,next)=>{
    try{
        const GetHotel=await Hotel.findById(req.params.id);
        res.status(200).json(GetHotel);
    }catch(err){
        next(err);
    }
}
export const UpdatedHotel =async(req,res,next)=>{
    try{
        console.log("Hi Am In UpdatedHotel !");
        console.log(req.params.id);
        const UpdateHotel =await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateHotel);
    }catch(err){
        res.status(500).json(err);
    }
}
export const getAllHotel=async(req,res,next)=>{
const {min,max,...others}=req.query;
console.log(min);
console.log(max);
    try{
     const AllTheDataHotel=await Hotel.find({
        ...others,
        cheapsetprice:{$gt:min  ,$lt:max }
     }).limit(req.query.limit);
     res.status(200).json(AllTheDataHotel);
    }catch(err){
        next(err);
    }
}
export const countCity=async(req,res,next)=>{
   const cities=req.query.city.split(",");
   console.log(cities);
    try{
   const list =await Promise.all(cities.map((city)=>{
    return Hotel.countDocuments({city:city})
   }));
   res.status(200).json(list);
    }catch(err){
        next(err);
    }
}
export const countByType =async(req,res,next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    
        res.status(200).json([
          { type: "hotel", count: hotelCount },
          { type: "apartments", count: apartmentCount },
          { type: "resorts", count: resortCount },
          { type: "villas", count: villaCount },
          { type: "cabins", count: cabinCount },
        ]);
      } catch (err) {
        next(err);
      }
 }
 export const GetHotelRoom =async(req,res,next)=>{
   
    try{
        const hotel=await Hotel.findById(req.params.id);
        const hotelRoom=await Promise.all(hotel.rooms.map((room)=>{
            return Room.findById(room);
        }));
        res.status(200).json(hotelRoom);

    }catch(err){
        next(err);
    }

 }