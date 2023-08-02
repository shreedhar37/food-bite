import { LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restaurantdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = restaurantdata?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[500px] shadow-md  border-2 bg-slate-50 hover:bg-gray-200">
      <div>
        <img
          className=" w-[250px] h-[250px]"
          alt="restaurant logo"
          src={LOGO_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="py-1">{cuisines.join(", ")}</h4>
        <h4 className="py-1">{avgRatingString} stars</h4>
        <h4 className="py-1">{costForTwo}</h4>
        <h4 className="py-1">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
