import {useContext} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.js";
const Navbar = () => {
    const {user} =useContext(AuthContext);
    console.log(user);
    return (
        <div className="Navbar">
            <div className="NabarContainer">
                <Link to="/" style={{color:"white",textDecoration:"none"}}>
                <span className="logo">Hotel Service</span>
                </Link>
                {user? user.username :(<div className="navItms">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>)}
            </div>
        </div>
    );
}

export default Navbar;