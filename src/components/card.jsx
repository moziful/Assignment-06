import React from "react";
import Button from "./button";

function Card({ product }) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-4">
      {/* Top section */}
      <div className="flex justify-between items-center">
        <div className="w-16 h-16 flex justify-center items-center border border-gray-200 rounded-full text-xl font-bold">
          {product.icon}
        </div>

        <div className="px-3 h-8 flex justify-center items-center bg-orange-200 text-orange-600 rounded-full capitalize">
          {product.tag}
        </div>
      </div>

      {/* Name */}
      <p className="text-2xl font-bold text-gray-900">
        {product.name}
      </p>

      {/* Description */}
      <p className="text-gray-600">
        {product.description}
      </p>

      {/* Price */}
      <div className="flex items-end gap-1">
        <p className="text-2xl font-bold text-gray-900">
          ${product.price}
        </p>
        <p className="text-sm text-gray-500">
          /{product.period}
        </p>
      </div>

      {/* Features */}
      <div className="space-y-2">
        {product.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <span>✔</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button btnName="Buy Now" />
    </div>
  );
}

export default Card;