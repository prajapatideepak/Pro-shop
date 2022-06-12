import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-center space-y-5 lg:space-y-0 lg:flex bg-gradient-to-r from-gray-700   to-gray-800 items-center text-gray-400 justify-between bg-gray-600 px-8 py-5">
      <div className="">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase	">
            ProShop
          </h1>
        </Link>
      </div>
      <div className="space-x-4 text-sm ">
        <a
          className=" hover:underline hover:text-gray-100 tracking-wider"
          href="#d"
        >
          CART
        </a>
        <a
          className=" hover:underline hover:text-gray-100 tracking-wider"
          href="#f"
        >
          SIGN-IN
        </a>
      </div>
    </div>
  );
}
