import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, lazy } from "react";
import { API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOffer } from "./RestaurantCard";

const Body = () => {
  // local state variable
  const [restaurantsList, setRestaurantData] = useState([]);
  const [filteredRestaurantsList, setFilteredData] = useState([]);
  const [isClicked, setClicked] = useState(false);

  const RestaurantCardOffer = withOffer(RestaurantCard);

  // const [serachText, setSearchData] = useState("");

  // whenever state variable changes, react will triggers reconciliation
  // console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    // console.log(json);

    // optional chaining
    setRestaurantData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  return restaurantsList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body  m-2 p-2 ">
      <div className="m-4 p-2">
        <div className="flex">
          <div className="mb-8 ml-1 px-3">
            <input
              type="text"
              className="placeholder:font-black border border-solid border-black p-2  shadow-md "
              placeholder="Search a restaurant"
              onInput={(e) => {
                const filteredRestaurant = restaurantsList.filter(
                  (restaurant) =>
                    restaurant.info.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                );
              }}
            />
          </div>
          <div className="mb-8 ml-1 px-2">
            <button
              className="px-4 py-2 shadow-md font-black bg-black text-white"
              onClick={() => {
                // filter the restaurants based on ratings
                setClicked(!isClicked);

                const filteredRestaurant = restaurantsList.filter(
                  (restaurant) => restaurant.info.avgRating >= 4.5
                );

                {
                  isClicked
                    ? setFilteredData(restaurantsList)
                    : setFilteredData(filteredRestaurant);
                }
              }}
            >
              {isClicked ? "SHOW ALL" : "TOP RATED"}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurantsList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantCardOffer restaurantdata={restaurant} />
              ) : (
                <RestaurantCard restaurantdata={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
