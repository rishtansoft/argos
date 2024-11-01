import React, { useContext } from 'react';
import BlockHeader from '../util-components/BlockHeader';
import background from '../../assets/images/comp-back.png';
import CircularProgress from '../util-components/CircularProgress';
import qr from '../../assets/images/qr-code.png';
import qrLight from '../../assets/images/qr-light.png';
import { ThemeContext } from '../../App';
import useFetch from '../../hooks/useFetch';

function Competence() {
  const { theme } = useContext(ThemeContext);
  const { data, loading } = useFetch('/competence');

  return (
    <div
      className='py-6 bg-red dark:bg-dark-background dark:text-white'
      style={
        theme == 'light'
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: '100% 689px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0px -210px',
            }
          : {}
      }
    >
      <div className='container mx-auto'>
        <BlockHeader title='Компетенцияларнинг намоён булиши'></BlockHeader>

        <div className='grid grid-cols-[76%_24%] gap-[24px]'>
          <div className='grid grid-rows-1 gap-[16px]'>
            <div className='grid grid-cols-3 gap-[24px]'>
              {data?.length > 0 &&
                data?.map((value, index) => {
                  return (
                    <div key={index}>
                      <CircularProgress
                        percentage={value.percentage}
                        label={value.label}
                        color={value.color}
                      ></CircularProgress>
                    </div>
                  );
                })}
            </div>
          </div>

          <div>
            {theme == 'light' ? (
              <img src={qr} alt='QR code' />
            ) : (
              <img className='w-[220px]' src={qrLight} alt='QR code' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competence;
