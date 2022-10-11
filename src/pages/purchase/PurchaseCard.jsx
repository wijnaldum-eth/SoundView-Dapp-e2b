import React from "react";

export const PurchaseCard = (props) => {
  const {
    genre,
    rush_number,
    artist,
    album,
    date,
    time,
    coin_price,
    fiat_price,
    number_of_owners,
    ratings,
    likes,
    views,
    main_owner,
  } = props;
  return (
    <div className="w-full">
      <div>
        <img
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt="soundview buy nft"
        />
      </div>
      <div className="flex flex-row">
        <div className="w-[70%] text-left flex-col gap-5">
          <p className="font-light text-black">{genre}</p>
          <h1 className="font-bold text-2xl">{rush_number}</h1>
          <p className="font-light text-black">{`By ${artist} | ${album}`}</p>
          <p className="font-light text-black">{`Sale ends ${date} at ${time}`}</p>
          <div className="flex flex-row items-center gap-10 text-left">
            <p>24 Hours</p>
            <p>39 Minutes</p>
            <p>2 Seconds</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-light text-black">current Price:</p>
            ICON <h1>{coin_price}</h1>
            <p>{`$${fiat_price}`}</p>
          </div>
        </div>
        <div className="w-[30%] text-left font-light flex-col gap-5">
          <p>Owners:</p>
          <p>{number_of_owners}</p>
          <p>Ratings:</p>
          <p>{ratings}</p>
          <p>Liked by:</p>
          <p>{likes}</p>
          <p>Total views:</p>
          <p>{views}</p>
          <p>Owned by:</p>
          <p>{main_owner}</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-5">
        <button className=" w-full rounded-lg bg-red-400 text-red-900 hover:bg-red-900 hover:text-red-100"></button>
        <button className=" w-full rounded-lg bg-red-400 text-red-900 hover:bg-red-900 hover:text-red-100"></button>
      </div>
    </div>
  );
};
