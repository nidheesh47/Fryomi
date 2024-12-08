import React from "react";
import { Rating } from "@material-tailwind/react";

function RestaurantCard({ name, image, rating }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full" src={image} alt={name} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </div>
      <div className="px-6 py-4">
        <Rating value={rating} readonly />
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
    </div>
  );
}

export default RestaurantCard;
