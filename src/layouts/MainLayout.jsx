import React from 'react'
import Header from '../components/block-components/Header'

function MainLayout({children}) {
  return (
    <div>
        <Header></Header>
        {children}
    </div>
  )
}

export default MainLayout