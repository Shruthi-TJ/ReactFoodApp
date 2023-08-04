import {CDN_URL} from "../utils/contants"

const ResturantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating } = resData?.info
    return (
        <div className="res-card">
            <img className="rest-img" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
        </div>

    )
}

export default ResturantCard;