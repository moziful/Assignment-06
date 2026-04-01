import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Heading from './heading';
import Card from './card';
import Button from './button';
import designToolIcon from '../assets/products/design-tool.png';
import operationIcon from '../assets/products/operation.png';
import portfolioIcon from '../assets/products/portfolio.png';
import socialMediaIcon from '../assets/products/social-media.png';
import writingIcon from '../assets/products/writing_2327400 1.png';

const products = [
  {
    id: 1,
    name: "Resume Pro Builder",
    description: "Create ATS-friendly professional resumes with premium templates.",
    price: 9.99,
    period: "monthly",
    tag: "popular",
    tagType: "popular",
    features: ["100+ templates", "ATS optimization", "Export to PDF", "Cover letter builder"],
    icon: designToolIcon
  },
  {
    id: 2,
    name: "Portfolio Website Kit",
    description: "Launch a modern personal portfolio website in minutes.",
    price: 29.99,
    period: "one-time",
    tag: "best seller",
    tagType: "best seller",
    features: ["Responsive design", "Dark mode", "SEO optimized", "Easy customization"],
    icon: operationIcon
  },
  {
    id: 3,
    name: "Invoice Manager",
    description: "Generate and track invoices for freelance clients effortlessly.",
    price: 14.99,
    period: "monthly",
    tag: "new",
    tagType: "new",
    features: ["Auto invoice generator", "Client management", "Payment reminders", "PDF export"],
    icon: portfolioIcon
  },
  {
    id: 4,
    name: "Expense Tracker Plus",
    description: "Track daily expenses with reports and budget insights.",
    price: 19.99,
    period: "yearly",
    tag: "popular",
    tagType: "popular",
    features: ["Budget categories", "Monthly reports", "Google Sheet sync", "Data export"],
    icon: socialMediaIcon
  },
  {
    id: 5,
    name: "TaskFlow Pro",
    description: "Organize tasks, deadlines, and team projects efficiently.",
    price: 12.99,
    period: "monthly",
    tag: "best seller",
    tagType: "best seller",
    features: ["Kanban board", "Deadline reminders", "Priority labels", "Team sharing"],
    icon: designToolIcon
  },
  {
    id: 6,
    name: "Cloud Storage Box",
    description: "Secure online storage for documents, images, and backups.",
    price: 49.99,
    period: "yearly",
    tag: "new",
    tagType: "new",
    features: ["100GB storage", "File sharing", "Backup restore", "End-to-end encryption"],
    icon: designToolIcon
  },
  {
    id: 7,
    name: "Social Media Pack",
    description: "Ready-made templates for Instagram, Facebook, and LinkedIn.",
    price: 24.99,
    period: "one-time",
    tag: "popular",
    tagType: "popular",
    features: ["500+ templates", "Editable text", "Brand kit support", "HD export"],
    icon: socialMediaIcon
  },
  {
    id: 8,
    name: "Learning Dashboard",
    description: "Track learning progress, notes, and study streaks.",
    price: 7.99,
    period: "monthly",
    tag: "new",
    tagType: "new",
    features: ["Progress charts", "Topic notes", "Daily streak", "Exam planner"],
    icon: portfolioIcon
  },
  {
    id: 9,
    name: "AI Content Writer",
    description: "Generate blogs, captions, and marketing content instantly.",
    price: 39.99,
    period: "monthly",
    tag: "best seller",
    tagType: "best seller",
    features: ["Blog generation", "SEO keywords", "Multiple tones", "One-click copy"],
    icon: writingIcon
  },
  {
    id: 10,
    name: "Premium UI Bundle",
    description: "A collection of modern UI components for web projects.",
    price: 59.99,
    period: "one-time",
    tag: "popular",
    tagType: "popular",
    features: ["200+ components", "Tailwind CSS", "Dark/light mode", "Lifetime updates"],
    icon: operationIcon
  }
];

function Products({ cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState("products");

  function addToCart(product) {
    let alreadyAdded = false;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        alreadyAdded = true;
      }
    }

    if (alreadyAdded === false) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart`);
    } else {
      toast.info(`${product.name} is already in cart`);
    }
  }

  function removeFromCart(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    const selectedItem = cartItems.find((item) => item.id === id);
    setCartItems(updatedCart);

    if (selectedItem) {
      toast.info(`${selectedItem.name} removed from cart`);
    }
  }

  function proceedToCheckout() {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty');
      return;
    }

    setCartItems([]);
    toast.success('Proceed to checkout completed');
  }

  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price;
  }

  return (
    <section className="mt-20 px-6 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Heading
          heading="Premium Digital Tools"
          subheading="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        />

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-[320px] rounded-full border border-gray-200 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-medium sm:px-6 ${
                activeTab === "products"
                  ? "bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-500 text-white"
                  : "text-slate-500"
              }`}
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("cart")}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-medium sm:px-6 ${
                activeTab === "cart"
                  ? "bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-500 text-white"
                  : "text-slate-500"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === "products" && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
                isInCart={cartItems.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="mt-10 rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Your Cart</h3>

            {cartItems.length === 0 && (
              <p className="mt-6 text-lg text-slate-500">No products added yet.</p>
            )}

            {cartItems.length > 0 && (
              <div className="mt-6">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-8 w-8 object-contain"
                          />
                        </div>

                        <div>
                          <p className="text-xl font-semibold text-slate-900 sm:text-2xl">
                            {item.name}
                          </p>
                          <p className="mt-1 text-base text-slate-500 sm:text-lg">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="self-start text-base font-medium text-pink-500 sm:self-auto sm:text-lg"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-base text-slate-500 sm:text-lg">Total:</p>
                  <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    ${total.toFixed(2)}
                  </p>
                </div>

                <Button
                  btnName="Proceed To Checkout"
                  onClick={proceedToCheckout}
                  className="mt-6 w-full justify-center"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
