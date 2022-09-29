import {useState,useContext} from 'react';
import useFetch from "../../Hook/useFetch.js";
import {SearchContext} from "../../context/SearchContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Reserv.css"
const Reserv = ({setModule,hotelId}) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
   
    const { data, loading, error } = useFetch(`/hotel/room/${hotelId}`);
    console.log(data);
    console.log(hotelId);
    const { date} = useContext(SearchContext);
    const getRangeDate=(StartDate,endDate)=>{
      const start =new Date(StartDate);
      const end=new Date(endDate);
      const days=new Date(start.getTime());
      const date=[];
      while(days <=end){
        date.push(new Date(days).getTime());
        days.setDate(days.getDate()+1);
      }
    }
    const AllDays=getRangeDate(date[0].startDate,date[0].endDate);
   console.log(AllDays);
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
          checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
        );
      };
     
    return (
        <div className="reserve">

            <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setModule(false)}
          
        />
    <span>Select you room :</span>
    {data.map((item)=>(
        <div className="rItem" key={item._id}>
            <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">Max people : {item.maxPeople}</div>
                <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumber.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                  />
                </div>
              ))}
             </div> 
        </div>
        
    ))}
            </div>
            
        </div>
    );
}

export default Reserv;
