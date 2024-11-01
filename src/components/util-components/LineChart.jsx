import React, { useContext } from 'react';
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
import { ThemeContext } from '../../App';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = ({dataChart}) => {
  const {labels, data} = dataChart
  const {theme} = useContext(ThemeContext);

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
          color: theme == 'light' ? '#000000' : "white",
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
          color: theme == 'light' ? '#000000' : "white"
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