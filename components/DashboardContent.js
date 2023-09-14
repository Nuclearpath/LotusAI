import React from "react";
import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
function DashboardContent(props) {
  const {
    house,
    value,
    decription,
    location,
    houseNo,
    estimate,
    avergae,
    sales,
  } = {
    ...props,
  };
  return (
    <>
      <div className="w-full shadow flex flex-col items-start px-5 py-5 my-4 rounded-md font-Montserrat">
        <div className="w-full flex justify-start font-semibold items-center">
          Estimated Value for {house}{" "}
          <span className="text-custom-yellow text-xl pl-5 font-Montserrat">
            $ {value}
          </span>
        </div>
        <div className="w-full flex justify-start ">{decription}</div>
        <div className="w-full flex justify-start ">{house}</div>
        <div className="w-full flex justify-start ">{location}</div>
        <div className="w-full flex justify-start ">{houseNo}</div>
        <Link className="text-gray-500 underline" href="/editfacts">
          Edit facts
        </Link>
      </div>
      <div className="pt-24 grid gap-10 grid-cols-3 ">
        <div className="w-full shadow flex justify-center flex-col items-center py-10 space-y-5">
          <div className="text-custom-yellow">Our Estimate</div>
          <div className="flex justify-center space-x-5 text-xl w-full font-semibold items-center">
            <BsGraphUpArrow className="scale-150 text-custom-yellow"></BsGraphUpArrow>
            <div>${estimate}</div>
          </div>
        </div>
        <div className="w-full shadow flex justify-center flex-col items-center py-10 space-y-5">
          <div className="text-custom-yellow">Sale Activity</div>
          <div className="flex justify-center space-x-5 text-xl w-full font-semibold items-center">
            <AiFillHome className="scale-150 text-custom-yellow"></AiFillHome>
            <div>{sales} homes sold</div>
          </div>
        </div>
        <div className="w-full shadow flex justify-center flex-col items-center py-10 space-y-5">
          <div className="text-custom-yellow ">Average Sale Price</div>
          <div className="flex justify-center space-x-5 text-xl w-full font-semibold items-center">
            <AiFillDollarCircle className="scale-150 text-custom-yellow"></AiFillDollarCircle>
            <div>${estimate}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardContent;
