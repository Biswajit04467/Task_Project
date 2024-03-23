import react from "react";
import { CDN_URL } from "../utils/Constant";
import { useState } from "react";

const CartItems = ({ items, quantity }) => {


    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="flex my-4">

                        <div className="w-9/12">

                            <div className=" text-left flex flex-col justify-center">
                                <span className=" font-bold">{item.card.info.name}- ₹{item.card.info.price / 100}</span>

                                <p className=" text-sm">{item.card.info.description}</p>
                            </div>

                        </div>


                        <div className="w-3/12" >
                            {
                                item?.card?.info?.imageId !== undefined ? (<img src={CDN_URL + item.card.info.imageId} alt="item" />) : null
                            }
                        </div>





                    </div>
                ))}
        </div>
    )
}

export default CartItems;