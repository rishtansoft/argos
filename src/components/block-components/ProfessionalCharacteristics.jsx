import React, {useState, useEffect} from 'react';
import BlockHeader from '../util-components/BlockHeader';
import HorizontalProgress from '../util-components/HorizontalProgressBar';
import fiveChart from '../../assets/images/five-chart.svg';
import background from '../../assets/images/ph_briefcase-fill.png';
import { notify } from '../../utils';
import { http } from '../../axios';

function ProfessionalCharacteristics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPersonalInfo = async () => {
      try {
        const response = await http.get('/knowlodge');
        if (response.status === 200) {
          setData(response.data);
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
            <HorizontalProgress
              label='Максадга интилувчанлик'
              percentage={90}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Эмоционал интеллект'
              percentage={95}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Креативлик'
              percentage={75}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Ходимларга йуналганлик'
              percentage={86}
            ></HorizontalProgress>
          </div>
          <div className='w-[24%]'>
            <img className='block mx-auto' src={fiveChart} alt='' />
          </div>
          <div className='w-[38%]'>
            <HorizontalProgress
              label='Максадга интилувчанлик'
              percentage={90}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Эмоционал интеллект'
              percentage={95}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Креативлик'
              percentage={75}
            ></HorizontalProgress>
            <HorizontalProgress
              label='Ходимларга йуналганлик'
              percentage={86}
            ></HorizontalProgress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalCharacteristics;
