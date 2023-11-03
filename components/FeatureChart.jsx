import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',

    },
    title: {
      display: false,
    },
  },
};

const labels = [0,1,2,3,4,5,6,7,8,9];

export const data = {
  labels,
  datasets: [
    {
      label: 'sale',
      data: [500,780,760,480,900,200,220,600,850,500],
      borderColor: '#ef4444',
      backgroundColor: '#ef4444',
    },
    {
      label: 'rent ',
      data: [180,1000,200,370,730,200,200,520,650,500],
      borderColor: '#f97316',
      backgroundColor: '#f97316',
    },
  ],
};

export function FeatureChart() {
  return <Line options={options} data={data} className='mt-8 md:py-5 lg:p-12'/>;
}

// red: #b91c1c
// orange : #ea580c