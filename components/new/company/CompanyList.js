import FooterCompanyList from "./FooterCompnayList";
import React, {useState} from 'react';
import CreateCompany from "./CreateCompany";

/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  
  export default function CompnayList({companies, setCompanies}) {
    const [active, setActive]=useState()
    const onActive=(id, )=>{

    }
    return (
      <div className=" ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Список организации
              <span className="ml-4 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {/* {companies.length} */}
              </span>
            </h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Название 
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Персонал
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Прибыль
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Магазины
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Склады
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {companies && (
                      <>
                        {companies.map((company) => (
                            <>
                          <tr
                            key={company.id}
                         
                            className={active===company.id ? "divide-x bg-indigo-200 " : "divide-x hover:bg-indigo-100  "   }

                          >
                            <td 
                              className={active===company.id ? "bg-indigo-500 whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-white sm:pl-6 cursor-pointer  " : "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6 cursor-pointer "   }
                              onClick={()=>setActive(company.id)}
                            >
                              {company.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                              
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                              
                            </td>
                          </tr>
                          {active===company.id && <DropList companyId={company.id}  />}
                          </>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
                <FooterCompanyList companies={companies} setCompanies={setCompanies}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  export const DropList=({companyId})=>{
    return(
        <td colSpan={5} className="h-24 bg-gray-100 " >
            <CreateCompany/>
        </td>
    )
   
  }