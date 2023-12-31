import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { restaurantID } = useParams();

  // console.log(restaurantID);

  const restaurantInfo = useRestaurantMenu(restaurantID);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwo } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories[0]?.card?.card?.itemCards[0]?.card?.info.id);

  return (
    <div className="text-center tracking-wider">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ").toUpperCase()} Rs.{costForTwo / 100} FOR TWO
      </p>
      {/** categories accordin */}
      {categories.map((category, index) => (
        //controlled component

        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          index={index}
          showIndex={showIndex}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(-1) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
