import React, { useEffect, useState } from 'react';
import BlockHeader from '../util-components/BlockHeader';
import { notify } from '../../utils';
import { http } from '../../axios';

function Psychological() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPersonalInfo = async () => {
      try {
        const response = await http.get('/psychologic');

        if (response.status === 200) {
          setData(response.data);
        } else {
          notify('Психологик диагностикани олишда хатолик юз берди');
        }
      } catch (error) {
        notify('Психологик диагностикани олишда хатолик юз берди');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalInfo();
  }, []);
  return (
    <div className='bg-gray-back py-6 dark:bg-dark-secondary dark:text-white'>
      <div className='container mx-auto'>
        <BlockHeader title='Психологик диагностика'></BlockHeader>

        <div className='grid grid-cols-2 gap-6'>
          <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
            {data.text1}
          </p>
          <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
            {data.text2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Psychological;
