import React from 'react'
import BlockHeader from '../util-components/BlockHeader'
import SemiCircleChart from '../util-components/SemiCircleChart'
import LineChart from '../util-components/LineChart'
import ProgressBar from '../util-components/ProgressBarChart'
import hyperbolicChart from '../../assets/images/hyberbolic-chart.svg';
import brain from '../../assets/images/iconoir_brain-electricity.svg';

function KnowledgeTest() {
  return (
    <div className='bg-gray-back py-6 dark:bg-dark-secondary dark:text-white'>
        <div className="container mx-auto">
            <BlockHeader title = 'Билим тести'></BlockHeader>
            
            <div className="charts grid grid-cols-4 gap-6">
                <div className="circle-charts grid grid-cols-3 gap-x-6 gap-y-5 col-span-2">
                    <SemiCircleChart label='Конституциявий-хукукий саводхонлик' percentage={33} color = '#EF233C'></SemiCircleChart>
                    <SemiCircleChart label='Ахборот-коммуникация технологиялари' percentage={79} color = '#28A264'></SemiCircleChart>
                    <SemiCircleChart label='Турли сохадаги ислохотлардан хабардорлик' percentage={78} color = '#28A264'></SemiCircleChart>
                    <SemiCircleChart label='Узбек тили ва адабиёти' percentage={48} color = '#F8B324'></SemiCircleChart>
                    <SemiCircleChart label='Узбекистон тарихи ва маданияти' percentage={100} color = '#0956AF'></SemiCircleChart>
                    <SemiCircleChart label='Аклий салохияти ва мантикий фикрлаш' percentage={55} color = '#F8B324'></SemiCircleChart>
                </div>

                <div className="line-chart col-span-1">
                    <LineChart></LineChart>
                    <ProgressBar></ProgressBar>
                </div>
                <div className="hyperbolic-chart col-span-1 mb-6">
                    <div className='flex gap-2 w-60'>
                        <img src={brain} alt="Brain electrity" />
                        <p className='text-[14px] text-left'><span className='font-semibold'>90 фоиз</span> иштирокчидан яхширок натижа</p>
                    </div>
                    <img className='w-full' src={hyperbolicChart} alt="Hyperbolic chart" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default KnowledgeTest