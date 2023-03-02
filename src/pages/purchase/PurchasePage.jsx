import React from "react";
import { useState } from "react";
import { PurchaseCard } from "./PurchaseCard";
import { PurchasePageAcordion } from "./PurchasePageAcordion";
import { Cart } from "./Cart";

export const PurchasePage = () => {
  const [cart, setCart] = useState(false);

  const handleCartState = () => {
    setCart(true);
  };

  const text = (
    <div className="flex flex-col items-start justify-center gap-2">
      Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O
      Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
      desde o ano de 1500, quando uma misturou os caracteres de um texto para
      criar um espécime de livro.
      <button className="py-3 w-1/3 rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta">
        Go here for minting
      </button>
    </div>
  );

  const offers = (
    <div className="flex flex-row items-center justify-center">
      No offers made yet
    </div>
  );

  const details = (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-start gap-3">
        <span>Contract Address</span>
        <span>Token ID</span>
        <span>Token standard</span>
        <span>Blockchain</span>
        <span>Last system update</span>
        <span>Creator's royalty</span>
      </div>
      <div className="flex flex-col items-end justify-start gap-3">
        <span className="text-red-500">0x233bsihbisvuyb8762gva</span>
        <span>3422</span>
        <span>ERC-721</span>
        <span>Ethereum</span>
        <span>18 hours ago</span>
        <span>10%</span>
      </div>
    </div>
  );

  const properties = (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-start gap-3">
        <span>Collection</span>
        <span>Featuring</span>
        <span>Status</span>
        <span>Blockchain</span>
      </div>
      <div className="flex flex-col items-end justify-start gap-3">
        <span className="text-red-500">Afropop</span>
        <span>Mavins records</span>
        <span>Listed</span>
        <span>Ethereum</span>
      </div>
    </div>
  );

  const listings = (
    <div className="flex flex-col items-center justify-center">
      <p>4 pieces of rush #3829 have been listed</p>
      <br />
      <div className="flex flex-col items-center justify-center rounded-lg object-cover">
        <img
          className="w-[200px] h-[200px] bg-slate-200 rounded-lg object-cover"
          src="#"
          alt="cart item"
        />
        <br />
        <button
          className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta"
          onClick={() => handleCartState()}
        >
          Purchase
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex sm:flex-row flex-col text-sm sm:text-base gap-10 w-full py-20 sm:py-40 px-4 sm:px-12 relative">
      {cart && <Cart />}
      <div className="flex flex-col w-full gap-5">
        <PurchaseCard
          genre="Afropop"
          rush_number="3829"
          artist="Ayar Star"
          album="Marvin Records"
          date="October 6, 2022"
          time="11:51pm GMT+1"
          coin_price="23"
          fiat_price="39,097.81"
          number_of_owners="You and 6 others"
          ratings="5"
          likes="50K"
          views="100K"
          main_owner="SoundView Limited"
        />
        <div className="flex flex-row w-full gap-5">
          <button className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta">
            Add to cart
          </button>
          <button
            className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta"
            onClick={() => handleCartState()}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 sm:px-12">
        <div class="shadow-lg w-full rounded-lg overflow-hidden">
          <div class="py-3 px-5 bg-gray-50 text-xl font-Recoleta flex flex-row items-center justify-between">
            <h1>Price History</h1>
            <button className="border rounded-full px-3 text-base">
              All time
            </button>
          </div>
          <canvas class="p-10" id="chartLine"></canvas>
        </div>
        <PurchasePageAcordion
          title="About Rush #3859"
          acordion_content={text}
        />
        <PurchasePageAcordion title="Details" acordion_content={details} />
        <PurchasePageAcordion
          title="Properties"
          acordion_content={properties}
        />
        <PurchasePageAcordion title="Listings" acordion_content={listings} />
        <PurchasePageAcordion title="Offers made" acordion_content={offers} />
      </div>
    </div>
  );
};
