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
              <span className="ml-4 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                {/* {companies.length} */}
              </span>
            </h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white  hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full border-gray-200">
                  <thead className="justify-between">
                    <tr className=" bg-gray-800 text-white">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold  sm:pl-6"
                      >
                        Название 
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold "
                      >
                        Персонал
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold "
                      >
                        Прибыль
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold  sm:pr-6"
                      >
                        Магазины
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold  sm:pr-6"
                      >
                        Склады
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-200 ">
                    {companies && (
                      <>
                        {companies.map((company) => (
                            <>
                          <tr
                            key={company.id}
                            className={active===company.id ? " bg-yellow-200 border-4 border-gray-200  " : "divide-x hover:bg-yellow-100 border-y-4 border-gray-200   "    }
                          >
                            <td 
                              className={active===company.id ? "bg-yellow-500 whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-white sm:pl-6 cursor-pointer  " : "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6 cursor-pointer bg-white"   }
                              onClick={()=>setActive(company.id)}
                            >
                              {company.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500 bg-white">
                              
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500 bg-white">
                              
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6 bg-white">
                              
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6 bg-white">
                              
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
        <td colSpan={5} className="m-4 p-4 h-24 bg-gray-200 border-gray-200" >
            <div className="border border-yellow-300 ">
            <CreateCompany/>
            </div>
        </td>
    )
   
  }