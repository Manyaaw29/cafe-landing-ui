import React from "react";

const ItemCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full rounded-3xl object-cover p-2 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-600">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{product.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;