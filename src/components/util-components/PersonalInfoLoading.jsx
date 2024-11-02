import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function PersonalInfoLoading({loading}) {
  return (
    <div className='container mx-auto flex justify-between text-custom-black py-4 dark:text-white'>
      {loading && (
        <div className='flex gap-8'>
          <div>
            <Skeleton width={216} count={1} height={288} />
          </div>
          <div>
            <Skeleton width={400} count={1} height={40} className='mb-4' />
            <Skeleton width={400} count={1} height={40} className='mb-5' />
            <Skeleton width={400} count={1} height={20} className='mb-1' />
            <Skeleton width={400} count={1} height={20} className='mb-5' />

            <Skeleton width={400} count={1} height={20} className='mb-1' />
            <Skeleton width={400} count={1} height={20} className='mb-1' />
            <Skeleton width={400} count={1} height={20} className='mb-1' />
          </div>
        </div>
      )}

      {loading && (
        <div className='w-[421px]'>
          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-4' />

          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-1' />
          <Skeleton width={400} count={1} height={20} className='mb-4' />
        </div>
      )}
    </div>
  );
}

export default PersonalInfoLoading;
