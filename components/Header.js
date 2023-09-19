import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
function Header() {
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
        <div className=" sm:justify-evenly grow  font-Montserrat font-semibold text-base sm:flex hidden">
          <Link href="">Home</Link>
          <Link href="">About</Link>

          <Link href="">Estimate</Link>
          <Link href="">Testimonials</Link>
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
          <div className="sm:hidden flex flex-col absolute top-0 right-0 bg-white w-1/2 h-96 z-50">
            <div className="w-full flex justify-end py-3">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-2xl"
              >
                <MdCancel></MdCancel>
              </button>
            </div>
            <div className="flex flex-col w-full justify-between items-center space-y-2 font-semibold font-Montserrat">
              <Link href="">Home</Link>
              <Link href="">About</Link>

              <Link href="">Estimate</Link>
              <Link href="">Testimonials</Link>
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

export default Header;
