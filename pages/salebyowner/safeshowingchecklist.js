import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
 import { useRouter } from "next/router";
 import { useEffect } from "react";
import Image from "next/image";
 // import Chatbot from "../../components/Chatbot";
 function Safeshowingchecklist() {
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
       <div 
      //  className="sm:px-12 px-3"
      className="w-full h-[85-vh] grid sm:grid-cols-2 grid-cols-1"
       >
        <div className="flex flex-col items-center px-3">
        <div className="my-5 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header">
        Safe Showing Checklist
        </div>
        <div className="sm:h-[75vh] h-[50vh] mt-4">
           <Image src="/safe showing.png" fill className="!relative" alt="..."></Image>
         </div>
         </div>
         <div className="sm:px-12 px-3 h-[85vh] sm:overflow-y-scroll overflow-y-visible no-scrollbar">
         <div className="py-6 w-full font-Montserrat">
           <div className="font-header w-full justify-center sm:text-xl text-lg ">
             To securely show your house for sale, it{"'"}s essential to protect
             your property, personal belongings, and ensure the safety of
             potential buyers. Here are some tips for safe secure showings:
           </div>
           <ol className="list-decimal list-inside">
             <li>
               Pre-screen potential buyers to ensure they are genuinely
               interested and financially qualified to purchase your home.
             </li>
             <li>
               Ask potential buyers to provide identification before scheduling
               a showing to create a record of who enters your property.{" "}
             </li>
             <li>
               Limit access: Allow showings only during specific hours and avoid
               late-night or unscheduled visits.{" "}
             </li>
             <li>
               If possible, accompany potential buyers during the showing,
               especially buyers without agents.
             </li>
             <li>
               {" "}
               Keep your valuable items, such as jewelry, cash, and important
               documents, locked away or taken with you during showings.{" "}
             </li>
             <li>
               Take any prescription medications out of medicine cabinets or
               drawers to prevent theft.{" "}
             </li>
             <li>
               {" "}
               Protect sensitive personal information such as bills, mail, or
               any documents containing personal details.{" "}
             </li>
             <li>
               Consider installing a security system with cameras to monitor the
               property during showings and deter any potential theft.{" "}
             </li>
             <li>
               Ensure all doors and windows are securely locked after the
               showing to prevent unauthorized access.
             </li>
             <li>
               If you have smart home devices like cameras or voice assistants,
               ensure they are properly configured to protect your privacy
               during showings.{" "}
             </li>
             <li>
               Don{"'"}t indavertently hamper your negotiating position by
               disclosing the reason you are selling or the terms or price you
               will accept.{" "}
             </li>
             <li>
               {" "}
               After each showing, follow up with the buyer or buyer{"'"}s agent
               to get feedback, answer questions, and encourage offers.
             </li>
             <li>
               {" "}
               Make sure you have adequate insurance coverage for your property,
               including liability coverage for potential accidents during
               showings. Remember, your safety and the security of your property
               are of utmost importance during the home selling process.
               Implementing these security tips will help protect your interests
               while showcasing your home to potential buyers.
             </li>
             {/* <li> Add a fresh doormat.</li>
             <li>
               Add a pot or two of flowers at the front of the house and remove
               any dead plants or empty planters{" "}
             </li> */}
             <li>
               Pro tip: Remove any other items from the front yard— storage
               items, lawn care products should be removed.toys,
             </li>
           </ol>
         </div>
       </div>
     </div>
     </div>
   );
 }

 export default Safeshowingchecklist;
