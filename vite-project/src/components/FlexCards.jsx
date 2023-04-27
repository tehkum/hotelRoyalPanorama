import RoomCard from "./Card";
import "./FlexCard.css";

export default function FlexCards() {
  return (<div className="cardManager">
  <h1 className="flex-header">Our Rooms</h1>
    <div className="card-container">
      <RoomCard
        image="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        imageAlt="Room1"
        roomType="Delux"
      />

      <RoomCard
        image="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        imageAlt="Room1"
        roomType="Delux"
      />

      <RoomCard
        image="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        imageAlt="Room1"
        roomType="Delux"
      />

    </div>
  </div>);
}
