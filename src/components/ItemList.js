import {CDN_URL} from "../utils/constants"
const ItemList = ({items}) => {
   // console.log(items)
    return(
        <div>
            {items.map((item)=> (
                <div key={item.card.info.id} className=" bg-slate-200 rounded-lg p-3 m-3 flex justify-between">
            <div className="w-8/12 text-left">
                <div className="font-bold text-lg">{item.card.info.name}</div>
                <span className=" font-bold text-lg">₹ {item.card.info.price/100}</span>
                 <p className=" text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-4/12 rounded-lg flex justify-center flex-wrap">
            <img className="rounded w-48" src={CDN_URL+item.card.info.imageId}/>
            <div className=" absolute"><button className=" bg-gray-50 py-2 px-4 rounded">ADD</button></div>
            </div>
            </div>
            ))}
    </div>
    )
}

export default ItemList