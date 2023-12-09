import React from "react";
import MainHeader from "../components/MainHeader";
import RentVsSellCalculator from "../components/RentVsSellCalculator";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CenterMode from "../components/CenterSlider";
import { Checkbox } from "@nextui-org/react";
// 
function Rentvssale() {
  const { data: session, status } = useSession();
  const router = useRouter();


  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/");
  //   }
  // }, [status]);
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="px-3 sm:px-12 py-6 sm:py-12">
        <div className="w-full sm:text-3xl text-2xl font-header ">
          Rent Vs Sell Calculator
        </div>
        <p>
        Dont know how much your house would rent for? We can help.
        </p>
   
       <div>
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header ">
        How much your home would rent for
        </div>
        <RentVsSellCalculator></RentVsSellCalculator>
        </div>
      </div>
      <CenterMode/>
    </div>
  );
}

export default Rentvssale;
