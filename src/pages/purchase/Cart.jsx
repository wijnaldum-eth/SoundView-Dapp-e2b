import React, { useState } from "react";

export const Cart = () => {
  const [cartOpen, setCartOpen] = useState();

  function handleCart() {
    setCartOpen(false);
  }

  return (
    <div
      className="w-full h-screen bg-transparent flex flex-col items-center justify-center absolute"
      onClick={() => handleCart()}
    >
      <div className="bg-white p-3 sm:p-8 rounded-xl">
        <div className="w-full flex flex-row items-center justify-between">
          <div>
            <h1>Your Cart</h1>
            <p>
              Items in your cart not yet purchased until you have certified
              purchase. <span>learn more</span>
            </p>
          </div>
          <div onClick={() => handleCart()}>✕</div>
        </div>
        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-row items-center justify-between">
            <p>1 item</p>
            <button>clear all</button>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <p>Total price</p>
          <div>
            <p>92.02 ETH</p>
            <p>$119.399.67</p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row items-center justify-between">
            <p>Send asset to a 3rd party wallet address</p>
            <button>∨</button>
          </div>
          <button className="w-full flex flex-row items-center justify-center h-8 rounded-lg bg-red-700">
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
};
