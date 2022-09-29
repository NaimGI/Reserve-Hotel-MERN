import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featerea from "../../components/Featares/featuares"
import Plist from "../../components/ProprioteList/pList"
import PropFeatured from "../../components/PropFeatured/PropFeatured";
import Mail from "../../components/Mail/Mail";
import "./home.css";
import Footer from "../../components/Footer/Footer"
const Home = () => {
    return (
        <div className="Home">
           <Navbar/>
           <Header/>
         <div className="homeContainer">
            <Featerea/>
            <div className="titleFeatured">
                Title of featureas
            </div>
            <Plist/>
            <div className="titleFeatured">
                Home guest love
            </div>
            <PropFeatured/>
            <Mail/>
            <Footer/>
            </div>
          
        </div>
    );
}

export default Home;
