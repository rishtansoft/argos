import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const RadarChartComponent = () => {
  const data = [
    {
      subject: 'Photo shop',
      A: 4,
    },
    {
      subject: 'Illustrator',
      A: 3,
    },
    {
      subject: 'Xd',
      A: 3,
    },
    {
      subject: 'Indesign',
      A: 4,
    },
    {
      subject: 'Premiere',
      A: 3,
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center -mt-12">
      <RadarChart
        cx={200}
        cy={200}
        outerRadius={150}
        width={400}
        height={300}
        data={data}
      >
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar
          name="Skills"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default RadarChartComponent;