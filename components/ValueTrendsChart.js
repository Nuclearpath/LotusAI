import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function ValueTrendsChart(props) {
  return (
    <div className="shadow">
      <Line
        datasetIdKey="id"
        data={{
          labels: [2019, 2020, 2021, 2022, 2023],
          datasets: [
            {
              id: 1,
              label: "",
              data: [50, 110, 135, 120, 220],
              borderColor: "black",
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
              display: false,
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
  );
}

export default ValueTrendsChart;
