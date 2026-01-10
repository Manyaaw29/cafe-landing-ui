import React from "react";
import ItemCard from "./ItemCard";
import { PRODUCTS } from "../constants";

const Items = () => {
  return (
    <section className="container mx-auto py-24" id="menu">
      <h2 className=" heading-font mb-12 text-center text-5xl tracking-tighter lg:text-6xl">
        What We Serve
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-1 mr-4">
        {PRODUCTS.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Items;
