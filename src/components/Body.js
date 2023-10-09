import RestaurantCard from './RestaurantCard'
import resList from '../utils/mock'
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
//local state variable
let [ListOfRes, setListOfRes] = useState([])
const [FinalFilList, setFinalFilList]= useState([])
const [searchText, setsearchText]=useState("")

    
useEffect(()=>{
    fetchData()
}, []);

const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    //console.log(json)
    setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFinalFilList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const onlineStatus = useOnlineStatus()
if(onlineStatus === false){
    return (
        <h1>Looks your internet is down</h1>
    )
}
if(ListOfRes.length===0){
    return <Shimmer/>
}
    return (
        <div className="body">
            <div className="filter">
                <input type='text' className='search-box' value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}></input>
                <button 
                onClick={()=>{
                
                console.log(searchText);

                const filteredRest = ListOfRes.filter((result)=>
                   result.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFinalFilList(filteredRest)
                //console.log(filteredRest)
                }}
                >
                    Search</button>
                <button type='button' className='filter-btn' onClick={()=>{
                const filterList = ListOfRes.filter((res) => res.info.avgRating > 4.4)
                setListOfRes(filterList)
            }}>Top Rated </button></div>
            <div className="res-container">
                {
                   FinalFilList.map((restaurant)=> (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className='res-card'><RestaurantCard resData={restaurant}/></Link>)
                    )}
            </div>
        </div>

    )
}

export default Body