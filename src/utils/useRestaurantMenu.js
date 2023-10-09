import { useEffect, useState } from "react"

const useRestaurantMenu = (resID)=>{

    const [resInfo, setResInfo] = useState(null)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970882&lng=77.500366&restaurantId=" + resID)
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo
}
export default useRestaurantMenu