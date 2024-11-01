import React, { useState, useEffect } from 'react';
import BlockHeader from '../util-components/BlockHeader';
import HorizontalProgress from '../util-components/HorizontalProgressBar';
import fiveChart from '../../assets/images/five-chart.svg';
import background from '../../assets/images/ph_briefcase-fill.png';
import { notify } from '../../utils';
import { http } from '../../axios';

function ProfessionalCharacteristics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [leftHalf, setLeftHalf] = useState([]);
  const [rightHalf, setRightHalf] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPersonalInfo = async () => {
      try {
        const response = await http.get('/professional');
        
        if (response.status === 200) {
          setData(response.data);
        } else {
          notify('Шахсий ва касбий хусусиятларни олишда хатолик юз берди');
        }
      } catch (error) {
        notify('Шахсий ва касбий хусусиятларни олишда хатолик юз берди');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalInfo();
  }, []);

  useEffect(() => {
    if (data?.percents?.length) {
      setLeftHalf(data.percents.slice(0, data.percents.length / 2));
      setRightHalf(data.percents.slice(data.percents.length / 2));
    }
  }, [data]);
  
  return (
    <div
      className='py-6 dark:bg-dark-background dark:text-white'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '335px 335px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 30px',
      }}
    >
      <div className='container mx-auto'>
        <BlockHeader title='Шахсий ва касбий хусусиятлар'></BlockHeader>

        <div className='flex gap-3'>
          <div className='w-[38%]'>
            {leftHalf.length > 0 &&
              leftHalf.map((value, index) => {
                return (
                  <HorizontalProgress
                    key={index}
                    label={value.label}
                    percentage={value.percentage}
                  ></HorizontalProgress>
                );
              })}
          </div>
          <div className='w-[24%]'>
            <img className='block mx-auto' src={fiveChart} alt='' />
          </div>
          <div className='w-[38%]'>
            {rightHalf.length > 0 &&
              rightHalf.map((value, index) => {
                return (
                  <HorizontalProgress
                    key={index}
                    label={value.label}
                    percentage={value.percentage}
                  ></HorizontalProgress>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalCharacteristics;
