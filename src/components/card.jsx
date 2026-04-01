import React from "react";
import Button from "./button";

function Card({ product }) {
  const badgeStyles = {
    popular: "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
    "best seller": "bg-orange-100 text-orange-600"
  };

  return (
    <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-4 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div className="w-16 h-16 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <img
            src={product.icon}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className={`px-3 h-8 flex justify-center items-center rounded-full capitalize text-sm font-medium ${
            badgeStyles[product.tagType]
          }`}
        >
          {product.tag}
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">
        {product.name}
      </p>
      <p className="text-gray-600">
        {product.description}
      </p>
      <div className="flex items-end gap-1">
        <p className="text-2xl font-bold text-gray-900">
          ${product.price}
        </p>
        <p className="text-sm text-gray-500">
          /{product.period}
        </p>
      </div>
      <div className="space-y-2">
        {product.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <span className="text-green-600">&#10003;</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Button btnName="Buy Now" />
    </div>
  );
}

export default Card;
