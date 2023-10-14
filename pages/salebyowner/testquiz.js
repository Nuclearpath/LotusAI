import React from "react";
import MainHeader from "./../../components/MainHeader";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";
// import Chatbot from "../../components/Chatbot";
import Link from "next/link";
import Image from "next/image";
import {BsChevronRight} from "react-icons/bs"
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
 function Testquiz() {
   const { data: session } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (session) {
     } else {
       router.push("/");
     }
   }, [session]);
   return (
     <div>
       {/* <Chatbot></Chatbot> */}
       <MainHeader></MainHeader>
       <div className="relative sm:h-84 h-72">
         <Image
           src="/Rect.png"
           alt="rect"
           className="top-0 absolute !w-full !sm:h-auto !h-48 z-10"
           fill
         />
         <div className="z-20 absolute sm:text-xl text-lg text-white sm:px-10 px-2 sm:py-5 py-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua?
         </div>
       </div>
       <div className="w-full grid grid-cols-1 px-12 gap-4 sm:grid-cols-2">
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 1
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 2
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 3
         </button>
         <button className=" border-2 rounded-lg border-black py-3">
           Answer 4
         </button>
       </div>
       <div className="w-full py-5 flex justify-center">
         <Link
           href="/salebyowner/quizSuccess"
           className="bg-custom-yellow text-white px-4 py-2 rounded-md font-Montserrat"
         >
           Submit
         </Link>
       </div>
       <button className="fixed bottom-10 right-10 bg-custom-yellow text-white text-xl rounded-full p-5">
         <BsChevronRight></BsChevronRight>
       </button>
       {/* <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Real Estate IQ
        </div>
        <div className="w-full flex justify-center">
          <div className="py-12 sm:w-1/2 w-full font-Montserrat px-12 flex flex-col space-y-12 ">
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 1{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              {" "}
              Answer 2{" "}
            </button>
            <button className="w-full border-2 border-gray-950 rounded-lg py-6">
              Answer 3{" "}
            </button>
            <div className="w-full justify-center  space-x-4 flex">
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronLeftCircle></BiSolidChevronLeftCircle>
              </button>
              <button className="text-6xl text-custom-yellow">
                <BiSolidChevronRightCircle></BiSolidChevronRightCircle>
              </button>
            </div>
          </div>
        </div>
      </div> */}
     </div>
   );
 }

 export default Testquiz;
