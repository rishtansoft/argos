import React from 'react';
import background from '../../assets/images/personal-info-back.png';
import Gauage from '../util-components/Gauage';
import { ToastContainer } from 'react-toastify';
import useFetch from '../../hooks/useFetch';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function PersonalInfo() {
  const { data, loading } = useFetch('/get-personal-info');

  return (
    <div
      className='bg-cover bg-center dark:bg-dark-background dark:text-white'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '480px 480px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right -10px',
      }}
    >
      <div className='container mx-auto flex justify-between text-custom-black py-4 dark:text-white'>
        {!loading && (
          <div className='flex gap-8'>
            <img
              className='w-[216px] h-[288px]'
              src={data.imageUrl}
              alt='User image'
            />
            <div>
              <h3 className='font-rubik text-[44px] font-normal leading-[52.8px] mb-7'>
                <span className='font-semibold'>{data.firstName}</span> <br />
                {data.lastName}
              </h3>

              <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
                <span className='text-[#495057] dark:text-dark-text-secondary'>
                  Тугилган сана:{' '}
                </span>
                {data.birthday}
              </p>
              <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] mb-[38px]'>
                <span className='text-[#495057] dark:text-dark-text-secondary'>
                  Тугилган жой:{' '}
                </span>
                {data.address}
              </p>

              <div className='flex gap-3 items-center'>
                <div>
                  <span className='font-semibold'>Буйи:</span> <br />
                  <span>{data.height}</span>
                </div>
                <div>
                  <span className='font-semibold'>Вазни:</span> <br />
                  <span>{data.weight}</span>
                </div>
                <div>
                  <span className='font-semibold'>Индекс:</span> <br />
                  <span>{data.index}</span>
                </div>
                <div>
                  <div className='w-full flex justify-center items-center flex-col'>
                    <Gauage></Gauage>
                    <span className='text-[14px] font-normal leading-[21px] text-center text-[#0956AF]'>
                      Норма
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div>
            <Skeleton height={40} style={{ marginBottom: '10px' }} />
            <Skeleton height={40} style={{ marginBottom: '10px' }} />
            <Skeleton height={40} style={{ marginBottom: '10px' }} />
            <Skeleton height={40} style={{ marginBottom: '10px' }} />
            <Skeleton height={40} style={{ marginBottom: '10px' }} />
          </div>
        )}

        {!loading && (
          <div className='w-[421px]'>
            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
              Лавозими:
            </p>
            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left mb-3'>
              {data.position}
            </p>
            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
              Номзод:
            </p>
            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
              {data.candidate}
            </p>
          </div>
        )}
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default React.memo(PersonalInfo);
