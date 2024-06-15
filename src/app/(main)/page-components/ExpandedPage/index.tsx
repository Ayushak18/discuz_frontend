"use client";

import React, { useState } from "react";

const ExpandedVendorTile = () => {
  const [place, setPlace] = useState("Noida");
  const [budget, setBudget] = useState("Rs 6000");
  const [description, setDescription] = useState("Lorem Ipsum...");
  const [imageSrc, setImageSrc] = useState("/tile.png"); // Default image path

  // Example function to handle dynamic content change
  const handleAccept = () => {
    setPlace("New Place");
    setBudget("Rs 500000");
    setDescription("New description...");
    setImageSrc("./tile.png"); // Change image path dynamically
  };

  return (
    <div className="containerHeader">
      <div className="container bg-white p-0 rounded-tl-2xl rounded-tr-2xl">
        <img
          src={imageSrc}
          alt="Product Banner"
          className="h-100 w-full object-cover"
        />
      </div>
      <div className="container bg-white p-4">
        <div className="content">
          <div className="header flex justify-between items-center mb-4">
            <h1 id="title" className="text-2xl font-semibold">
              Cab Service (OLA) - Demo User
            </h1>
            <div className="info text-right">
              <div className="inline-block">
                <span className="text-gray-500">Place:</span>
                <span
                  id="place"
                  className="border border-black px-3 py-1 rounded font-semibold"
                >
                  {place}
                </span>
              </div>
              <div className="inline-block ml-4">
                <span className="text-gray-500">Budget:</span>{" "}
                <span
                  id="budget"
                  className="border border-black px-3 py-1 rounded font-semibold"
                >
                  {budget}
                </span>
              </div>
            </div>
          </div>
          <p id="description">{description}</p>
          <div className="buttons flex items-center justify-between mt-4">
            <button className="decline bg-black text-white px-4 py-2 rounded mr-2">
              Decline Request
            </button>
            <div className="text-right">
              <button
                className="accept bg-blue-100 text-blue-500 px-4 py-2 rounded mr-2"
                onClick={handleAccept}
              >
                Accept Request
              </button>
              <button className="interest bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Send Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedVendorTile;
