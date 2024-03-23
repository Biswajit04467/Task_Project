import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import { CDN_URL } from '../utils/Constant'
import { useSelector } from "react-redux";

function WhatsOnYourMind({ fav }) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3
  };

  const user = useSelector(store => store.user)


  return (
    <div className='w-[80vw]  m-auto  my-5'>
      <div className="ml-8 mt-10">
        {user && <span className="text-xl font-bold"> {user.displayName} ,</span>}
        <span className="text-xl">{fav.header.title}</span>
      </div>

      <div className='my-4' >
        <Slider {...settings} >
          {
            fav.imageGridCards.info.map((food) => (
              <img key={food.id} src={CDN_URL + food.imageId} className=' w-36' alt="food" />
            ))
          }
        </Slider>
        {console.log({ fav })}
      </div>

    </div>
  )
}

export default WhatsOnYourMind
