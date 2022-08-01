import React, { useState } from 'react'
import CreateCompany from './FormCompany'

import CompnayList from './CompanyList'
import TableForm from './TableForm'
import { company } from 'faker/lib/locales/az'
import CompanyListNEW from './CompanyListNEW'
import FormCompany from './FormCompany'
import ProfileForm from '../owner/ProfileForm'
import ProfileFormNEW from '../owner/ProfileFormNEW'

function Companies({ showCreateCompany, setShowCreateCompany, showCompany,  companies, setCompanies}) {
const [show, setShow] = useState(false)
  return (
    <div className='space-y-4 '>
      
      <div className={show ? 'visible' : 'hidden'}>
        <FormCompany header={'Новая организация'} buttonValue={'сохранить'} />
      </div>
      <div>
        {<CompanyListNEW companies={companies} header='Список Организации' addNew={true} addButtonValue={'новаая организация'} setShow={setShow} show={show}/>}
      </div>
  </div>
  )
}

export default Companies