import "../App.css";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div className="App-header">
        <h2>Hotel Royal Panorama</h2>
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
