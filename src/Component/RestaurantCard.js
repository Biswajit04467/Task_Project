import React from 'react'
import { CDN_URL } from '../utils/Constant'

const RestaurantCard = ({res}) => {
    return (
        <div>
            
            <div className="flex justify-center m-2 box-sizing:border-box">
                <div className="p-2 flex flex-col w-[18rem] hover:border border-black  " >

                   
                    <img src={CDN_URL + res.info.cloudinaryImageId} alt="" className="w-[16rem] h-[10rem] object-cover rounded-xl" />
                    <span className=' font-bold mt-4 text-lg'>{res.info.name}</span>
                    <span className=' font-bold text-lg'>{res.info.avgRating}★ -{res.info.sla.slaString} min</span>
                    <span>{res.info.costForTwo}</span>
                    <span className='w-9/12 break-words'>{res.info.cuisines.join(", ")}</span>
                    <span>{res.info.areaName}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
