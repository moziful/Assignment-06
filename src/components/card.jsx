import React from "react";
import Button from "./button";

function Card({ product, addToCart, isInCart }) {
  const badgeStyles = {
    popular: "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
    "best seller": "bg-orange-100 text-orange-600"
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6 transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 p-3">
          <img
            src={product.icon}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        <div
          className={`flex h-8 items-center justify-center rounded-full px-3 text-sm font-medium capitalize ${
            badgeStyles[product.tagType]
          }`}
        >
          {product.tag}
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-900">{product.name}</p>

      <p className="text-gray-600">{product.description}</p>

      <div className="flex items-end gap-1">
        <p className="text-2xl font-bold text-gray-900">${product.price}</p>
        <p className="text-sm text-gray-500">/{product.period}</p>
      </div>

      <div className="space-y-2">
        {product.features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <span className="text-green-600">&#10003;</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button
        btnName={isInCart ? "Added To Cart" : "Buy Now"}
        className="mt-auto w-full justify-center"
        variant={isInCart ? "light" : "gradient"}
        onClick={() => addToCart(product)}
      />
    </div>
  );
}

export default Card;
