import React from 'react'
import CreateCompany from './CreateCompany'
import company  from 'faker'
import Company from './Company'
function Companies({user, setUser, showCreateCompany, setShowCreateCompany}) {
  return (
    <div className='space-y-4 '>
      <div className={showCreateCompany ? 'hidden' : 'visible' + 'bg-white shadow  '}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany}/>
      </div>
      <Company/>
        
    </div>
  )
}

export default Companies