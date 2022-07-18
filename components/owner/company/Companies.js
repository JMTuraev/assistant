import React, { useState } from 'react'
import CompanyTable from './CompanyTable'
import CreateCompany from './CreateCompany'

export default function Companies() {  
  
  return (
    <div>
    
      <CompanyTable /> 
      <CreateCompany   />
    </div>
  )
}
