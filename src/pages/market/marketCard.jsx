import React from "react";
import { useNavigate } from "react-router-dom";

export const MarketCard = (props) => {
  const navigate = useNavigate();

  const { image, title, album } = props;
  return (
    <div
      className="rounded-2xl shadow-lg cursor-pointer bg-red-50 max-w-sm hover:ease-in-out duration-500 hover:scale-[1.05]"
      onClick={() => navigate("/buy")}
    >
      <img
        className="rounded-t-2xl"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt="soundview"
      />
      <div className="h-20 px-3 bg-transparent flex flex-row items-center gap-3 relative">
        <div className="w-12 h-12 rounded-[200px] object-cover bg-gray-300">
          <img
            className="w-full h-full rounded-[200px] object-cover"
            src={`${image}`}
            alt="soundview"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-black">{title}</h1>
          <p className="font-light">{`Album: ${album}`}</p>
        </div>
      </div>
    </div>
  );
};
