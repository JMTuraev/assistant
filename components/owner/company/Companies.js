import React, { useState } from 'react'
import CompanyTable from './CompanyTable'
import CreateCompany from './CreateCompany'

export default function Companies({companys, setCompany}) {  
  
  return (
    <div>
    
      <CompanyTable  companys={companys}  setCompany={setCompany} /> 
      <CreateCompany companys={companys}  setCompany={setCompany} />
    </div>
  )
}
