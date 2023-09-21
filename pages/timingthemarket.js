import React from "react";
import MainHeader from "../components/MainHeader";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import randomColor from "randomcolor";
import { ImQuotesLeft } from "react-icons/im";
function timingthemarket() {
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
      <MainHeader></MainHeader>
      <div className="w-full sm:px-12 sm:py-12 px-3 py-6">
        <div className="text-2xl font-Montserrat font-medium">
          Timing the Market
        </div>
        <div>
          {/*  */}
          <div className="shadow">
            <Bar
              datasetIdKey="id"
              data={{
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                datasets: [
                  {
                    id: 1,
                    label: "",
                    focused: true,
                    data: [
                      0, 178.49, 452.08, 537.61, 507.89, 175.92, 181.57, 615.9,
                      305.43,
                    ],
                    tension: 0.4,
                    backgroundColor: randomColor({
                      count: 10,
                      hue: "#FFA921",
                    }),
                  },
                ],
              }}
              options={{
                tooltip: {
                  enabled: false,
                },
                scales: {
                  x: {
                    display: false,
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

export default timingthemarket;
