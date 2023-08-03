import { CDN_URL } from "../utils/constant";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg m-14 font-black text-lg  bg-black border-2 border-black">
      <div className="logo-container">
        <img className="w-28" alt="app logo" src={CDN_URL} />
      </div>
      <div className="flex items-center justify-end">
        <ul className="flex p-4 m-4 ">
          <li className="px-4  bg-black text-white ">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 bg-black text-white">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4 bg-black text-white">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="px-4 bg-black text-white">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4 bg-black text-white">CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
