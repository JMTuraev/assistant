/* This example requires Tailwind CSS v2.0+ */
import {  MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const personal = [
  {
    firstName: 'jafar',
    surName: 'turaev',
    title: 'Regional Paradigm Technician',
    role: 'Директор',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    company :'shoxona-savdo',
    market:[
        {name:'texnolike'},
        {name:'ishonch'}
    ],
    salary:{
        amount:'2 500 000 ',
        date:'01.01.2022',
    }
     },
     {
        firstName: 'jafar',
        surName: 'turaev',
        title: 'Regional Paradigm Technician',
        role: 'Директор',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        company :'shoxona-savdo',
        market:[
            {name:'texnolike'},
            {name:'ishonch'}
        ],
        salary:{
            amount:'2 500 000 ',
            date:'01.01.2022',
        }
         },
         {
            firstName: 'jafar',
            surName: 'turaev',
            title: 'Regional Paradigm Technician',
            role: 'Директор',
            email: 'janecooper@example.com',
            telephone: '+1-202-555-0170',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            company :'shoxona-savdo',
            market:[
                {name:'texnolike'},
                {name:'ishonch'}
            ],
            salary:{
                amount:'2 500 000 ',
                date:'01.01.2022',
            }
             },
             {
                firstName: 'jafar',
                surName: 'turaev',
                title: 'Regional Paradigm Technician',
                role: 'Директор',
                email: 'janecooper@example.com',
                telephone: '+1-202-555-0170',
                imageUrl:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                company :'shoxona-savdo',
                market:[
                    {name:'texnolike'},
                    {name:'ishonch'}
                ],
                salary:{
                    amount:'2 500 000 ',
                    date:'01.01.2022',
                }
                 },
  // More people...
]

export default function PersonalList() {

  const [users, setUser]=useState([])

  const getCompanies=async(page)=>{
    const apiUrl = `http://localhost:3000/api/user/child`;
    try {
      await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // setCompany(data.company);
        setUser(data.user)

      })
      .then((err) => {});
    
    } catch (error) {
     
    } 
  }

  getCompanies()

  return (
    <ul role="list" className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

      {users.map(person => (


        <li key={person.childRelation.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 ">
          <div className="w-full flex items-center justify-between p-6 space-x-6 ">
            <div className="flex-1 truncate mb-2 space-y-1">
                <div className='flex flex-col  font-medium truncate text-gray-900 text-sm  '>
                    <h2 className='text-lg'>{person.childRelation.firstName + ' ' + person.childRelation.surName}</h2>
                    <h2 className='items-end'> з/п: {person.childRelation.salary + ' ' + person.childRelation.currency}  </h2>
                    {/* <h2 className='items-end'> работаетс {person.childRelation.salary.date}; </h2> */}
                </div>
                
              <div className="flex items-center space-x-3 ">
                {/* <h3 className="text-gray-900 text-sm  truncate">{person.childRelation.company}</h3> */}
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.childRelation.userLevelRelation.name}
                </span>
              </div>
              {/* <p className="mt-1 text-gray-500 text-sm truncate">{person.childRelation.market.map(e=><span className='mr-2'>{e.name + ';'}</span>)}</p> */}
            </div>
            <img className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0" src={person.childRelation.img} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.childRelation.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.childRelation.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
