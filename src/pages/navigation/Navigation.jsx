import React from "react";
import { Outlet, Link } from "react-router-dom";
import soundviewlogo from "../../icons/soundviewlogo.png";
import { Search } from "../../icons/Search";
import { MobileNavigation } from "./MobileNavigation";
import { Discord } from "../../icons/Discord";
import { Telegram } from "../../icons/Telegram";
import soundviewwhite from "../../icons/soundviewwhite.png";
import { useEffect } from "react";

export const Navigation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <MobileNavigation />
      <div className="sm:h-32 hidden sm:w-full sm:flex flex-row items-end shadow-sm justify-between sm:p-[45px] pt-28 sm:fixed z-50 bg-white">
        <div className="w-[15%]">
          <img
            src={soundviewlogo}
            alt="soundview logo"
            className="sm:w-[70%] sm:pt-8 sm:h-auto"
          />
        </div>
        <div className="w-[38%]">
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
        <div className="flex flex-row items-center justify-evenly w-[35%] text-black font-semibold mb-7">
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed active:text-themeRed focus:text-themeRed"
          >
            <Link to="/">Home</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
          >
            <Link to="/statistics">Statistics</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
          >
            <Link to="/stream">Stream</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
          >
            <Link to="/market">Market Place</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
          >
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="w-[12%]">
          <button className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
      <footer className=" bg-themeRed text-white p-8 sm:p-12 w-full">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[30%] w-full sm:mr-56">
            <img
              src={soundviewwhite}
              alt="whitelogo"
              className="sm:w-[200px] w-[100px] h-auto"
            />
            <h1 className="text-bold text-4xl mb-4 sm:mb-6">Soundview</h1>
            <p className="sm:mb-6 mb-2 text-xs font-extralight text-justify">
              SoundView is the finest Afro centered Music NFT Marketplace where
              fans can stream to earn along side their favorite artist
            </p>
            <h1 className="sm:pt-6 pt-3">Join our various communities</h1>
            <div className="flex flex-row gap-1 mt-1">
              <a href="https://discord.gg/ZGHU9An8" target="blank_">
                <Discord />
              </a>
              <a href="https://t.me/soundview" target="blank_">
                <Telegram />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-14 sm:mt-20 mt-10 text-white">
            <div className="flex flex-row sm:gap-24 w-full justify-between text-white">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                  <h1 className="text-bold text-xl">Market</h1>{" "}
                  <h1 className="text-bold text-xl">Place</h1>
                </div>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market">All NFTs</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrobeats-nft">Afrobeats</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrofusion-nft">Afrofusion</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrotrap-nft">AfroTrap</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afropop-nft">Afro pop</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/hiphop-nft">Hip hop</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/gospel-nft">Gospel</Link>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                  <h1 className="text-bold text-xl">My</h1>{" "}
                  <h1 className="text-bold text-xl"> Account</h1>
                </div>
                <p className="text-xs font-extralight">Profile</p>
                <p className="text-xs font-extralight">Favorite</p>
                <p className="text-xs font-extralight">Watch list</p>
                <p className="text-xs font-extralight">My Collections</p>
              </div>
            </div>
            <div className="flex flex-row sm:gap-24 w-full justify-between text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-bold text-xl">Partners</h1>
                <p className="text-xs font-extralight">
                  Decentralized <br /> Exchange LTD
                </p>
                <p className="text-xs font-extralight">World View Records</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-bold text-xl">Company</h1>
                <p className="text-xs font-extralight">Docs</p>
                <p className="text-xs font-extralight">Careers</p>
                <p className="text-xs font-extralight">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-8 pt-3" />
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-xs font-extralight">
            ©️All copyrights are reserved
          </p>
          <div className="flex flex-row gap-4">
            <p className="text-xs font-extralight">Privacy policy</p>
            <p className="text-xs font-extralight">Terms of service</p>
          </div>
        </div>
      </footer>
    </>
  );
};
