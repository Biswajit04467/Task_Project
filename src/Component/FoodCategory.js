import React, { useState } from 'react'
import ItemList from './ItemList';

const FoodCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {

        setShowIndex();
    }

    return (
        <div>

            <div className='bg-gray-100 my-3 p-5 w-6/12 mx-auto '>
                <div className=' cursor-pointer flex justify-between' onClick={handleClick}>
                    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && < ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default FoodCategory;