import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
    return (
        <div>
            <img className="rest-img" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p><b>{costForTwo}</b></p>
        </div>

    )
}

export default RestaurantCard;