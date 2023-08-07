import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center tracking-wider">
      <h1 className="font-bold my-6 text-2xl">Cart</h1>
      <button
        className="p-2  bg-black text-white shadow-md border-black border-2 font-bold text-sm"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 ? (
        <h1 className="py-10  text-xl">
          Cart is empty, please add some items to the cart!
        </h1>
      ) : (
        <div className="w-6/12 mx-auto my-8 shadow-md p-4 text-lg tracking-wider  border-2 border-black ">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
