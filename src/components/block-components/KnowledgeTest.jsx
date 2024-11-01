import React, { useState, useEffect } from 'react';
import BlockHeader from '../util-components/BlockHeader';
import SemiCircleChart from '../util-components/SemiCircleChart';
import LineChart from '../util-components/LineChart';
import ProgressBar from '../util-components/ProgressBarChart';
import hyperbolicChart from '../../assets/images/hyberbolic-chart.svg';
import brain from '../../assets/images/iconoir_brain-electricity.svg';
import { notify } from '../../utils';
import { http } from '../../axios';

function KnowledgeTest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPersonalInfo = async () => {
      try {
        const response = await http.get('/knowlodge');
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
        } else {
          notify('Билим тести маълумотларни олишда хатолик юз берди');
        }
      } catch (error) {
        notify('Билим тести маълумотларни олишда хатолик юз берди');
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
        <BlockHeader title='Билим тести'></BlockHeader>

        <div className='charts grid grid-cols-4 gap-6'>
          <div className='circle-charts grid grid-cols-3 gap-x-6 gap-y-5 col-span-2'>
            {data.semicharts &&
              data.semicharts.length > 0 &&
              data.semicharts.map((value, index) => {
                return (
                  <SemiCircleChart
                    key={index}
                    label={value.label}
                    percentage={value.percentage}
                    color={value.color}
                  ></SemiCircleChart>
                );
              })}
          </div>

          <div className='line-chart col-span-1'>
            {data.lineChart && <LineChart dataChart={data.lineChart}></LineChart>}
            {data.overall && <ProgressBar overall={data.overall}></ProgressBar>}
          </div>
          <div className='hyperbolic-chart col-span-1 mb-6'>
            <div className='flex gap-2 w-60'>
              <img src={brain} alt='Brain electrity' />
              <p className='text-[14px] text-left'>
                <span className='font-semibold'>{data.thanOthers} фоиз</span> иштирокчидан
                яхширок натижа
              </p>
            </div>
            <img
              className='w-full'
              src={hyperbolicChart}
              alt='Hyperbolic chart'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeTest;
