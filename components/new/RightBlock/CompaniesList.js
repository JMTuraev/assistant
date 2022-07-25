import { PlusIcon, PlusSmIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import CreateCompany from '../company/CreateCompany'

function CompaniesList({ companies, onActive}) {




// const getCompanies=async()=>{
//     const req=await fetch('http://localhost:3000/api/company')
//     const data=await req.json()

//     setCompanies(data)
// }

// useEffect(()=>{
//     getCompanies()
// }),[companies]
// console.log(companies);

  return (
    
        
    <div className="bg-white rounded-lg shadow">
    
            <div className="p-6">
            
          
    
              <h2
                id="who-to-follow-heading"
                className="text-base font-medium text-gray-900"
              >
                Ваши организации
              </h2>
              <div className="mt-2 flow-root">
              <ul role="list" className="divide-y divide-gray-100">
      {companies.map((company) => (
        <li onClick={()=>onActive(  null, company.id)} key={company.id} className="py-4 flex hover:bg-slate-200 hover:rounded-lg">
          <div className="ml-3 cursor-pointer ">
            <p className="text-sm font-medium text-gray-900">{company.name}</p>
            <p className="text-sm text-gray-500">{company.category}</p>
          </div>
        </li>
      ))}
    </ul>
              </div>
      
            </div>
          </div>

  )
}

export default CompaniesList


