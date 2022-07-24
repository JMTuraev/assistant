import { PlusIcon, PlusSmIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import CreateCompany from '../company/CreateCompany'

function CompaniesList({whoToFollow, show,  company}) {

const defaultCompanies=[
  {
    id: 2,
    id_u: "company-50g6hexsl5xv17hw",
    name: "Reynolds, Lueilwitz and Gutkowski",
    category: "Games",
    location: "20385 Runte Village",
    lawAddress: "06400 Krystel Ridge",
    inn: "00001425",
    bankAccount: "18495011",
    mfo: "60547706",
    owner: "user-50g6huol5xv0nu9"
  },
  {
    id: 3,
    id_u: "company-50g6hexsl5xv17i6",
    name: "Haag, Keebler and Schaefer",
    category: "Baby",
    location: "885 Ephraim Glen",
    lawAddress: "3077 Forrest Key",
    inn: "50260683",
    bankAccount: "44951352",
    mfo: "06125900",
    owner: "user-50g6huol5xv0nu9"
  },
  {
    id: 4,
    id_u: "company-50g6hexsl5xv17ih",
    name: "Swift, Raynor and Cruickshank",
    category: "Health",
    location: "3527 Grady Course",
    lawAddress: "09746 Bernhard Highway",
    inn: "49104929",
    bankAccount: "55025965",
    mfo: "78556052",
    owner: "user-50g6huol5xv0nu9"
  },
  
]
const [companies, setCompanies]=useState(defaultCompanies)


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
        <li key={company.location} className="py-4 flex hover:bg-slate-200 hover:rounded-lg">
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


