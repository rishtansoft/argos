import React from 'react';
import GaugeComponent from 'react-gauge-component';

function Gauge() {
  return (
    <div>
      <GaugeComponent
        type='semicircle'
        arc={{
          width: 0.35,
          padding: 0.001,
          cornerRadius: 1,
          subArcs: [
            {
              limit: 14,  
              color: '#3399CC',
              showTick: false,
            },
            {
              limit: 28,  
              color: '#99CC33',
              showTick: false,
            },
            {
              limit: 42,  
              color: '#669900',
              showTick: false,
            },
            {
              limit: 56,  
              color: '#FFCC00',
              showTick: false,
            },
            {
              limit: 70,  
              color: '#FF9900',
              showTick: false,
            },
            {
              limit: 84,  
              color: '#FF6600',
              showTick: false,
            },
            {
              limit: 100,  
              color: '#B01616',
              showTick: false,
            },
          ],
        }}
        pointer={{
          color: '#345243',
          length: 0.8,
          width: 15,
        }}
        labels={{
          valueLabel: { 
            formatTextValue: (value) => "Normal",
            style: {marginTop: '120px', color: "red"}
          },
        }}
        value={22.5}  
        minValue={0}
        maxValue={100}
      />
    </div>
  );
}

export default Gauge;
