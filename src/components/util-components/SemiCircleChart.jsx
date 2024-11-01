import React, { useContext } from 'react';
import GaugeComponent from 'react-gauge-component';
import { ThemeContext } from '../../App';

function SemiCircleChart({ percentage = 33, label = 'Конституциявий-ҳуқуқий саводхонлик', color = '#0956AF' }) {
  const {theme} = useContext(ThemeContext);

  return (
    <div className='flex flex-col'>
      <GaugeComponent
        type='semicircle'
        style={{
          width: '198px',
          height: '136px',
          transform: 'scale(1.1)',
          transformOrigin: 'top',
        }}
        arc={{
          width: 0.27,
          padding: 0.0000001,
          cornerRadius: 1,
          subArcs: [
            { color: color, showTick: false, limit: percentage },
            { color: '#DEE2E6', showTick: false },
          ],
        }}
        pointer={{
          color: '#345243',
          length: 0.7,
          width: 0,
        }}
        labels={{
          valueLabel: {
            formatTextValue: () => percentage + '%',
            style: { 
              fontSize: 45,
              fill: theme == 'light' ? '#000000' : "#ffffff"
            },
          },
          tickLabels: {
            hideMinMax: true,
          },
        }}
        value={22.5}
        minValue={0}
        maxValue={100}
      />

      <h3 className='text-base font-normal leading-6 text-center text-[#495057] dark:text-white' style={{marginTop: "-18px"}}>{label}</h3>
    </div>
    
  );
}

export default SemiCircleChart;
