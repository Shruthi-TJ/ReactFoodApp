import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"
import  useRestaurantMenu  from "../utils/useRestaurantMenu"

const RestaurantMenu = () =>{
    const {resID} = useParams()
    const resInfo = useRestaurantMenu(resID)
   
  
 if(resInfo === null ) return <Shimmer/>
    const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <b>{costForTwoMessage}</b>
            
            <ul>
                {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>)}
               
            </ul>
        </div>
    )
}

export default RestaurantMenu