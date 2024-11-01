import React from 'react';

function BlockHeader({ title }) {
  return (
    <div className="flex items-center mb-8">
      <div className="w-3 h-6 bg-blue-600 mr-[10px]"></div>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="flex-1 h-1 bg-[#DEE2E6] ml-2"></div>
    </div>
  );
}

export default BlockHeader;
