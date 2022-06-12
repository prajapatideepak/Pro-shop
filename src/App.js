import React from "react";
import Footer from "./component/Footer";
import { Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <div className="min-h-screen bg-gray-200 ">
      <Navbar />
      <div className="container  mx-auto ">
        <Route path="/product/:id" component={ProductScreen} />

        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
