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
    <div className="w-full flex flex-col gap-10 px-5 font-Recoleta">
      <div className="w-full h-[300px] object-cover flex items-center justify-center overflow-hidden rounded-2xl">
        <img
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt="soundview buy nft"
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[70%] w-full text-left flex items-start justify-start flex-col gap-10">
          <div>
            <p className="font-light text-black">{genre}</p>
            <h1 className="font-bold text-2xl">Rush #{rush_number}</h1>
            <p className="font-light text-black">{`By ${artist} | ${album}`}</p>
          </div>
          <div>
            <p className="font-light text-black">{`Sale ends ${date} at ${time}`}</p>
            <div className="flex flex-row gap-10 text-left">
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">24</h1>
                <p>Hours</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">39</h1>
                <p>Minutes</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">02</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="font-light text-black">current Price: </p>
            ETH <h1 className="font-bold text-4xl">{coin_price} </h1>
            <p className="font-semibold"> {`$${fiat_price}`}</p>
          </div>
        </div>
        <div className="sm:w-[30%] w-full text-left font-light flex items-start justify-start flex-col gap-3">
          <div className="flex flex-col items-start justify-start">
            <p>Owners:</p>
            <p className="font-semibold">{number_of_owners}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Ratings:</p>
            {ratings && <span>⭐⭐⭐⭐⭐</span>}
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Liked by:</p>
            <p className="font-semibold">{likes}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Total views:</p>
            <p className="font-semibold">{views}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Owned by:</p>
            <p className="font-semibold">{main_owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
