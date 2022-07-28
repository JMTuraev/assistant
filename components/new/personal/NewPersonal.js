import { CheckCircleIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React, { useState, Fragment } from "react";
import SearchPersonal from "./SearchPersonal";
import { RadioGroup } from "@headlessui/react";



export default function NewPersonal() {
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];

  const role = [
    { id: 2, name: "director", value: "директор" },
    { id: 3, name: "admin", value: "админ" },
    { id: 4, name: "seller", value: "продавец" },
  ];

  return (
    <div>
      {/* <SearchPersonal /> */}
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Новый Персонал
      </button>
      <ul role="list" className="grid grid-cols-1 gap-6 mt-6  ">
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 "
          >
            <div className="w-full flex flex-col  p-6 space-y-6">
              <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label
                  htmlhtmlhtmlhtmlFor="name"
                  className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                >
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Jane Smith"
                />
              </div>
              <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label
                  htmlhtmlhtmlhtmlFor="name"
                  className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label
                  htmlhtmlhtmlhtmlFor="name"
                  className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                >
                  Отчество
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label
                  htmlhtmlhtmlhtmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="isolate -space-y-px rounded-md shadow-sm mt-4">
                  <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label
                      htmlhtmlhtmlhtmlFor="name"
                      className="block text-xs font-medium text-gray-900"
                    >
                      пароль
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="********"
                    />
                  </div>
                  <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label
                      htmlhtmlhtmlhtmlFor="job-title"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Повторите пароль
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="********"
                    />
                  </div>
                
                </div>
                <div className="mt-4"> <RadioButtonRole role={role} /> </div>
                <div className="mt-4"> <CompanyNameDropDown role={role} /> </div>
              </div>

              <img
                className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                src={person.imageUrl}
                alt=""
              />
            </div>
            <div>
              {/* <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
    export  function RadioButtonRole({role}) {
      const [selecteditems, setSelecteditems] = useState(role[0])
    
      return (
        <RadioGroup value={selecteditems} onChange={setSelecteditems}>
          <RadioGroup.Label className="text-base font-medium text-gray-900 ">Должность</RadioGroup.Label>
    
          <div className="mt-1 grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-x-2">
            {role.map((item) => (
              <RadioGroup.Option
                key={item.id}
                value={item.name}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                    'relative bg-white border rounded-lg shadow-sm p-2 flex cursor-pointer focus:outline-none'
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className="flex-1 flex">
                      <span className="flex flex-col">
                        <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                          {item.value}
                        </RadioGroup.Label>
                        
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-indigo-500' : 'border-transparent',
                        'absolute -inset-px rounded-lg pointer-events-none'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      )
    }

  
    import { Menu, Transition } from '@headlessui/react'
    import { ChevronDownIcon } from '@heroicons/react/solid'
import { select } from "async";
    
    export  function CompanyNameDropDown({role}) {
     
      const companies=[
        {id:1, name:'shoxona'},
        {id:2, name:'tesnolike'},
        {id:3, name:'goodzone'},
        {id:4, name:'torrento'},
      ]
     const [selects, setSelects]=useState([])
      
     const onSelect=(company)=>{

      const selectFilter = selects.filter(select=>select.id!==company.id)
      
      setSelects([...selectFilter, company])

     }
     
     const onDelete=(id)=>{
        const selectFilter=selects.filter(select=>select.id!==id)
        setSelects(selectFilter)
        console.log(id)
      }

      return(
        <>
        
        {selects.map(select=>(
          // eslint-disable-next-line react/jsx-key
          <span className="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700">
          {select.name}
          <button
            type="button"
            className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
            onClick={()=>{onDelete(select.id)}}
          >
            <span className="sr-only">Remove large option</span>
            <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
              <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
          </button>
        </span>
        ))}
   

        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Выберите организацию
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {companies.map(company=>(
                  // eslint-disable-next-line react/jsx-key
                  <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={()=>onSelect(company)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {company.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            
       

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      </>
      )
    }