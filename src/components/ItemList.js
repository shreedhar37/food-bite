import { LOGO_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-4 m-2 border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{""}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm text-slate-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <img
              alt="food image"
              src={LOGO_URL + item.card.info.imageId}
              className="w-full mx-4"
            />
            <div>
              <button className="p-1 ml-12  bg-black text-white shadow-md border-black border-2 font-bold text-sm">
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
