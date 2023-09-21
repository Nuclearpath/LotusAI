import React from "react";
import MainHeader from "../components/MainHeader";
import RentVsSellCalculator from "../components/RentVsSellCalculator";
function rentvssale() {
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="px-3 sm:px-12 py-6 sm:py-12">
        <div className="w-full sm:text-3xl text-2xl font-Montserrat ">
          Rent Vs Sell Calculator
        </div>
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          Property Information
        </div>
        <RentVsSellCalculator></RentVsSellCalculator>
      </div>
    </div>
  );
}

export default rentvssale;
