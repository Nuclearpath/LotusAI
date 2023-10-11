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
  return !session ? (
    <NotLoggedIn></NotLoggedIn>
  ) : (
    <div className=" flex w-full flex-col">
       {/* <Chatbot></Chatbot> */}
      <MainHeader></MainHeader>
      <div className="w-full flex flex-col sm:px-12 px-3">
        <div className="sm:pt-24 pt-3 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
          DashBoard
        </div>
        <DashboardContent {...data}></DashboardContent>
        {session && (
          <>
            <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
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
        )}
        {session && (
          <>
            <div className="w-full flex justify-end">
              <Link
                href="/comparableproperties"
                className="underline text-sm text-gray-500 font-semibold sm:py-7 py-2"
              >
                View comparable properties
              </Link>
            </div>
            <div className="sm:pt-24 pt-10 flex justify-center sm:text-3xl text-2xl font-Montserrat w-full">
              House Value Trend
            </div>
            <ValueTrendsChart></ValueTrendsChart>
            <div className="sm:pt-24 pt-10 flex justify-center sm:text-3xl text-2xl font-Montserrat w-full">
              Market Trend for your location - 02667
            </div>
            <MarketTrend></MarketTrend>
            <div className="sm:pt-24  pt-10 flex justify-start sm:text-3xl text-2xl font-Montserrat w-full">
              Recently Sold
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
