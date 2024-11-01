import React from 'react';
import GaugeComponent from 'react-gauge-component';

function Gauge() {
  return (
    <div style={{ width: "50px", height: "40px", overflow: "hidden", marginTop: "-15px" }}>
      <GaugeComponent
        type="semicircle"
        style={{ width: "50px",height: "40px", transform: "scale(1)", transformOrigin: "top" }}
        arc={{
          width: 0.49, 
          padding: 0.0000001,
          cornerRadius: 1,
          subArcs: [
            { color: '#3399CC', showTick: false },
            { color: '#99CC33', showTick: false },
            { color: '#669900', showTick: false },
            { color: '#FFCC00', showTick: false },
            { color: '#FF9900', showTick: false },
            { color: '#FF6600', showTick: false },
            { color: '#B01616', showTick: false },
          ],
        }}
        pointer={{
          color: '#345243',
          length: 0.7, 
          width: 25,
        }}
        labels={{
          valueLabel: {
            formatTextValue: () => "",
            style: { color: "transparent" },
          },
          tickLabels: {
            hideMinMax: true,
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
