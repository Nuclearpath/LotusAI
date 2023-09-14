import React from "react";
import MainHeader from "../components/MainHeader";
import DashboardContent from "../components/DashboardContent";
import House from "../components/House";
import Link from "next/link";
import ValueTrendsChart from "../components/ValueTrendsChart";
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
    comparableHouses: [
      {
        image: "./house1.png",
        name: "360 Huntington Ave",
        place: "Boston",
        price: 266290,
        description: "3BHK, 2 Bath",
      },
      {
        image: "./house1.png",
        name: "360 Huntington Ave",
        place: "Boston",
        price: 266290,
        description: "3BHK, 2 Bath",
      },
      {
        image: "/house1.png",
        name: "360 Huntington Ave",
        place: "Boston",
        price: 266290,
        description: "3BHK, 2 Bath",
      },
      {
        image: "/house1.png",
        name: "360 Huntington Ave",
        place: "Boston",
        price: 266290,
        description: "3BHK, 2 Bath",
      },
      {
        image: "/house1.png",
        name: "360 Huntington Ave",
        place: "Boston",
        price: 266290,
        description: "3BHK, 2 Bath",
      },
    ],
  };
  return (
    <div className=" flex w-full flex-col">
      <MainHeader></MainHeader>
      <div className="w-full flex flex-col px-12">
        <div className="pt-24 flex justify-start text-3xl font-Montserrat w-full">
          DashBoard
        </div>
        <DashboardContent {...data}></DashboardContent>
        <div className="pt-24 flex justify-start text-3xl font-Montserrat w-full">
          Comparable Properties
        </div>
        <div className="flex space-x-16 py-5 overflow-x-scroll">
          {data.comparableHouses.map((e, i) => {
            return(
            <House data={...e} key={i}></House>);
          })}
        </div>
        <div className="w-full flex justify-end">
          <Link href="" className="underline text-sm text-gray-500 font-semibold py-7">View comparable properties</Link>
        </div>
        <div className="pt-24 flex justify-center text-3xl font-Montserrat w-full">
        House Value Trend
        </div>
        <ValueTrendsChart></ValueTrendsChart>
        
      </div>
    </div>
  );
}

export default dashboard;
