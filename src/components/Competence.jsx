import React from 'react'
import BlockHeader from './BlockHeader'

function Competence() {
  return (
    <div className='py-6' style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '335px 335px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 30px',
      }}>
        <div className="container mx-auto">
            <BlockHeader title = 'Компетенцияларнинг намоён булиши'></BlockHeader>
        </div>
    </div>
  )
}

export default Competence