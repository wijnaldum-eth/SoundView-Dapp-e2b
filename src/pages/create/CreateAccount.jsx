import React from "react";
import { ImageUploadIcon } from "../../icons/ImageUploadIcon";

export const CreateAccount = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-40 sm:px-20 px-6 sm:items-center">
      <div className="flex flex-col sm:flex-row gap-2 items-center w-full justify-start">
        <h1 className="text-left text-black text-2xl sm:text-4xl">
          Create a Muscial NFT{" "}
        </h1>
        <span className="text-base font-semibold text-red-600 sm:px-0 sm:text-base">
          (Asterised options are required to be filled)
        </span>
      </div>
      <form className="flex sm:flex-row flex-col sm:px-0 w-full sm:gap-20 gap-10 sm:items-center justify-center">
        <div className="flex flex-col sm:w-[50%] gap-10">
          <div>
            <h1 className="text-black font-semibold">
              Profile Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that shows on every profile of your NFTs.
            </p>
            <label htmlFor="profile_image" className="profile-image">
              <ImageUploadIcon />
              <input
                type="file"
                id="profile_image"
                name="profile_image"
                accept="image/*"
                required
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Featured Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that will be used on the homepage or any other
              sales platform for NFTs.{" "}
            </p>
            <label htmlFor="featured_image" className="featured-image">
              <ImageUploadIcon />
              <input
                type="file"
                id="featured_image"
                name="featured_image"
                accept="image/*"
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Banner Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that will be used as a banner on every your NFT
              muscial genre here on Soundview or any other platform.
            </p>
            <label htmlFor="banner_image" className="banner-image">
              <ImageUploadIcon />
              <input
                type="file"
                id="banner_image"
                name="banner_image"
                accept="image/*"
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Description <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="description" />
            <p className="text-sm font-light">
              In less than 2000 words, give a detailed description on what your
              NFT is all about.
            </p>
            <textarea
              type="textarea"
              id="description"
              name="description"
              rows="6"
              className="bg-gray-200 rounded-md w-full mt-5"
            ></textarea>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Explicit and Sensitive contents{" "}
              <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              You musical NFT contains explicit contents e.g pornography?
            </p>
            <div className="flex gap-10 mt-3">
              <div>
                <label htmlFor="adult_content">Yes </label>
                <input
                  type="checkbox"
                  id="yes"
                  name="adult_content"
                  value="yes"
                />
              </div>
              <div>
                <label htmlFor="adult_content">No </label>
                <input
                  type="checkbox"
                  id="no"
                  name="adult_content"
                  value="no"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:w-[50%] gap-10">
          <div>
            <h1 className="text-black font-semibold">
              Name <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="name" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Mr. SoundView NFT"
              className="bg-gray-100 rounded-md w-full mt-5 p-3"
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              URL <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="collection_url" />
            <p className="text-sm font-light">
              Your gallery collection URL must be in lowercase letters, numbers,
              hyphens and special characters.
            </p>
            <input
              type="text"
              id="collection_url"
              name="collection_url"
              placeholder="https://soundview.io/genre/hip_hip_rap_music"
              className="bg-gray-100 rounded-md w-full mt-5 p-3"
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Links <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="other_links" />
            <p className="text-sm font-light">
              Provide links for your other communities and websites
            </p>
            <div className="flex flex-col gap-3 mt-5">
              <input
                type="text"
                id="other_links"
                name="website_link"
                placeholder="Website link"
                className="bg-gray-100 rounded-md w-full p-3"
              />
              <input
                type="text"
                id="other_links"
                name="discord_link"
                placeholder="Discord channel link"
                className="bg-gray-100 rounded-md w-full p-3"
              />
              <input
                type="text"
                id="other_links"
                name="medium_links"
                placeholder="Medium link"
                className="bg-gray-100 rounded-md w-full p-3"
              />
              <input
                type="text"
                id="other_links"
                name="telegram_link"
                placeholder="Telegram link"
                className="bg-gray-100 rounded-md w-full p-3"
              />
            </div>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Genre <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="genre" />
            <p className="text-sm font-light">
              Add a genre to help your NFT to be easier to find and access.
            </p>
            <select
              type="text"
              id="genre"
              name="genre"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
            >
              <option value="" selected disabled>
                Add Genre
              </option>
              <option value="latin">Latin</option>
              <option value="techno">Techno</option>
              <option value="double_step">Double step</option>
              <option value="rnb_and_soul">R&B & Soul</option>
              <option value="hiphop_rap">Hip Hop Rap</option>
              <option value="dance_edm">Dance & Edm</option>
            </select>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Payment Tokens <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="payment_token" />
            <p className="text-sm font-light">
              These tokens can be used to buy and sell your created musical
              NFTs.
            </p>
            <input
              type="text"
              id="payment_token"
              name="payment_token"
              placeholder="Mr. SoundView NFT"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Add Royalties <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="royalties" />
            <p className="text-sm font-light">
              Royalties are percentage earnings you get when ever any of your
              musical NFTs are sold. You can add an address where you receive
              all royalties.
            </p>
            <input
              type="text"
              id="royalties"
              name="royalties"
              placeholder="Add wallet address"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Blockchain Ecosystem{" "}
              <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="blockchain" />
            <p className="text-sm font-light">
              Select the blockchain ecosystem where you would love your genre to
              be listed streamed and sell.
            </p>
            <select
              type="text"
              id="blockchain"
              name="blockchain"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
            >
              <option value="ethereum" selected disabled>
                Ethereum
              </option>
              {/* <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option> */}
            </select>
          </div>
        </div>
      </form>
      <button className="mt-6 rounded-lg bg-themeRed p-4 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out sm:w-1/5 ">
        Create NFT
      </button>
    </div>
  );
};
