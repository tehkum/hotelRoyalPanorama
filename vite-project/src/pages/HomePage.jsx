import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage(){
    return(<div className="App">
    <Header />
    <img
      src="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
      alt="royal panorama Jodhpur"
      width="100%"
      height="400vh"
    />
    <div style={{ color: "black", width:"50%", margin:"auto" }}>
      <p>
        Welcome to Hotel Royal Panorama, a luxurious hotel located in the
        heart of Jodhpur. Our hotel offers a unique blend of traditional
        Rajasthani hospitality and modern amenities that will make your stay
        unforgettable.
      </p>
      <p>
        Our rooms are spacious and elegantly designed with beautiful views of
        the city. Each room is equipped with air conditioning, flat-screen
        TVs, and free Wi-Fi. We also offer 24-hour room service to ensure that
        your stay is as comfortable as possible.
      </p>
      <p>
        Our restaurant serves delicious Indian and international cuisine that
        will tantalize your taste buds. We use only the freshest ingredients
        to create our dishes, and our chefs are experts at creating culinary
        masterpieces that will leave you wanting more.
      </p>
      <p>
        If you're looking for a place to relax and unwind, our rooftop pool is
        the perfect spot. Take a dip in the pool while enjoying stunning views
        of the city. We also have a fitness center where you can work out and
        stay in shape during your stay. At Hotel Royal Panorama, we pride
        ourselves on providing exceptional service to our guests.
      </p>
      <p>
        Our staff is friendly and knowledgeable, and we're always here to help
        you with anything you need. We offer a range of room types to suit
        your needs, including deluxe rooms, executive rooms, and suites.
      </p>
      <p>
        {" "}
        Our prices start at INR 3,500 per night for a deluxe room and go up to
        INR 7,500 per night for a suite. Some nearby tourist attractions
        include Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace Museum,
        and Mandore Gardens. To book a room at Hotel Royal Panorama, you can
        visit our website or call us at +91-291-263-6456. Book your stay at
        Hotel Royal Panorama today and experience the best that Jodhpur has to
        offer!
      </p>
    </div>

    <Footer />
  </div>);
}