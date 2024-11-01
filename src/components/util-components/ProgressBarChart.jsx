import React from 'react';

const ProgressBar = ({ percentage = 40, label = "Умумий натижа" }) => {
  return (
    <div className="w-full max-w-md">
      <div className="text-[#0847A8] text-[48px] font-bold mt-4">
        {percentage}%
      </div>
      
      <div className="relative -mt-2">
        <div className="absolute left-4 text-white px-4 py-2 text-lg font-medium rounded">
          {label}
        </div>
        
        <div className="h-11 rounded-lg bg-[#EEF1F4] overflow-hidden">
          <div 
            className="h-full bg-[#41B883] rounded-lg transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;