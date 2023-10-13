import RestaurantCard from './RestaurantCard'
import resList from '../utils/mock'
import {useEffect, useState, useContext} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
//local state variable
let [ListOfRes, setListOfRes] = useState([])
const [FinalFilList, setFinalFilList]= useState([])
const [searchText, setsearchText]=useState("")
const {loggedInUser, setUserName} = useContext(UserContext)

    
useEffect(()=>{
    fetchData()
}, []);

const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(ListOfRes)
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
        <div className=" bg-gray-100 py-10">
        <div className="w-8/12 mx-auto">
            <div className="filter flex items-center justify-center my-4 py-4 rounded bg-neutral-300">
                <input type='text' className='border-black m-4 border border-solid' value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}></input>
                <button  className='px-4 py-2 m-2 bg-green-100 rounded-lg'
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
                <button type='button' className='px-4 py-2 m-2 bg-gray-100 rounded-lg' onClick={()=>{
                const filterList = ListOfRes.filter((res) => res.info.avgRating > 4.4)
                setListOfRes(filterList)
            }}>Top Rated </button>
            UserName:
            <input type='text' className='border-black m-4 border border-solid p-2' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>
           
            <div className="res-container flex flex-wrap">
                {
                   FinalFilList.map((restaurant)=> (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className='res-card'><RestaurantCard resData={restaurant}/></Link>)
                    )}
            </div>
        </div>
        </div>

    )
}

export default Body