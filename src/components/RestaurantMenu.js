import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () =>{
    const [ResInfo, setResInfo] = useState(null)
    const {resID} = useParams()
    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970882&lng=77.500366&restaurantId=" + resID)
        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }
 if(ResInfo === null ) return <Shimmer/>
    const{name, cuisines, costForTwoMessage} = ResInfo?.cards[0]?.card?.card?.info
    const {itemCards} = ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
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