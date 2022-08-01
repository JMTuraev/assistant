import React from 'react'
import CreateCompany from './CreateCompany'

import CompnayList from './CompanyList'
import TableForm from './TableForm'
import { company } from 'faker/lib/locales/az'
import CompanyListNEW from './CompanyListNEW'

function Companies({ showCreateCompany, setShowCreateCompany, showCompany,  companies, setCompanies}) {

  const tableHeader={header:"Список организации", buttonValue:'Новая организация'}
  const tableHeads=[
    {id:1, name:'Название',},
    {id:2, name:'Персонал',},
    {id:3, name:'Прибыль',},
    {id:4, name:'Магазины',},
    {id:5, name:'Склады',},
  ]
  return (
    <div className='space-y-4 '>
      
      <div className={showCreateCompany ? 'hidden' : 'visible' + 'bg-white shadow  '}>
        <CreateCompany setShowCreateCompany={setShowCreateCompany} create={true}/>
      </div>
    
      <div>
        {<CompanyListNEW companies={companies}/>}
      </div>

      {/* <CompnayList companies={companies} setCompanies={setCompanies}/>   */}
      {/* <TableForm companies={companies} setCompanies={setCompanies} tableHeads={tableHeads} tableHeader={tableHeader}/>   */}
    </div>
  )
}

export default Companies