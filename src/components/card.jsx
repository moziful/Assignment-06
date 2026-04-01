import React from 'react';
import Button from './button';

function Card() {
  return (
    <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="w-16 h-16 flex justify-center items-center border border-gray-200 rounded-full">
          A
        </div>

        <div className="px-3 h-8 flex justify-center items-center bg-orange-200 text-orange-600 rounded-full">
          Best Seller
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-900">
        AI Writing Pro
      </p>

      <p className="text-gray-600">
        Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
      </p>

      <div className="flex items-end gap-1">
        <p className="text-2xl font-bold text-gray-900">$2.99</p>
        <p className="text-sm text-gray-500">/Mo</p>
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <span>✔</span>
          <span>Unlimited AI generations</span>
        </div>
        <div className="flex gap-2">
          <span>✔</span>
          <span>50+ writing templates</span>
        </div>
        <div className="flex gap-2">
          <span>✔</span>
          <span>Grammar checker</span>
        </div>
      </div>

      <Button btnName="Buy Now" />
    </div>
  );
}

export default Card;