import React from "react";
import { Line } from "react-chartjs-2";
function MarketTrend() {
  return (
    <div>
      <div className="shadow h-full">
        <div className="w-full flex sm:space-x-8 space-x-4 py-10">
          <button className="sm:text-2xl font-Montserrat font-semibold text-xl">
            Average Sale Price Of Homes Sold
          </button>
      
        </div>
        <Line
          datasetIdKey="id"
          data={{
            labels: [
              "Dec'21",
              "Mar'22",
              "Jun'22",
              "Sep'22",
              "Dec'22",
              "Mar'23",
              "Jun'23",
            ],
            datasets: [
              {
                id: 1,
                label: "",
                data: [450000, 600000, 500000, 700000, 350000, 400000, 750000],
                borderColor: "#FFA921",
                tension: 0.4,
              },
            ],
          }}
          options={{
            tooltip: {
              enabled: false,
            },
            scales: {
              y: {
                display: true,
              },
            },
            legend: {
              display: false,
            },

            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default MarketTrend;
