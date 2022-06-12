import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import axios from "axios";
export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    FetchProducts();
  }, []);
  return (
    <div className="container p-6 mx-auto">
      <h1 className="text-3xl mb-8 text-gray-600 font-bold text-center">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 ">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}
