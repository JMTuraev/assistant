import React from 'react'
import CreateCompany from './CreateCompany'
import company  from 'faker'
import Company from './Company'
function Companies({ showCreateCompany, setShowCreateCompany, showCompany,  companies}) {

  return (
    <div className='space-y-4 '>
      <div className={showCreateCompany ? 'hidden' : 'visible' + 'bg-white shadow  '}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany}/>
      </div>
      <div >
      <Company showCompany={showCompany} companies={companies}/>
      
      </div>  
    </div>
  )
}

export default Companies