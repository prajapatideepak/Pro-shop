import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../component/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../actions/productAction";
import Loader from "../component/Loader";
import Message from "../component/Message";
export default function ProductScreen({ match }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { error, product, loading } = productDetail;
  useEffect(() => {
    dispatch(listProductDetail(match.params.id));
  }, [match.params.id, dispatch]);

  return (
    <div className="px-8 lg:px-36 py-8 text-gray-600">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          <div className="mt-4 mb-8">
            <Link
              to="/"
              className="bg-gray-600 text-gray-200 px-6 py-2 hover:shadow-xl hover:bg-gray-700 hover:text-gray-100 transition  duration-500"
            >
              Go Back
            </Link>
          </div>
          <div className="flex  flex-col lg:flex-row  bg-gray-100 rounded shadow-lg justify-around lg:space-x-7 space-y-10 lg:space-y-0 p-8 lg:p-12">
            <div className=" w-full lg:w-1/3 inline-block">
              <img src={product.image} className="shadow " alt={product.name} />
            </div>
            <div className="  lg:w-1/2  px-4 lg:px-8 py-3">
              <h1 className="text-2xl mb-3 font-bold"> {product.name}</h1>
              <Rating value={product.rating} text={product.numReviews} />
              <div>
                <h2>
                  {" "}
                  <span> Price: </span>{" "}
                  <span className="font-bold">${product.price} </span>
                </h2>
              </div>
              <div className="leading-loose text-gray-500 mt-5 text-sm">
                <span> Description :</span>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="lg:w-1/3 px-3">
              <div className=" w-full 	">
                <div className="border  grid grid-cols-2 gap-3 w-full border-gray-300 p-2">
                  <div>Price</div>
                  <div>${product.price}</div>
                </div>
                <div className="border  grid grid-cols-2 gap-3 w-full border-gray-300 p-2">
                  <div>Status :</div>
                  <div
                    className={
                      product.countInStock > 0
                        ? "text-green-500 "
                        : "text-red-600"
                    }
                  >
                    {product.countInStock > 0 ? "In Stock " : "Out of Stock"}
                  </div>
                </div>
                {product.countInStock > 0 ? (
                  <div className="border  grid grid-cols-2 gap-3 w-full border-gray-300 p-2">
                    <div>Qty :</div>
                    <div>
                      <select>{
                        [...Array(product.countInStock).keys()].map(x=>(
                          <option value={x+1}>{x+1}</option> 
                        ))
                        }</select>
                    </div>
                  </div>
                ) : null}
                <div className="border  border-gray-300 px-2 py-2 mx-auto">
                  <div className="col-span-2">
                    <button className="w-full text-gray-300 p-2 bg-gray-700 hover:shadow-lg hover:bg-gray-800 hover:text-gray-100 transition  duration-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
