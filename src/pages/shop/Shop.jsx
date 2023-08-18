import React from "react";
import { Hero } from "../../components/hero/Hero";

import { products } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  return (
    <>
      <Hero />
      <div className="shop">
        <div className="container">
          <div className="products">
            {products.map((product) => {
              return <Product data={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
