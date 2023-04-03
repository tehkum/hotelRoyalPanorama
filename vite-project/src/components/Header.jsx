import "./Header.css";
import { Link } from "react-router-dom";
import {useState} from "react";


function Header(){
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenuHandler = () => {
    setHamburger(hamburger=> !hamburger);
  }

    return(
        <div className="App-header">
        <h2>Hotel Royal Panorama</h2>
        <button 
        onClick={hamburgerMenuHandler}
        >HH</button>
        <div style={{display: hamburger ? "inline-block" : "none"}} className="hamburgerClips">
        <ul>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/">Home</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/about">About us</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/Gallery">Gallery</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/Reservations">Tariffs and Reservation</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/Facility">Facilities</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/Blogs">Blogs</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/Restaurant">Restaurant</Link></li>
            <li><Link style={{color:"white", textDecoration: 'none'}} to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
        <span className="Header-bullets">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Reservations">Tariffs and Reservation</Link></li>
            <li><Link to="/Facility">Facilities</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Restaurant">Restaurant</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </span>
      </div>
    );
}

export default Header;
