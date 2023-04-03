import "../App.css";
import FlexCards from "../components/FlexCards";
import { contentForFrontPageOne, imageLinkOne } from "../../database/Data";
import FlexInfoComponent from "../components/FlexInfoComponent";

export default function HomePage() {
  return (
    <div className="App">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipM9NUNHNkZ7jeo_Bg0liEhu8Z90BBVN0Z3g3v-k=w1080-h608-p-no-v0"
        alt="royal panorama Jodhpur"
        width="100%"
        height="400vh"
      />
      <FlexInfoComponent heading="About us" content={contentForFrontPageOne} imageSource={imageLinkOne}/>
      <FlexCards />
      <FlexInfoComponent heading="About us" extraInformation="This is the best hotel in whole jodhpur" content={contentForFrontPageOne} imageSource={imageLinkOne}/>

    </div>
  );
}
