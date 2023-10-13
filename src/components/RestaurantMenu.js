import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"
import  useRestaurantMenu  from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () =>{
    const {resID} = useParams()
    const resInfo = useRestaurantMenu(resID)
    const [showIndex, setShowIndex] = useState(null)
   
   
  
 if(resInfo === null ) return <Shimmer/>
    const{name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(categories)
    return (
        <div className="text-center">

            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p>{cuisines.join(", ")}{costForTwoMessage}</p>

            {categories.map((category,index)=><RestaurantCategory key={category?.card?.title} data={category?.card?.card} 
            showItems={ index==showIndex ?true :false}
            setShowIndex = {()=>setShowIndex(index)}></RestaurantCategory>)}
            
            
            
        </div>
    )
}

export default RestaurantMenu