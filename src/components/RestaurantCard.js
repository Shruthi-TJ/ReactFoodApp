import {CDN_URL} from "../utils/constants"
import { useState, useContext } from "react"
import UserContext from "../utils/UserContext"

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="m-2 p-4 w-[230px] flex bg-white flex-wrap rounded justify-items-stretch">
            <img className="rounded w-48" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold my-3">{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p><b>{costForTwo}</b></p>
            <p><b>{loggedInUser}</b></p>
        </div>

    )
}

export default RestaurantCard;