import ResturantCard from './ResturantCard'
import resList from '../utils/mock'
import {useState} from 'react';

const Body = () => {
//local state varibale
let [ListOfRes, setListOfRes] = useState(resList)
    
    return (
        <div className="body">
            <div className="filter"><button type='button' className='filter-btn' onClick={()=>{
                const filterList = ListOfRes.filter((res) => res.info.avgRating > 4.4)
                setListOfRes(filterList)
            }}>Top Rated </button></div>
            <div className="res-container">
                {
                   ListOfRes.map((restaurant)=> <ResturantCard key={restaurant.info.id}resData={restaurant}/>)
                    }
            </div>
        </div>

    )
}

export default Body