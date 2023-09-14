import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-full  justify-between sm:py-6 py-3 flex items-center">
      <div className=" justify-between space-x-7 font-Montserrat font-semibold text-base  hidden sm:flex">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Testimonials</Link>
        <Link href="">Estimate</Link>
      </div>

      <Link href="/" className="sm:hidden flex w-1/2">
        <img src="/logo.png" className="scale-100 h-auto"></img>
      </Link>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="sm:hidden flex text-xl text-custom-yellow border-2 p-2 rounded-md border-custom-light-yellow shadow-lg"
      >
        <AiOutlineMenu></AiOutlineMenu>
      </button>
      <div className="text-custom-yellow font-Montserrat font-normal text-base hidden sm:block">
        <Link href="">Sign In </Link> / <Link href="">Register</Link>
      </div>
      {showSidebar && (
        <div className="sm:hidden flex flex-col absolute top-0 right-0 bg-white w-1/2 h-96">
          <div className="w-full flex justify-end py-3">
            <button onClick={() => setShowSidebar(false)} className="text-2xl">
              <MdCancel></MdCancel>
            </button>
          </div>
          <div className="flex flex-col w-full justify-between items-center space-y-2 font-semibold font-Montserrat">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Testimonials</Link>
            <Link href="">Estimate</Link>
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
  );
}

export default Header;
