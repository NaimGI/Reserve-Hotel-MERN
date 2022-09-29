
import { DateRange } from 'react-date-range';
import { useState,useContext } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {format} from "date-fns";
import {SearchContext} from "../../context/SearchContext.js";
import {faBed,faPlane,faCar,faTaxi,faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../../context/AuthContext.js";
const Header = ({type}) => {
    const {user} =useContext(AuthContext);
    const navigate =useNavigate();
    const [destination,setDestination]=useState("");
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [hide,setHide]=useState(false);
      const [show,setShow]=useState(false);
      const [option,setOption]=useState({
        adult:1,
        children:0,
        room:0
      })
     
      const handleOption=(name,operation)=>{
        setOption((prev)=>{
        return{
            ...prev,[name] : operation==="i" ?option[name]+1:option[name]-1
        }
        })

      }
      const {dispatch}=useContext(SearchContext);
      const handleNavigate=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,date,option}})
        navigate("/list",{state:{destination,date,option}});
      }
      

    return (
    <div className="Header">
        <div className={type==="list"? "HeaderContainer listShow":"HeaderContainer"}>
            <div className="headerList">
                <div className="headerItems active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerItems">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
                </div>
                <div className="headerItems">
                <FontAwesomeIcon icon={faCar} />
                <span>Cars</span>
                </div>
                <div className="headerItems">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerItems">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxi</span>
                </div>
               
            </div>
            {type !=="list" &&<><h1 className="headerTitle">A lifeTime with discount?</h1>
                <p className="hedearDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et sit quasi! Consectetur optio fugiat autem voluptatibus, odio non excepturi quisquam inventore voluptate nihil reiciendis soluta tempore tenetur, iste laudantium.</p>
                <button className="headerBtn">Register /Sign In</button>
       
            <div className="headerSearch">
                <div className="headerSearchItms">
                <FontAwesomeIcon icon={faBed} className="HeaderIcon"/>
                <input type="text" placeholder="Where are you going" className="headerInput" onChange={(e)=>setDestination(e.target.value)} />
                </div>
                <div className="headerSearchItms">
                <FontAwesomeIcon icon={faCalendarDays} className="HeaderIcon show"/>
               <span className="headerIconText" onClick={()=>setShow(!show)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}` }</span>
               {show && <DateRange editableDateInputs={true}
               onChange={item => setDate([item.selection])}
               moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
                    />}
                </div>
                <div className="headerSearchItms">
                <FontAwesomeIcon icon={faTaxi} className="HeaderIcon"/>
                <span className="headerIconText" onClick={()=>setHide(!hide)}>{`${option.adult} adult ${option.children} children ${option.room} room`}</span>  
               {hide && <div className="option">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button className="optionBtn" onClick={()=>handleOption("adult","i")}>+</button>
                        <span className="optionNumber">{option.adult}</span>
                        <button className="optionBtn" onClick={()=>handleOption("adult","d")}  disabled={option.adult <1}>-</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button className="optionBtn" onClick={()=>handleOption("children","i")}>+</button>
                        <span className="optionNumber">{option.children}</span>
                        <button className="optionBtn" onClick={()=>handleOption("children","d")}  disabled={option.children <1}>-</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">room</span>
                        <div className="optionCounter">
                        <button className="optionBtn" onClick={()=>handleOption("room","i")} >+</button>
                        <span className="optionNumber">{option.room}</span>
                        <button className="optionBtn" onClick={()=>handleOption("room","d")} disabled={option.room <1}>-</button>
                        </div>
                    </div>
                </div>}
                   </div>
                   <div className="headerSearchItms">
                <button className="HeaderbuttonItem" onClick={handleNavigate}>Search</button>
                   </div>
            </div>
            </>}
        </div>
    </div>
    );
}

export default Header;