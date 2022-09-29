import "./list.css";
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import Search from "../../components/Search/Search"
import useFetch from "../../Hook/useFetch.js";
const List = () => {
    const location = useLocation();
  
    
  const [destination, setDestination] = useState(location.state.destination);
console.log(destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  console.log(max);
  console.log(min);
  const { data, loading, error, rfetch } = useFetch(
    `/hotel?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );
  console.log(data);
  const HandleClick=()=>{
    console.log("ok");
    rfetch();
  }
    return (
        <div>
            <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e) => setMin(e.target.value)}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"  onChange={(e) => setMax(e.target.value)}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={option.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={option.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={option.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={HandleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading?("Loading Pleaze wait"):<>
            {data.map((item)=>(
          <Search item={item} key={item._id}/>
        ))}
          </>}
          </div>
        </div>
      </div>
        </div>
    );
}

export default List;