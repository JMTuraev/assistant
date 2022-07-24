import React from 'react'
import CreateCompany from './CreateCompany'
import company  from 'faker'
function Companies({user, setUser, showCreateCompany, setShowCreateCompany}) {
  return (
    <div>
      <div className={showCreateCompany ? 'hidden' : 'visible'}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany}/>
      </div>
        
    </div>
  )
}

export default Companies