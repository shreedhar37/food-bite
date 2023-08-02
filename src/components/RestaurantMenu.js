import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantID } = useParams();

  // console.log(restaurantID);

  const restaurantInfo = useRestaurantMenu(restaurantID);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwo } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  //console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} Rs.{costForTwo / 100} FOR TWO
      </p>
      <ul>
        {itemCards.map((itemCard) => {
          return (
            <li key={itemCard.card.info.id}>
              {itemCard.card.info.name} - Rs.
              {itemCard.card.info.price / 100 ||
                itemCard.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
