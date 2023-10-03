import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
function MainHeader() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className="w-full flex justify-between  px-6 shadow items-center sm:py-0 py-5">
      <Link href="/" className="flex sm:w-56 w-32 sm:px-6 px-1 py-1 sm:py-4 ">
          <Image
            src="/logo.png"
          fill
            className="!relative object-contain"
            // className=" sm:object-cover object-contain !relative sm:scale-50 scale-100 !h-auto sm:h-24"
          />
        </Link>

        <div className=" justify-between space-x-8 font-Montserrat font-semibold text-base sm:flex hidden">
          <Link href="/dashboard">What’s my pad worth?</Link>
          <Link href="/roi">ROI</Link>

          <Link href="/timingthemarket">Timing the market</Link>
          <Link href="/rentvssale">Rent Vs Sell</Link>
          <Link href="/salebyowner">Sale By Owner</Link>
        </div>
        
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="sm:hidden flex text-xl text-custom-yellow border-2 p-2 rounded-md border-custom-light-yellow shadow-lg "
        >
          <AiOutlineMenu></AiOutlineMenu>
        </button>
        <div className="text-custom-yellow font-Montserrat font-normal text-base sm:flex hidden">
          {/* <Link href="">Sign In </Link> / <Link href="">Register</Link> */}
          <div className="text-4xl text-gray-950 relative">
          <Popover>
            <PopoverTrigger>
            <button className="peer">
              <BsPersonCircle className=""></BsPersonCircle>
            </button>
            </PopoverTrigger>
            
            <PopoverContent className="flex  flex-col  bg-white font-Montserrat items-end text-lg px-0 space-y-2 shadow-2xl">
              <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                <Link href="">Your Listings</Link>
              </div>
              <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                <Link href="">Chat with our agents</Link>
              </div>
              <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                <Link href="">Sign Out</Link>
              </div>
            
            </PopoverContent>
            </Popover>
          </div>
        </div>
       
        {showSidebar && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, x: 0 }}
            animate={{ scale: 1, opacity: 1, x: 1 }}
            transition={{ duration: 0.1, delay: 0.01 }}
            className="sm:hidden flex flex-col absolute top-0 right-0 bg-white w-full h-screen z-50 justify-center"
          >
            <div className="w-full flex justify-end py-3 absolute top-0 right-3">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-2xl"
              >
                <MdCancel></MdCancel>
              </button>
            </div>
            <div className="flex flex-col w-full justify-between items-center space-y-2 font-semibold font-Montserrat">
              <Link href="/dashboard">What’s my pad worth?</Link>
              <Link href="/roi">ROI</Link>

              <Link href="/timingthemarket">Timing the market</Link>
              <Link href="/rentvssale">Rent Vs Sell</Link>
              <Link href="/salebyowner">Sale By Owner</Link>
              {/* <Link href="" className="text-custom-yellow">
                Sign In{" "}
              </Link>
              <Link href="" className="text-custom-yellow">
                Register
              </Link> */}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
