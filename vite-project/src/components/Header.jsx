import "./Header.css";
import { Link } from "react-router-dom";
import {useState} from "react";


function Header(){
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenuHandler = () => {
    setHamburger(hamburger=> !hamburger);
  }

    return(<>
        <div className="App-header">
        <h2>Hotel Royal Panorama</h2>
        <button className="hamburger-button"
        onClick={hamburgerMenuHandler}
        >{!hamburger ? <i class="fa-solid fa-bars  fa-xl"></i> : <i class="fa-solid fa-x fa-xl"></i>}</button>
        
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
        {/* <div classname="hamburger-menu">
        eoihisocho
      </div> */}
      </div>
      <div style={{display: hamburger ? "block" : "none", width: "100%",  backgroundColor: "#5a5a5a", borderBottom: "2px solid black"}} className="hamburgerClips">
        <ul style={{margin: "0", listStyle: "none", paddingLeft: "0"}}>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/"><li>Home</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/about"><li>About us</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/Gallery"><li>Gallery</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/Reservations"><li>Tariffs and Reservation</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/Facility"><li>Facilities</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/Blogs"><li>Blogs</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/Restaurant"><li>Restaurant</li></Link><hr/>
            <Link style={{color:"white", textDecoration: 'none', padding:"10px 20px", display: "block"}} to="/ContactUs"><li>Contact Us</li></Link>
          </ul>
        </div>
      </>);
}

export default Header;
