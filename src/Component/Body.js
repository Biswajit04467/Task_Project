import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { RoundedShimmer, Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {


    const [resList, setResList] = useState(null);
    const [favList, setFavList] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {

        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFavList(json?.data?.cards[0]?.card?.card)
            console.log(json)
            console.log(resList)
            // setnewRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setcopyRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {

           <div>{error}</div>

        }


    }

    return (


        <div className="" >
            {/* <div className=" relative z-20">
                <Login />
            </div> */}
            <div>
                {
                    favList === null ? <RoundedShimmer /> : (
                        <div>
                            <WhatsOnYourMind fav={favList} />
                        </div>
                    )
                }
            </div>


            <div className="flex flex-wrap justify-center">
                {
                    resList === null || !resList ? <Shimmer /> : (
                        resList.map((restaurant) => (


                            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>

                                <RestaurantCard key={restaurant.info.id} res={restaurant} />
                            </Link>
                        )))
                }
            </div>

        </div>
    )
}

export default Body;