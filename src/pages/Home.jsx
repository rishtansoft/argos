import React from 'react'
import PersonalInfo from '../components/block-components/PersonalInfo'
import KnowledgeTest from '../components/block-components/KnowledgeTest'
import ProfessionalCharacteristics from '../components/block-components/ProfessionalCharacteristics'
import Psychological from '../components/block-components/Psychological'
import Competence from '../components/block-components/Competence'
import Footer from '../components/block-components/Footer'

function Home() {
  return (
    <div>
        <PersonalInfo></PersonalInfo>
        <KnowledgeTest></KnowledgeTest>
        <ProfessionalCharacteristics></ProfessionalCharacteristics>
        <Psychological></Psychological>
        <Competence></Competence>
        <Footer></Footer>
    </div>
  )
}

export default Home