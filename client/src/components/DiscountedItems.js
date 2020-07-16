import React from "react";

import ItemCard from "./ItemCard";

const DiscountedItems = () => {
  return (
    <section className="discount bg-dark text-light py-6">
      <div className="container">
        <h3 className="text-center mb-5">DISCOUNT STOCKS</h3>
        <div className="row">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
};

export default DiscountedItems;