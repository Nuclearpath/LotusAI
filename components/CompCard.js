import React from "react";
import Image from "next/image";
function CompCard({ image, price, area }) {
  return (
    <div className="w-full flex flex-col shadow-lg ">
      <div className="w-full h-[30vh]">
        <Image fill src={image} className="!relative"></Image>
      </div>
      <div className="w-full font-Montserrat font-medium pt-2 text-xl px-2">
        Sold Price Sold ${price}
      </div>
      <div className="w-full font-Montserrat font-normal pt-2 px-2">{area}</div>
      <div className="w-full flex justify-end py-4 px-2">
        <button className="bg-custom-yellow text-white px-5 text-xl py-2 rounded-md">
          select
        </button>
      </div>
    </div>
  );
}

export default CompCard;
