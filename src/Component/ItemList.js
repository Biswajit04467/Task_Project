import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/Constant";
import { addItem } from "../Redux/cartSlice";


const ItemList = ({ items }) => {
    const user=useSelector(store=>store.user)

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        if(!user){
            alert("login first")
        }

        user && dispatch(addItem(item));
    }


    return (
        <div>
            {
                items.map((item) => (

                    <div key={item.card.info.id} className=" border-gray-400 border-b-2 my-5 text-left flex justify-between">

                        <div className="w-9/12">
                            <div className="py-4">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100}</span>
                            </div>
                            <div className="text-xs max-w-[70%] ">
                                <p>{item.card.info.description}</p>
                            </div>
                        </div>

                        <div className="w-3/12  flex justify-center" >
                            <div className="absolute">
                                <button className="px-2 bg-black text-white" onClick={() => handleAddItem(item)}>Add+</button>
                            </div>

                            {
                                item?.card?.info?.imageId !== undefined ? (<img className=" rounded-lg  h-[85%] w-32 " src={CDN_URL + item.card.info.imageId} alt="item" />) : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;