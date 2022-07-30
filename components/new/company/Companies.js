import React from 'react'
import CreateCompany from './CreateCompany'
import company  from 'faker'
import Company from './Company'


import CompnayList from './CompanyList'
function Companies({ showCreateCompany, setShowCreateCompany, showCompany,  companies, setCompanies}) {

  return (
    <div className='space-y-4 '>
      
      <div className={showCreateCompany ? 'hidden' : 'visible' + 'bg-white shadow  '}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany} create={true}/>
      </div>
  
      <CompnayList companies={companies} setCompanies={setCompanies}/>  
    </div>
  )
}

export default Companies