import "./propFeatured.css"
import {useState}  from "react";
import useFetch from "../../Hook/useFetch.js";
const PropFeatured = () => {
    const {loading,error,data}=useFetch("/hotel?featured=true&min=20&max=30");
    console.log(data);
    return (
        <div className="PropFeatured">
           { loading ? "Loading plz wait ":<>
           {data.map((item)=>(
            <div className="propItem" key={item._id}>
                <img src="https://i.pinimg.com/564x/e9/29/1c/e9291cc39e820cd4afc6e58618dfc9e0.jpg" alt="" />
                <span className="NameProp">{item.name}</span>
                <span className="CityProp">{item.city}</span>
                <span className="PriceProp">{item.cheapsetprice} $</span>
               {item.rating &&<div className="RatingProp">
             <button className="propBtn">item.rating</button>
                  <span>Excellent</span>
                </div>}
            </div>
           ))}
            </>} 
            
        </div>
    );
}

export default PropFeatured;
