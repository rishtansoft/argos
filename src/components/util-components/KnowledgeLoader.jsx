import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function KnowledgeLoader({ loading }) {
  return (
    <div>
      {loading && (
        <div className='charts grid grid-cols-4 gap-6'>
          <div className='col-span-2'>
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
          </div>

          <div className='line-chart col-span-1'>
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
          </div>

          <div className='hyperbolic-chart col-span-1 mb-6'>
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
            <Skeleton count={1} height={30} className='mb-4' />
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeLoader;
