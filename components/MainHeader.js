import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
function MainHeader() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className="w-full flex justify-between  px-6 shadow items-center sm:py-0 py-5">
        <Link href="/" className="flex sm:w-auto w-1/2">
          <img
            src="/logo.png"
            className="sm:scale-50 scale-100 h-auto sm:h-24"
          ></img>
        </Link>
        <div className=" justify-between space-x-10 font-Montserrat font-semibold text-base sm:flex hidden">
          <Link href="">What’s my pad worth?</Link>
          <Link href="">ROI</Link>

          <Link href="">Timing the market</Link>
          <Link href="">Rent Vs Sell</Link>
          <Link href="">Sale By Owner</Link>
        </div>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="sm:hidden flex text-xl text-custom-yellow border-2 p-2 rounded-md border-custom-light-yellow shadow-lg"
        >
          <AiOutlineMenu></AiOutlineMenu>
        </button>
        <div className="text-custom-yellow font-Montserrat font-normal text-base sm:flex hidden">
          <Link href="">Sign In </Link> / <Link href="">Register</Link>
        </div>
        {showSidebar && (
          <div className="sm:hidden flex flex-col absolute top-0 right-0 bg-white w-1/2 h-96">
            <div className="w-full flex justify-end py-3">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-2xl"
              >
                <MdCancel></MdCancel>
              </button>
            </div>
            <div className="flex flex-col w-full justify-between items-center space-y-2 font-semibold font-Montserrat">
              <Link href="">What’s my pad worth?</Link>
              <Link href="">ROI</Link>

              <Link href="">Timing the market</Link>
              <Link href="">Rent Vs Sell</Link>
              <Link href="">Sale By Owner</Link>
              <Link href="" className="text-custom-yellow">
                Sign In{" "}
              </Link>
              <Link href="" className="text-custom-yellow">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
