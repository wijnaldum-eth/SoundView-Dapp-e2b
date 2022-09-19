import React from "react";
import { Outlet, Link } from "react-router-dom";
import { SoundViewLogo } from "../../icons/Logo";
import { Search } from "../../icons/Search";

export const Navigation = () => {
  return (
    <>
      <div className="sm:h-32 sm:w-full flex flex-row items-end shadow-sm justify-between p-[45px] pt-28 sm:fixed z-50 bg-white">
        <div className="w-[15%]">
          <SoundViewLogo />
        </div>
        <div className="w-[48%]">
          <div className="mb-3">
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
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly w-[25%] text-black font-semibold mb-7">
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
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="w-[12%]">
          <button className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-110 transition duration-150 ease-in-out">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="h-[100vh]">
        <Outlet />
      </div>
    </>
  );
};
