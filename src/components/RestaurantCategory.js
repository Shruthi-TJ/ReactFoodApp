import ItemList from "./ItemList"


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  
    const handleClick = () =>{
        setShowIndex()
    }
    
    return (
        <div className=" w-6/12 m-auto bg-gray-50 shadow-lg mb-2 p-3">
            {/*header*/}
        <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {/*accordion body*/}
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory