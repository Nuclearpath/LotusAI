import React from "react";
import MainHeader from "../components/MainHeader";
import DashboardContent from "../components/DashboardContent";

function dashboard() {
  /*recieved from the api */
  const data = {
    house: "20 S Huntington Ave",
    value: 2732900,
    decription: "2BHK , 1 Bath",
    location: "Boston",
    houseNo: "MA - 02446",
    estimate: 2732900,
    avergae: 2342900,
    sales: 7,
  };
  return (
    <div className=" flex w-full flex-col">
      <MainHeader></MainHeader>
      <div className="w-full flex flex-col px-12">
        <div className="pt-24 flex justify-start text-3xl font-Montserrat w-full">
          DashBoard
        </div>
        <DashboardContent {...data}></DashboardContent>
      </div>
    </div>
  );
}

export default dashboard;
