import "./FlexInfoComponent.css";

export default function FlexInfoComponent({heading, content, imageSource, extraInformation}){
    return<div className="content-wrapper">
    <h1 style={{color:"black", textAlign:"center", textSize: "36px" , color: "#333333"}}>{heading}</h1>
    <h3 style={{textAlign:"center"}}>{extraInformation}</h3>
    <div className="flex-info-container">
        <p style={{textSize: "16px" , color: "#666666", lineHeight: "1.5"}}>{content}</p>
        <img src={imageSource} alt="hotel royal panorama"></img>
    </div>
    </div>
}