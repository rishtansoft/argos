import React from 'react';

const HorizontalProgress = ({ percentage = 90, label = "Мақсадга интилувчанлик" }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex items-center gap-4">
        <div className='w-[90%]'>
          <div className="text-[16px] mb-2">
            {label}
          </div>

          <div className="relative flex-grow h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute left-0 h-full bg-[#1E5EFF] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="font-bold text-custom-black text-[18px] dark:text-white">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgress;