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
      <div className="w-full flex flex-col sm:px-12 px-3">
        <div className="sm:pt-24 pt-3 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
          DashBoard
        </div>
        <DashboardContent {...data}></DashboardContent>
        <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
          Comparable Properties
        </div>
        <div className="flex space-x-16 py-5 overflow-x-scroll">
          {data.comparableHouses.map((e, i) => {
            return <div key={i}>{e && <House data={e}></House>}</div>;
          })}
        </div>
        <div className="w-full flex justify-end">
          <Link
            href=""
            className="underline text-sm text-gray-500 font-semibold sm:py-7 py-2"
          >
            View comparable properties
          </Link>
        </div>
        <div className="sm:pt-24 pt-10 flex justify-center text-3xl font-Montserrat w-full">
          House Value Trend
        </div>
        <ValueTrendsChart></ValueTrendsChart>
        <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
          Recently Sold
        </div>
        <div className="flex space-x-16 py-5 overflow-x-scroll">
          {data.comparableHouses.map((e, i) => {
            return <div key={i}>{e && <House data={e}></House>}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
