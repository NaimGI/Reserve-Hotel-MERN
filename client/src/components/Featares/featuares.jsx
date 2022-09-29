import React from 'react';
import "./featuares.css"
import useFetch from "../../Hook/useFetch.js";
const Featuares = () => {
    const {data,error,loading}=useFetch("/hotel/countCity?city=Paris,berline,Manzel temim");
    console.log(data);
    return (
        <div className="featureas">
           { loading ? ("Loading Pleaze wait ") : ( <> <div className="featuresItem">
            
                <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" className="featureasImg" />
                <div className="featuredTitle">
                <h1>Paris</h1>
                <h2>{data[0]}: propriete</h2>
                </div>
                <div/>
            </div>
            <div className="featuresItem">
                <img src="https://i.pinimg.com/564x/e9/29/1c/e9291cc39e820cd4afc6e58618dfc9e0.jpg" alt="" className="featureasImg" />
                <div className="featuredTitle">
                <h1>berline</h1>
                <h2>{data[1]}:propriete</h2>
                </div>
            </div>
            <div className="featuresItem">
         
                <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" className="featureasImg" />
                <div className="featuredTitle">
                <h1>Manzel temin</h1>
                <h2>{data[2]} : propriete</h2>
                </div>
            </div></>)}
            
        </div>
    );
}

export default Featuares;
