import React from 'react';
import BlockHeader from '../util-components/BlockHeader';
import useFetch from '../../hooks/useFetch';

function Psychological() {

  const { data, loading } = useFetch('/psychologic');

  return (
    <div className='bg-gray-back py-6 dark:bg-dark-secondary dark:text-white'>
      <div className='container mx-auto'>
        <BlockHeader title='Психологик диагностика'></BlockHeader>

        <div className='grid grid-cols-2 gap-6'>
          <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
            {data?.text1}
          </p>
          <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
            {data?.text2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Psychological);
