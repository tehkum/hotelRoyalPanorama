import "../App.css";
import RoomCard from "../components/Card";

export default function HomePage() {
  return (
    <div className="App">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        alt="royal panorama Jodhpur"
        width="100%"
        height="400vh"
      />
      <RoomCard
        image="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        imageAlt="Room1"
        roomType="Delux"
      />
    </div>
  );
}
