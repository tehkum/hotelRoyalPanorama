import "./Card.css";

export default function RoomCard({image, imageAlt, roomType}){
    return(<>
        {/* <a href={link}> */}
        <figure>
            <img src={image} alt={imageAlt} />
            <figcaption>{roomType}</figcaption>
        </figure>
        {/* </a> */}
    </>)
}