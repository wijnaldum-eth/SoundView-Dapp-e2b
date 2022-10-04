import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SoundViewLogoMobile } from "../../icons/Logo";
import { Search } from "../../icons/Search";

export const MobileNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="flex flex-col sm:hidden w-full bg-white shadow-md fixed z-50">
      <div className="flex flex-row items-center justify-between px-4 py-2 w-full">
        <SoundViewLogoMobile />
        <button
          className="text-bold text-4xl font-black pr-2"
          onClick={() => toggleNav()}
        >
          {navbarOpen ? "✕" : "☰"}
        </button>
      </div>
      <div
        className={` ${navbarOpen ? "flex" : "hidden"} flex-col px-4 w-full`}
      >
        <div className="input-group flex flex-row items-center justify-between w-full mb-4">
          <input
            type="search"
            className="form-control min-w-0 w-full py-3 pr-0 pl-6 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-50 rounded-bl-lg rounded-tl-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-50 focus:outline-none"
            placeholder="Search for NFTs, collections, artists..."
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn px-8 py-4 bg-gray-50 text-gray-500 font-normal text-base leading-tight uppercase rounded-br-lg rounded-tr-lg border border-solid border-gray-50 hover:bg-gray-50 hover:shadow-lg focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:border-gray-50 focus:ring-0 active:bg-gray-50 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <Search />
          </button>
        </div>
        <div className="flex flex-col items-start gap-8 w-full text-black text-lg font-semibold mt-4 px-4 mb-7">
          <button className="hover:text-themeRed active:text-themeRed focus:text-themeRed">
            <Link to="/">Home</Link>
          </button>
          <button className="hover:text-themeRed focus:text-themeRed active:text-themeRed">
            <Link to="/statistics">Statistics</Link>
          </button>
          <button className="hover:text-themeRed focus:text-themeRed active:text-themeRed">
            <Link to="/stream">Stream</Link>
          </button>
          <button className="hover:text-themeRed focus:text-themeRed active:text-themeRed">
            <Link to="/market">Market Place</Link>
          </button>
          <button className="hover:text-themeRed focus:text-themeRed active:text-themeRed">
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="w-full flex flex-row items-center justify-center pb-8">
          <button className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-110 transition duration-150 ease-in-out">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
