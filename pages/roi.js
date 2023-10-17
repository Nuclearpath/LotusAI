import React from "react";
import MainHeader from "../components/MainHeader";
import Link from "next/link";
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
 import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   useDisclosure,
 } from "@nextui-org/react";
 import Loader from "./../components/Loader";
 import { TiTick } from "react-icons/ti";

 // import Chatbot from "../components/Chatbot";
 function Roi() {
   const houseData = {
     house: "20 S Huntington Ave",
     value: 2732900,
     decription: "2BHK , 1 Bath",
     location: "Boston",
     houseNo: "MA - 02446",
     estimate: 2732900,
     avergae: 2342900,
     sales: 7,
   };
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   const data = [
     {
       title: "MOST VALUABLE",
       propties: [
         "Stainless Steel Appliances",
         "Natural Gas Utilities",
         "Backyard",
         "Basement",
         "Vinyl Sliding",
       ],
     },
     {
       title: "MOST POPULAR",
       propties: ["Office", "Fireplace", "Deck", "Family Room", "View"],
     },
   ];
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
       <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
         <ModalContent>
           {(onClose) => (
             <>
               <div className="h-full w-full flex flex-col justify-center items-center py-10">
                 <div className="text-5xl bg-green-500 p-5 rounded-full text-white ">
                   <TiTick></TiTick>
                 </div>
                 <div className="pt-4 text-green-500 text-2xl font-Montserrat font-semibold">
                   Updates Saved
                 </div>
                 <div className="text-xl font-Montserrat font-medium">
                   Your New Estimate is{" "}
                   <span className="font-semibold">$2,732,900</span>
                 </div>
                 <Link className="font-Montserrat underline pt-4" href="/">
                   Click here to view updated dashboard
                 </Link>
               </div>
             </>
           )}
         </ModalContent>
       </Modal>
       {/* <Chatbot></Chatbot> */}
       <MainHeader></MainHeader>
       <div className="w-full sm:px-12 px-3">
         <div className="sm:pt-6 pt-3 flex justify-start sm:text-2xl text-2xl font-header w-full">
           Top 10 home features in the U.S. that add value
         </div>
         <div className="grid sm:grid-cols-2 grid-cols-1 pt-3">
           {data &&
             data.map((e, i) => {
               return (
                 <div
                   key={i}
                   className="flex flex-col 2xl font-Montserrat w-full items-start px-3 sm:py-10 py-4"
                 >
                   <div className=" border-2 border-gray-700 py-10 sm:px-4 px-2 rounded-lg md:w-10/12 w-full flex justify-center flex-col items-center space-y-5">
                     <div className="font-semibold font-header">{e.title}</div>
                     <div className="flex w-full border-b-2 border-gray-600"></div>
                     <ol className="list-decimal space-y-5  w-full list-inside ">
                       {e.propties.map((k, j) => {
                         return (
                           <li
                             className="w-full odd:bg-custom-verylight-yellow  px-4 py-3  shadow rounded font-semibold"
                             key={j}
                           >
                             {k}
                           </li>
                         );
                       })}
                     </ol>
                   </div>
                 </div>
               );
             })}
         </div>

         <div className="w-full shadow flex flex-col items-start sm:px-5 sm:py-5 px-1 py-2 my-4 rounded-md font-Montserrat">
           <div className="w-full sm:flex sm:flex-row  justify-start font-semibold items-center flex-col">
             Estimated Value for {houseData.house}{" "}
             <span className="text-custom-yellow sm:text-xl text-base sm:pl-5 pl-0 font-Montserrat sm:block flex">
               $ {houseData.value}
             </span>
           </div>
           <div className="w-full flex justify-start ">
             {houseData.decription}
           </div>
           <div className="w-full flex justify-start ">{houseData.house}</div>
           <div className="w-full flex justify-start ">
             {houseData.location}
           </div>
           <div className="w-full flex justify-start ">{houseData.houseNo}</div>
           <button
             className="text-gray-500 underline"
             //  href="/editfacts"
             onClick={onOpen}
           >
             Get revised estimate
           </button>
         </div>
       </div>
     </div>
   );
 }

 export default Roi;
