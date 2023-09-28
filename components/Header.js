import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";
function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className="w-full flex justify-between  px-6 shadow items-center sm:py-0 py-5">
        <div className="">
        <Link href="/" className="flex sm:w-auto ">
          <img
            src="/logo.png"
            className="sm:scale-50 scale-100 h-auto sm:h-24"
          ></img>
        </Link>
        </div>
        <div className="w-1/2 flex sm:justify-between justify-end">
        <div className=" sm:space-x-8 sm:w-1/2   font-Montserrat font-semibold text-base sm:flex hidden sm:justify-between">
          <Link href="">Home</Link>
          <Link href="#about">About</Link>

          <Link href="">Estimate</Link>
          <Link href="#testimonials">Testimonials</Link>
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0, x: 0 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            transition={{ duration: 0.1, delay: 0.01 }}
            className="sm:hidden flex flex-col absolute top-0 right-0 bg-white w-full h-screen z-50 justify-center"
          >
            <div className="absolute top-5 right-5">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-2xl"
              >
                <MdCancel></MdCancel>
              </button>
            </div>
            <div className="flex flex-col w-full justify-between items-center space-y-2 font-semibold font-Montserrat">
              <Link href="">Home</Link>
              <Link href="#about">About</Link>

              <Link href="">Estimate</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="" className="text-custom-yellow">
                Sign In{" "}
              </Link>
              <Link href="" className="text-custom-yellow">
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Header;
