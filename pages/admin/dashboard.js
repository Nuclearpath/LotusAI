import React from "react";
import AdminHeader from "../../components/AdminHeader";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function Dashboard() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <div className="w-full sm:px-12 px-3 sm:py-9 py-3">
        <div className="py-5 flex flex-col px-5 shadow-xl rounded-lg">
          <div className="font-header font-semibold text-custom-yellow text-xl ">
            Dashboard
          </div>
          <div className="font-Montserrat text-gray-500 ">
            View all stats here
          </div>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:py-12 py-3 sm:gap-10 gap-4">
          <div className="w-full flex flex-col font-Montserrat items-center shadow-lg sm:py-12 py-3 font-semibold ">
            <div>Users Online</div>
            <div>108</div>
          </div>
          <div className="w-full flex flex-col font-Montserrat items-center shadow-lg sm:py-12 py-3 font-semibold ">
            <div>Users with estimates</div>
            <div>59</div>
          </div>
          <div className="w-full flex flex-col font-Montserrat items-center shadow-lg sm:py-12 py-3 font-semibold ">
            <div>Registered Users</div>
            <div>289</div>
          </div>
          <div className="w-full flex flex-col font-Montserrat items-center shadow-lg sm:py-12 py-3 font-semibold ">
            <div>Total Number of Users</div>
            <div>450</div>
          </div>
        </div>
        <div className=" sm:py-12 py-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
          <div>
            <Bar
              data={{
                labels: [
                  "Tina",
                  "Hariss",
                  "Tory",
                  "Jamie",
                  "Lancaster",
                  "AK",
                  "Sandy",
                ],
                datasets: [
                  {
                    backgroundColor: "#FFEAC9",
                    borderWidth: 0,
                    data: [3, 12, 9, 27, 13, 5, 7],
                  },
                ],
              }}
              options={{
                indexAxis: "y",
                plugins: {
                  title: {
                    display: true,
                    text: "Moderator Lead Board",
                  },
                  legend: {
                    display: false,
                  },
                  scales: {
                    x: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
          <div>
            <Line
              datasetIdKey="id"
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr"],
                datasets: [
                  {
                    id: 1,
                    label: "",
                    data: [8, 12, 9, 28],
                    borderColor: "#FFA921",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                tooltip: {
                  enabled: false,
                },

                legend: {
                  display: false,
                },
                scales: {
                  y: {
                    max: 30,
                    min: 0,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: "No of active users",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
