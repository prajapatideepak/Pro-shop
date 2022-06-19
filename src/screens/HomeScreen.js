import React, { useEffect } from "react";
import Product from "../component/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Loader from "../component/Loader";
import Message from "../component/Message";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts);
  }, [dispatch]);
  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-3xl mb-8 text-gray-600 font-bold text-center">
        Latest Products
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 ">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
