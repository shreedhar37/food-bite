import RightArrow from "../utils/RightArrow";
import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/** Header  */}
      <div className="w-6/12 mx-auto my-4 bg-slate-50 shadow-md p-4 text-lg tracking-wider">
        <div className="flex justify-between ">
          <span className="font-bold selection">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <RightArrow />
          </span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
      {/** Accordin Body     */}
    </div>
  );
};

export default RestaurantCategory;
