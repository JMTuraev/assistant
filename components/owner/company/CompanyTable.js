import { useState, useContext } from "react"
import TemplateContext from "../../../context/TemplateContext";

/* This example requires Tailwind CSS v2.0+ */
const company = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]


  
  export default function CompanyTable({companys, setCompany}) {
    const {showNewCompanyBlock, setShowNewCompanyBlock}=useContext(TemplateContext)
    
    return (
      <div className="px-4  sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Список организации
            </h1>
          </div>
          <div className="mt-4  sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setShowNewCompanyBlock(!showNewCompanyBlock)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Добавить организации
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
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
                        Названия
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Расположения
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Юр. адрес
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        ИНН
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {companys && (
                      <>
                        {companys.map((company) => (
                          <tr
                            key={company.id_u}
                            className="divide-x divide-gray-200"
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                              {company.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {company.location}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {company.lawAddress}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                              {company.inn}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  