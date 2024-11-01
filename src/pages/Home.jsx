import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import KnowledgeTest from '../components/KnowledgeTest'
import ProfessionalCharacteristics from '../components/ProfessionalCharacteristics'
import Psychological from '../components/Psychological'
import Competence from '../components/Competence'
function Home() {
  return (
    <div>
        <PersonalInfo></PersonalInfo>
        <KnowledgeTest></KnowledgeTest>
        <ProfessionalCharacteristics></ProfessionalCharacteristics>
        <Psychological></Psychological>
        <Competence></Competence>
    </div>
  )
}

export default Home