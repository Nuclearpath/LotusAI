import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
// import { motion } from "framer-motion";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import DropdownBtn from "./Dropdown";
function MainHeader({page}) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const { data: session } = useSession();
  //  if (session) {
  //    console.log(session.user);
  //  }
  return (
    <div className="z-10">
      <div className="w-full flex justify-between  px-6 shadow items-center lg:py-0 py-5 ">
        <Link href="/" className="flex lg:w-56 w-32 lg:px-6 px-1 py-1 lg:py-4 ">
          <Image
            src="/logo.png"
            fill
            className="!relative object-contain"
            alt={"img"}
            // className=" lg:object-cover object-contain !relative lg:scale-50 scale-100 !h-auto lg:h-24"
          />
        </Link>

        <div className=" justify-between items-center space-x-8 font-header font-semibold text-base lg:flex hidden">
          {session && page !== "landing" && <Link href="/dashboard">My Pad</Link>}
          {session && page !== "landing" && <Link href="/roi">ROI</Link>}
          {session && page !== "landing" && <Link href="/timingthemarket">Timing the Market</Link>}
          {session && page !== "landing" && <Link href="/rentvssale">Rent Vs Sell</Link>}
          {session && page !== "landing" && <DropdownBtn />}
        </div>
        <div className="flex  lg:hidden space-x-3">
          <div className="w-10 h-10">
            {session && session.user.image && (
              <Image
                src={session.user.image}
                className="!relative rounded-full"
                fill
                alt={"img"}
              ></Image>
            )}
          </div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="lg:hidden flex text-xl text-custom-yellow border-2 p-2 rounded-md border-custom-light-yellow shadow-lg "
          >
            <AiOutlineMenu></AiOutlineMenu>
          </button>
        </div>
        <div className="text-custom-yellow font-header font-normal text-base lg:flex hidden">
          {/* <Link href="">Sign In </Link> / <Link href="">Register</Link> */}
          <div className="text-4xl text-gray-950 relative">
            {session && (
              <Popover>
                <PopoverTrigger>
                  <button className="peer w-10 h-10">
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        fill
                        className="w-10 h-10 rounded-full !relative"
                        alt={"img"}
                      ></Image>
                    ) : (
                      <BsPersonCircle></BsPersonCircle>
                    )}
                  </button>
                </PopoverTrigger>

                <PopoverContent className="flex  flex-col  bg-white font-header items-end text-lg px-0 space-y-2 shadow-2xl">
                  <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                    <Link href="">My Properties</Link>
                  </div>
                  {/* <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                    <Link href="">Chat with our agents</Link>
                  </div> */}
                  <div className=" border-black w-full flex justify-end hover:bg-custom-verylight-yellow px-2 py-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
            {!session && (
              <button
                className="text-lg font-semibold text-custom-yellow"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {showSidebar && (
          <div
            // initial={{ scale: 0.5, opacity: 0, x: 0 }}
            // animate={{ scale: 1, opacity: 1, x: 1 }}
            // transition={{ duration: 0.1, delay: 0.01 }}
            className="lg:hidden flex flex-col absolute top-0 right-0 bg-white w-full h-screen z-50 justify-center"
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
              {session && <Link href="/dashboard">My Pad</Link>}
              {session && <Link href="/roi">ROI</Link>}

              {session && (
                <Link href="/timingthemarket">Timing the market</Link>
              )}
              {session && <Link href="/rentvssale">Rent Vs Sell</Link>}
              {session && <Link href="/salebyowner">For Sale By Owner</Link>}
              {!session && (
                <button
                  className="text-lg font-semibold text-custom-yellow"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/login");
                  }}
                >
                  Login
                </button>
              )}
              {session && (
                <button
                  className="text-lg font-semibold text-custom-yellow"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Logout
                </button>
              )}

              {/* <Link href="" className="text-custom-yellow">
                Sign In{" "}
              </Link>
              <Link href="" className="text-custom-yellow">
                Register
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainHeader;