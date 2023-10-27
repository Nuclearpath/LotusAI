import React from "react";
import MainHeader from "../components/MainHeader";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import randomColor from "randomcolor";
import { ImQuotesLeft } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import {VscGraph} from "react-icons/vsc" 
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
 // import Chatbot from "../components/Chatbot";
 function Timingthemarket() {
   const { data: session, status } = useSession();
   const router = useRouter();

   useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/");
     }
   }, [status]);
   const reviews = [
     {
       url: "/human.png",
       comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
     },
     {
       url: "/human.png",
       comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
     },
     {
       url: "/human.png",
       comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
     },
     {
       url: "/human.png",
       comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
     },
     {
       url: "/human.png",
       comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
     },
   ];
   return (
     <div className=" w-full h-screen overflow-y-scroll no-scrollbar">
       <MainHeader page={""}></MainHeader>
       {/* <Chatbot></Chatbot> */}
       <div className="w-full sm:px-12 sm:py-12 px-3 py-6">
         <div className="text-2xl font-header font-medium">
           Timing the Market
         </div>
         <div className="flex sm:w-10/12 w-full py-6 justify-between sm:flex-row flex-col">
           <select className="  z-10  flex-col  bg-custom-yellow  text-white flex  rounded sm:w-64 w-auto px-4 py-2">
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Market Activity
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Pricing Trends
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Pricing Ratios
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Days on Market
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               $ Per Sqft
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Supply And Demand
             </option>
           </select>
           <div className="flex sm:items-center items-start sm:flex-row flex-col">
             <div className="flex bg-custom-yellow px-3 py-2 border-2 text-white rounded-md sm:w-auto w-full">
               <input type="radio" name="act"></input>

               <div>Actual Values</div>
             </div>
             <div className="flex bg-custom-yellow px-3 py-2 border-2 text-white rounded-md sm:w-auto w-full">
               <input type="radio" name="act"></input>

               <div>Change Form</div>
             </div>
             <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
               <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-full">
                 Prev Year
               </option>
               <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-full">
                 Prev Month
               </option>
             </select>
           </div>
         </div>
         <div className="flex sm:w-10/12 w-full  justify-start bg-custom-light-yellow py-3 px-2 rounded-lg rounded-b-none sm:flex-row flex-col sm:space-y-0 space-y-4">
           <button className="sm:px-2 px-0 py-2 bg-custom-yellow text-white rounded-md mr-4">
             Add Metrices
           </button>
           <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded sm:w-64 w-auto">
               Med Sold $/SqFt (Solds)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Avg Sold $/SqFt (Solds)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Avg List $/SqFt (Solds)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Med List $/SqFt (Solds)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Med List $/SqFt (New Listings)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Avg List $/SqFt (New Listings)
             </option>

             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Med List $/SqFt (Active Listings)
             </option>
             <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
               Avg List $/SqFt (Active Listings)
             </option>
           </select>
         </div>
         <div className="w-full flex ">
           {/*  */}
           <div className="shadow sm:w-10/12 w-full">
             <Bar
               datasetIdKey="id"
               data={{
                 labels: [
                   "Aug 2023",
                   "Jun 2023",
                   "Jul 2023",
                   "May 2023",
                   "Feb 2023",
                   "Jan 2023",
                   "Dec 2022",
                   "Nov 2022",
                   "Oct 2022",
                   "Sep 2022",
                 ],
                 datasets: [
                   {
                     id: 1,
                     label: "",
                     focused: true,
                     data: [
                       902, 856, 1041, 1001, 777, 758, 574, 456, 669, 770, 820,
                       935,
                     ],
                     tension: 0.4,
                     backgroundColor: "#FFA921",
                   },
                 ],
               }}
               options={{
                 tooltip: {
                   enabled: false,
                 },
                 scales: {
                   x: {
                     display: true,
                   },
                   y: {
                     scaleLabel: {
                       display: true,
                     },
                   },
                 },
                 legend: {},

                 plugins: {
                   legend: {
                     display: false,
                   },
                 },
               }}
             />
           </div>
           <div className="hidden sm:w-2/12 sm:flex flex-col space-y-1">
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Home Type/Ownership
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Detached: All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: TH</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: Condo/Coop</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 List Price
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$50K to $99,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$100K to $149,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$150K to $199,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$200K to $299,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$300K to $399,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$400K to $499,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$500K to $599,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$600K to $799,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$800K to $999,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$1M to $2,499,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$2.5M to $4,999,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$5,000,000+"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Sold Price
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$50K to $99,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$100K to $149,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$150K to $199,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$200K to $299,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$300K to $399,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$400K to $499,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$500K to $599,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$600K to $799,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$800K to $999,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$1M to $2,499,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$2.5M to $4,999,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$5,000,000+"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Days in market
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 to 10 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"11 to 20 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"21 to 30 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"31 to 60 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"61 to 90 Days"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"91 to 120 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"121 to 180 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"181 to 360 Days"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"361 to 720 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"721+ Days"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Living Area SqFt
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< 800 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"800 to 999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,000 to 1,199 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,200 to 1,399 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,400 to 1,599 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,600 to 1,799 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,800 to 1,999 SqFt"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2,000 to 2,499 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2,500 to 2,999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3,000 to 4,000 SqFt"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4,000 to 4,999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5,000+ SqFt"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bedrooms
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 Bedroom"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,000 to 1,199 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,400 to 1,599 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4 Bedrooms"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"6+ Bedrooms"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bathrooms
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 Bathroom"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5+ Bathrooms"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bank-Mediated
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"All Bank-Mediated"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Foreclosures (REO)"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Short Sales"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Non-Bank-Mediated"}</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="sm:w-10/12 flex sm:flex-row flex-col sm:space-y-0 space-y-3  w-full justify-between   bg-custom-light-yellow py-3 px-2 rounded-lg rounded-t-none">
           <div className="flex space-x-4 sm:w-auto w-full  sm:justify-start justify-center">
             <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
               <VscGraph></VscGraph>
             </button>
             <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
               <BsGraphUp></BsGraphUp>
             </button>
             <button className="text-2xl p-2 bg-custom-yellow text-white rounded-md">
               <AiOutlineMenu></AiOutlineMenu>
             </button>
           </div>
           <div className="sm:flex sm:flex-row flex-col sm:space-x-10 space-x-0 sm:space-y-0 space-y-2 sm:justify-start items-center sm:w-auto w-full">
             <div className="flex sm:auto w-full sm:justify-start justify-center">
               <div className="px-3 py-1 rounded-md  rounded-r-none bg-custom-yellow text-white flex items-center">
                 Show
               </div>
               <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   One Month
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   Three Months
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   Six Months
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   1 year
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   2 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   3 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   4 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   5 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   6 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   7 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   8 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   9 years
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   1 years
                 </option>
               </select>
             </div>
             <div className="flex sm:w-auto w-full justify-center sm:justify-none">
               <div className="px-3 py-1 rounded-md  rounded-r-none bg-custom-yellow text-white flex items-center">
                 View By
               </div>
               <select className="  z-10  flex-col  bg-gray-100  text-black flex  rounded  px-4 py-2">
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   Months
                 </option>
                 <option className="  flex justify-between bg-gray-100 text-black px-4 py-2 items-center  font-Montserrat rounded w-64">
                   Quaters
                 </option>
               </select>
             </div>
           </div>
           <div className="sm:hidden sm:w-2/12 flex flex-col space-y-1">
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Home Type/Ownership
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Detached: All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: TH</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>Attached: Condo/Coop</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 List Price
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$50K to $99,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$100K to $149,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$150K to $199,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$200K to $299,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$300K to $399,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$400K to $499,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$500K to $599,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$600K to $799,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$800K to $999,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$1M to $2,499,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$2.5M to $4,999,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$5,000,000+"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Sold Price
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$50K to $99,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$100K to $149,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$150K to $199,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$200K to $299,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$300K to $399,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$400K to $499,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$500K to $599,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$600K to $799,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$800K to $999,999"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$1M to $2,499,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$2.5M to $4,999,999"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"$5,000,000+"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Days in market
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< $50000"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 to 10 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"11 to 20 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"21 to 30 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"31 to 60 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"61 to 90 Days"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"91 to 120 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"121 to 180 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"181 to 360 Days"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"361 to 720 Days"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"721+ Days"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Living Area SqFt
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"< 800 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"800 to 999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,000 to 1,199 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,200 to 1,399 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,400 to 1,599 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,600 to 1,799 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,800 to 1,999 SqFt"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2,000 to 2,499 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2,500 to 2,999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3,000 to 4,000 SqFt"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4,000 to 4,999 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5,000+ SqFt"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bedrooms
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 Bedroom"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,000 to 1,199 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1,400 to 1,599 SqFt"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4 Bedrooms"}</div>
                 </div>

                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5 Bedrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"6+ Bedrooms"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bathrooms
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"0 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"1 Bathroom"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"2 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"3 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"4 Bathrooms"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"5+ Bathrooms"}</div>
                 </div>
               </div>
             </div>
             <div className="w-full flex flex-col px-3 font-Montserrat">
               <button className="w-full bg-custom-yellow rounded text-white pt-1 peer flex justify-start px-2">
                 Bank-Mediated
               </button>
               <div className="hidden peer-hover:flex flex-col hover:flex">
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>All</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"All Bank-Mediated"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Foreclosures (REO)"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Short Sales"}</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded text-black py-1 flex items-center justify-start px-2">
                   <input
                     type="checkbox"
                     className=" indeterminate:bg-gray-300 border-2 mr-2"
                   />
                   <div>{"Non-Bank-Mediated"}</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* <div className="text-2xl font-Montserrat font-medium py-6">
          Testimonials
        </div>
        <div className="sm:flex-row flex flex-col w-full bg-custom-light-yellow py-10 px-5 h-full items-center relative">
          <div className="absolute  sm:text-3xl text-xl  -top-5 left-10 bg-white p-4 rounded-full border-2 border-custom-yellow">
            <ImQuotesLeft></ImQuotesLeft>
          </div>
          <div className="sm:w-4/12 w-full flex flex-col space-y-4">
            <div className=" font-Montserrat text-3xl w-full flex justify-center">
              Feedback from our clients
            </div>
            <div className="sm:px-12 px-3 font-Montserrat text-custom-grey text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>
          </div>
          <div className="sm:w-8/12 w-full overflow-x-scroll flex sm:flex-row flex-col  sm:space-x-10 space-y-5 no-scrollbar sm:pt-0 pt-5 sm:px-0 px-6">
            {reviews.map((e, i) => {
              return (
                <div
                  key={i}
                  className="sm:w-64 w-full flex shrink-0 flex-col bg-white p-5 rounded-md space-y-5 "
                >
                  <div className="w-full justify-center flex">
                    <img src={e.url}></img>
                  </div>
                  <div className="flex w-full justify-center text-center font-Montserrat font-semibold text-xs">
                    {e.comment}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
       </div>
     </div>
   );
 }

 export default Timingthemarket;
