import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (restaurantID) => {
  // fetch data

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + restaurantID, { mode: "cors" });
    const json = await data.json();
    setRestaurantInfo(json.data);
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
