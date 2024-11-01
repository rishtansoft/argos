import React, { useState } from 'react';
import background from '../../assets/images/personal-info-back.png';
import userImage from '../../assets/images/user-image.png';
import Gauage from '../util-components/Gauage';

function PersonalInfo() {
  const [data, setData] = useState([]);

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
        <div className='flex gap-8'>
          <img
            className='w-[216px] h-[288px]'
            src={userImage}
            alt='User image'
          />
          <div>
            <h3 className='font-rubik text-[44px] font-normal leading-[52.8px] mb-7'>
              <span className='font-semibold'>Азамат Шарипов</span> <br />
              Абдуллажон угли
            </h3>

            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em]'>
              <span className='text-[#495057] dark:text-dark-text-secondary'>Тугилган сана: </span>
              30.09.1997 йил
            </p>
            <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] mb-[38px]'>
              <span className='text-[#495057] dark:text-dark-text-secondary'>Тугилган жой: </span>
              Чуст ш., Наманган.
            </p>

            <div className='flex gap-3 items-center'>
              <div>
                <span className='font-semibold'>Буйи:</span> <br />
                <span>175см</span>
              </div>
              <div>
                <span className='font-semibold'>Вазни:</span> <br />
                <span>70кг</span>
              </div>
              <div>
                <span className='font-semibold'>Индекс:</span> <br />
                <span>22,9</span>
              </div>
              <div>
                <div className='w-full flex justify-center items-center flex-col'>
                  <Gauage></Gauage> 
                  <span className='text-[14px] font-normal leading-[21px] text-center text-[#0956AF]'>Норма</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[421px]'>
          <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
            Лавозими:
          </p>
          <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left mb-3'>
            Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
            вазири уринбосари
          </p>
          <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
            Номзод:
          </p>
          <p className='font-rubik text-[20px] font-normal leading-[31px] tracking-[0.02em] text-left'>
            Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик
            вазири
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PersonalInfo);
