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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  const labels = ['12.06', '18.06', '13.07', '14.07', '20.07', '24.07'];
  const data = [10, 30, 50, 20, 40, 60];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          font: {
            size: 12
          },
          color: '#000000',
          stepSize: 25
        },
        grid: {
          display: true,
          color: '#CCCCCC',
          borderDash: [5, 5],
          drawTicks: true,
          drawBorder: false,
          drawOnChartArea: true
        }
      },
      x: {
        ticks: {
          font: {
            size: 12
          },
          color: '#000000'
        },
        grid: {
          display: true,
          color: '#CCCCCC',
          borderDash: [5, 5],
          drawTicks: true,
          drawBorder: false,
          drawOnChartArea: true
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: '#0E9CFF',
        backgroundColor: '#0E9CFF',
        tension: 0,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: 'white',
        pointBorderColor: '#0E9CFF'
      }
    ]
  };

  return (
    <div className="w-full h-64">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;