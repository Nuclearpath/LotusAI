import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
 import Image from "next/image";
//  import { motion } from "framer-motion";
 // import Chatbot from "../../components/Chatbot";
 function Pricing() {
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/");
     }
   }, [status]);
   return (
     <div>
       {/* <Chatbot></Chatbot> */}
       <MainHeader page={""}></MainHeader>
       <div className="w-full h-[85-vh] grid sm:grid-cols-2 grid-cols-1 overflow-x-hidden">
         <div className="sm:h-[85vh] h-[50vh] mt-4">
           <Image src="/FSBO pricing.png" fill className="!relative" alt="..."/>
         </div>
         <div
          //  initial={{
          //    x: "100%",
          //    opacity: 0,
          //  }}
          //  animate={{
          //    x: "0%",
          //    opacity: 1,
          //  }}
          //  transition={{ duration: 0.5 }}
         >
           <div className="m:px-12 px-3 h-[85vh] sm:overflow-y-scroll overflow-y-visible no-scrollbar">
             <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header ">
               Pricing
             </div>

             <div className="py-6 w-full font-header">
               <div className="font-semibold">BUYERS IN YOUR MARKET</div>
               <ul className="list-disc list-inside font-Montserrat">
                 <li>
                   Buyers are more educated, enlightened, and experienced than
                   ever before. Many have made offers on homes and have looked
                   extensively for properties.
                 </li>
                 <li>
                   {" "}
                   Buyers are saavy about pricing — They know when a home is
                   priced improperly.
                 </li>
                 <li>
                   {" "}
                   Buyers expect a top-notch product that shows perfectly.
                 </li>
                 <li>
                   {" "}
                   Homes needed to be made to show perfectly for the debut day
                   on the market.
                 </li>
               </ul>
             </div>
             <div className="py-6 w-full font-Montserrat">
               <div className="font-semibold font-header">
                 IF YOU OVERPRICE YOUR HOME:
               </div>
               <ol className="list-disc list-inside">
                 <li>
                   It makes other homes more attractive and can actually help
                   sell the competition
                 </li>
                 <li> It will be shown to fewer prospective buyers</li>
                 <li> Fewer prospects will respond to the advertising</li>
                 <li> You may lose buyers who are willing to negotiate</li>
               </ol>
             </div>
             <div className="py-6 w-full font-Montserrat">
               <div className="font-semibold">
                 PRICING YOUR HOME PROPERLY TO ATTRACT BUYERS:
               </div>
               <p>
                 A Competitive Market Analysis (CMA) is essential to determine
                 the value of residential property. Location and characteristics
                 of the property are key elements in determining value.
                 Therefore, the basis for valuation of your property is similar
                 properties in your area. The CMA takes into account the amount
                 received from the recent sales of competitive properties as
                 well as the quantity and quality of competitive properties
                 currently on the market. The desired end result, of course, is
                 to find the price that attracts a willing and able buyer in a
                 reasonable period of time. Once the value of your home has been
                 determined, you can decide on an offering price that will
                 achieve your goals. Generally, the price should not exceed the
                 value by more than 5% or potential buyers may not even make
                 offers. Naturally, if you want to sell quickly your asking
                 price should be very near the value.
               </p>
               <div className=" flex flex-col justify-between"> </div>
             </div>
             <div className="py-6 w-full font-Montserrat">
               <div className="font-semibold font-header">PRICING TO SELL</div>
               <div className="">
                 The following are a few things to keep in mind about pricing:
               </div>
               <ol className="list-disc list-inside">
                 <li>
                   Realistic pricing will achieve a maximum price in a
                   reasonable amount of time,
                 </li>
                 <li>
                   Your cost or profit desire is irrelevant. The market
                   determines the price.
                 </li>
                 <li>
                   The costs of improvements are almost always more than the
                   added value.
                 </li>
                 <li>
                   Houses that remain on the market for a long time tend to not
                   be shown.
                 </li>
                 <li>
                   A house that is priced right from the beginning achieves the
                   highest proceeds
                 </li>
               </ol>
             </div>
             <div className="py-6 w-full font-Montserrat">
               <div className="font-semibold font-header">
                 FOR SALE BY OWNER?
               </div>
               <div className="">
                 Consider the following statistics and information:
               </div>

               <ol className="list-disc list-inside">
                 <li>
                   The average Realtor-assisted home sale realizes a 16% higher
                   sale price than does a FSBO. Is that 6% commission worth it?
                   You do the math.
                 </li>
                 <li>
                   {" "}
                   87% of all home sales are a direct result of Realtor contacts
                   and marketing.“FSBOs often end up showing a home to such a
                   small universe of buyers that they don’t realize how much
                 </li>
                 <li>
                   {" "}
                   more they could get if they exposed the property to all the
                   interested buyers out there.”
                 </li>
                 <li>
                   {" "}
                   Buyers are more market-savvy than ever before - they expect a
                   FSBO house to be priced at least 3-6% below the comparable
                   sales, since they know you plan to keep the commission amount
                   you would be building into the price had you chosen listing
                   representation.
                 </li>
                 <li>
                   {" "}
                   Improper pricing is currently the number one problem
                   encountered by FSBO’s. Just knowing what homes in your
                   neighborhood are selling for is not enough.
                 </li>
                 <li>
                   {" "}
                   Getting a contract on your house is the easy part - keeping
                   track of and completing the inspections, contingencies, and
                   deadlines that come after the contract ensures your home sale
                   makes it to the settlement table.
                 </li>
                 <li>
                   “Unrepresented sellers have a median household income of only
                   11% less than that of sellers who use an agent from the
                   get-go, but FSBO’s homes sell for 25% less.”
                 </li>
               </ol>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }

 export default Pricing;
