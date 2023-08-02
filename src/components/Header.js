import { CDN_URL } from "../utils/constant";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg m-2 bg-yellow-400  font-black text-lg">
      <div className="logo-container">
        <img className="w-40" alt="app logo" src={CDN_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4  hover:bg-black text-white">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 hover:bg-black text-white">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4 hover:bg-black text-white">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="px-4 hover:bg-black text-white">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4 hover:bg-black text-white">CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
