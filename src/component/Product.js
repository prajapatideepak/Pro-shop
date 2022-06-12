import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
export default function Product({ product }) {
  return (
    <div className=" hover:scale-105  transition duration-500 col-span-1 text-gray-600 bg-white rounded  shadow-md">
      <div>
        <Link to={`/product/${product._id}`}>
          <img className="rounded-t" src={product.image} alt="d" />
        </Link>
      </div>
      <div className="p-4">
        <Link
          to={`/product/${product._id}`}
          className="hover:underline transition duration-500"
        >
          <h1 className="font-bold mb-1 text-black"> {product.name}</h1>
        </Link>
        <Rating value={product.rating} text={product.numReviews} />
        <p className="">
          <span className="font-bold text-2xl"> ${product.price}</span>{" "}
        </p>
      </div>
    </div>
  );
}
