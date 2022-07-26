import React from 'react'
import CreateCompany from './CreateCompany'
import company  from 'faker'
import Company from './Company'
import SearchCompany from './SearchCompany'
import Market from '../market/Markets'
function Companies({ showCreateCompany, setShowCreateCompany, showCompany,  companies}) {

  return (
    <div className='space-y-4 '>
      {/* <SearchCompany/> */}
      <div className={showCreateCompany ? 'hidden' : 'visible' + 'bg-white shadow  '}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany}/>
      </div>
      <div >
      <Company showCompany={showCompany} companies={companies}/>
      </div>  
      <Market/>
    </div>
  )
}

export default Companies