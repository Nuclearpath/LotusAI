import React from "react";
import MainHeader from "../components/MainHeader";
import DashboardContent from "../components/DashboardContent";
import House from "../components/House";
import Link from "next/link";
import ValueTrendsChart from "../components/ValueTrendsChart";
import MarketTrend from "../components/MarketTrend";
import Chatbot from "../components/Chatbot";

import { useSession } from "next-auth/react";
import NotLoggedIn from "../components/NotLoggedIn";

function Dashboard() {
  const { data: session } = useSession();
  console.log("auth",session?.user?.role)

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
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="w-full flex flex-col sm:px-12 px-3">
        <div className="sm:pt-24 pt-3 flex justify-start sm:text-3xl text-2xl font-header w-full">
          DashBoard
        </div>
        <DashboardContent {...data} role={session?.user?.role}></DashboardContent>
        {/* {session && (
          <>
            <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-header w-full">
              Comparable Properties
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114303.09426162124!2d-71.10340186436356!3d42.331809042713346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1695357710811!5m2!1sen!2sin"
              width="600"
              height="450"
              className="w-full py-6"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </>
        )}
        {session && (
          <div className="flex space-x-16 py-5 overflow-x-scroll">
            {data.comparableHouses.map((e, i) => {
              return <div key={i}>{e && <House data={e}></House>}</div>;
            })}
          </div>
        )} */}
        {session && (
          <>
            <div className="w-full flex justify-center items-center py-5">
              <button className="bg-custom-yellow hover:underline hover:bg-opacity-80 text-white p-4 rounded-md my-5">
           <Link
                  href="/comparableproperties"
                  className="text-white font-medium hover:underline text-base md:text-lg "
                >
                  View comparable properties
                </Link>
              </button>

            </div>
            <div 
            className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]"
            >
            <div className="sm:pt-24 py-10 flex justify-center sm:text-3xl text-2xl font-header items-center">
              Pad&apos;s Value Trend
            </div>
            <div className="w-full justify-center flex h-full ">
              <div className="sm:w-8/12   w-3/4">
                <ValueTrendsChart></ValueTrendsChart>
              </div>
            </div>
       
            <div className="w-full justify-center flex">
              <div className="sm:w-8/12  w-full">
                <MarketTrend></MarketTrend>
              </div>
            </div>
            <div className="sm:pt-24 pt-10 flex justify-center sm:text-3xl text-2xl font-header w-full items-center">
           02667 value trend
            </div>
            </div>
            <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-header w-full">
              Recently Sold Comparable&apos;s
            </div>

            <div className="flex space-x-16 py-5 overflow-x-auto   ">
              {data.comparableHouses.map((e, i) => {
                return <div key={i}>{e && <House data={e}></House>}</div>;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
