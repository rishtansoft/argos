import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DonutProgress = ({ percentage = 85, label = "Стратегик фикрлаш", color = 'red' }) => {
  const remaining = 100 - percentage;
  
  const data = {
    datasets: [{
      data: [percentage, remaining],
      backgroundColor: [
        color,  
        '#EEF1F4',  
      ],
      borderWidth: 0,
      circumference: 360,
      rotation: -90,
    }],
  };

  const options = {
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[24px] font-semibold text-black">{percentage}%</span>
        </div>
      </div>
      <div className="text-[24px] font-semibold text-black">
        {label}
      </div>
    </div>
  );
};

export default DonutProgress;