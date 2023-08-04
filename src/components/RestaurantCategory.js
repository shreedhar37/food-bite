import { useState } from "react";
import RightArrow from "../utils/RightArrow";
import UpArrow from "../utils/UpArrow";

import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  index,
  showIndex,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
    console.log("clicked");
  };

  return (
    <div>
      {/** Header  */}
      <div className="w-6/12 mx-auto my-8 shadow-md p-4 text-lg tracking-wider  border-2 border-black ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold selection">
            {data.title} [{data.itemCards.length}]{" "}
            {showItems ? "true" : "false"}
          </span>
          <span>{showItems ? <UpArrow /> : <RightArrow />}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/** Accordin Body     */}
    </div>
  );
};

export default RestaurantCategory;
