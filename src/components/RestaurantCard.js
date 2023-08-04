import { LOGO_URL } from "../utils/constant";

import StarSvg from "../utils/StarSvg";

const RestaurantCard = (props) => {
  const { restaurantdata } = props;

  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } =
    restaurantdata?.info;
  return (
    <div className="m-4  w-[250px]  shadow-md  bg-slate-50 hover:bg-gray-200  border-2 border-black">
      <div>
        <img
          className=" w-[250px] h-[250px]"
          alt="restaurant logo"
          src={LOGO_URL + cloudinaryImageId}
        />
      </div>
      <div className="tracking-wider p-2">
        <h3 className="font-black py-2 text-lg">{name}</h3>
        <h4 className="py-2 ">{cuisines.slice(0, 3).join(", ")}</h4>
        <h4 className="py-2 flex flex-wrap ">
          {avgRatingString} <StarSvg />
        </h4>
        <h4 className="py-2">{sla.slaString}</h4>
      </div>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withOffer = (RestaurantCard) => {
  return (props) => {
    const offerString =
      props.restaurantdata.info.aggregatedDiscountInfoV3.header +
      " " +
      props.restaurantdata.info.aggregatedDiscountInfoV3?.subHeader;
    return (
      <div className="hover:scale-105">
        <label className="absolute font-bold bg-black text-white m-2 p-2">
          {offerString}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
