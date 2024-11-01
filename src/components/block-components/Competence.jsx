import React, { useContext } from 'react';
import BlockHeader from '../util-components/BlockHeader';
import background from '../../assets/images/comp-back.png';
import CircularProgress from '../util-components/CircularProgress';
import qr from '../../assets/images/qr-code.png'
import qrLight from '../../assets/images/qr-light.png'
import { ThemeContext } from '../../App';

function Competence() {
  const {theme} = useContext(ThemeContext);
  return (
    <div
      className='py-6 bg-red dark:bg-dark-background dark:text-white'
      style={theme == 'light' ? {
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 689px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0px -210px',
      } : {}}
    >
      <div className='container mx-auto'>
        <BlockHeader title='Компетенцияларнинг намоён булиши'></BlockHeader>

        <div className='grid grid-cols-[76%_24%] gap-[24px]'>
          <div className='grid grid-rows-2 gap-[16px]'>
            <div className='grid grid-cols-3 gap-[24px]'>
              <div>
                <CircularProgress percentage={85} label='Стратегик фикрлаш' color='#28A264'></CircularProgress>
              </div>

              <div>
                <CircularProgress percentage={75} label='Натижага йуналганлик' color='#28A264'></CircularProgress>
              </div>
              <div>
                <CircularProgress percentage={33} label='Узгаришларни бошкариш' color='#EF233C'></CircularProgress>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-[24px]'>
              <div>
                <CircularProgress percentage={100} label='Лидерлик' color='#0956AF'></CircularProgress>
              </div>
              <div>
                <CircularProgress percentage={98} label='Уз-узини ривожлан-тириш' color='#28A264'></CircularProgress>
              </div>
              <div>
                <CircularProgress percentage={45} label='Коммуника-тивлик' color='#F8B324'></CircularProgress>
              </div>
            </div>
          </div>

          <div>
            {
              theme == 'light' ? <img src={qr} alt="QR code" /> : <img className='w-[220px]' src={qrLight} alt="QR code" />
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competence;
