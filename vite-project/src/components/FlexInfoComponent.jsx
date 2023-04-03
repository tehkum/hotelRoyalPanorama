import "./FlexInfoComponent.css";

export default function FlexInfoComponent({heading, content, imageSource, extraInformation}){
    return<>
    <h1 style={{color:"black", textAlign:"center"}}>{heading}</h1>
    <h3 style={{textAlign:"center"}}>{extraInformation}</h3>
    <div className="flex-info-container">
        <p>{content}</p>
        <img src={imageSource} alt="hotel royal panorama"></img>
    </div>
    </>
}