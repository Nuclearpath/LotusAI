import React from "react";
import MainHeader from "../components/MainHeader";
import RentVsSellCalculator from "../components/RentVsSellCalculator";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CenterMode from "../components/CenterSlider";
import { Checkbox } from "@nextui-org/react";
// import Chatbot from "../components/Chatbot";
function Rentvssale() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSelected, setIsSelected] = React.useState(false);
  const [isSelected2, setIsSelected2] = React.useState(false);
  const [isSelected3, setIsSelected3] = React.useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="px-3 sm:px-12 py-6 sm:py-12">
        <div className="w-full sm:text-3xl text-2xl font-header ">
          Rent Vs Sell Calculator
        </div>
        <p>
        Dont know how much your house would rent for? We can help
        </p>
        <ol className="mt-8">
        <li className="w-full flex items-center space-x-4">
         

              <div>
              Do you plan to ever come back to your home?
                </div>
                {/* isSelected={isSelected} onValueChange={setIsSelected} */}
                    <Checkbox  color="warning" size="md" radius="none" isSelected={isSelected} onValueChange={()=>setIsSelected(o=>!o)}>Yes</Checkbox>
               <Checkbox  color="warning" size="md" radius="none" isSelected={!isSelected} onValueChange={()=>setIsSelected(o=>!o)}>No</Checkbox>
              </li>
              <li className="w-full flex items-center space-x-4">
              <div>
              Do you ever plan to gift your home to a family member?
                </div>
                <Checkbox  color="warning" size="md" radius="none" isSelected={isSelected2} onValueChange={()=>setIsSelected2(o=>!o)}>Yes</Checkbox>
               <Checkbox  color="warning" size="md" radius="none" isSelected={!isSelected2} onValueChange={()=>setIsSelected2(o=>!o)}>No</Checkbox>
              </li>
              <li className="w-full flex items-center space-x-4">
              <div>
              Have you ever been a landlord?
                </div>
                <Checkbox  color="warning" size="md" radius="none" isSelected={isSelected3} onValueChange={()=>setIsSelected3(o=>!o)}>Yes</Checkbox>
               <Checkbox  color="warning" size="md" radius="none" isSelected={!isSelected3} onValueChange={()=>setIsSelected3(o=>!o)}>No</Checkbox>
              </li>
        </ol>
       { isSelected || isSelected2 || isSelected3 ?<div>
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header ">
        How much your home would rent for
        </div>
        <RentVsSellCalculator></RentVsSellCalculator>
        </div>:null}
      </div>
      <CenterMode/>
    </div>
  );
}

export default Rentvssale;
