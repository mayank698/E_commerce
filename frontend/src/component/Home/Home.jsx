import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import shirt from "../images/shirt.jpg";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Tshirt",
  images: [{ url: `${shirt}` }],
  price: "3000",
  _id: "Mayank",
};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  return (
    <Fragment>
      <MetaData title="E_commerce" />
      <div className="banner">
        <p>Welcome to ECOMMERCE</p>
        <h1>Amazing products below</h1>
        <a href="#container">
          <button>Get Started</button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
