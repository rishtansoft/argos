import React from 'react'
import BlockHeader from '../util-components/BlockHeader'

function Psychological() {
  return (
    <div className='bg-gray-back py-6'>
        <div className="container mx-auto">
            <BlockHeader title = 'Психологик диагностика'></BlockHeader>

            <div className='grid grid-cols-2 gap-6'>
                <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make  a type specimen book. It has survived not only five centuries, </p>
                <p className='text-[20px] font-normal leading-[31px] tracking-[0.02em]'>  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of</p>
            </div>

        </div>
    </div>
  )
}

export default Psychological