import FooterCompanyList from "./FooterCompnayList";
import React, { useState, useContext } from "react";
import CreateCompany from "./CreateCompany";
import Personal from "../personal/Personal";
import Image from "next/image";
import DropList from "./DropList";
import TemplateContext from "../../context/TemplateContext";


export default function CompnayList({ companies, setCompanies }) {
  const [active, setActive] = useState();
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [activePage, setActivePage] = useState(1);

  const {setPersonalRole}=useContext(TemplateContext)
  const personal = [
    {
      id: 1,
      firstName: "Jafar",
      surName: "Turaev",
      img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "director",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
    {
      id: 2,
      firstName: "samandar",
      surName: "Turaev",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "admin",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
    {
      id: 3,
      firstName: "xoliq",
      surName: "Turaev",
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: "seller",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
    {
      id: 4,
      firstName: "majid",
      surName: "Turaev",
      img: "asd",
      role: "seller",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
    {
      id: 6,
      firstName: "sattor",
      surName: "Turaev",
      img: "asd",
      role: "admin",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
    {
      id: 5,
      firstName: "vadim",
      surName: "Turaev",
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: "director",
      market: [
        { id: 1, name: "texnolike", location: "navoi" },
        { id: 1, name: "texnolike", location: "samarkand" },
      ],
    },
  ];

  const [row, setRow] = useState();
    
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
              <table className="min-w-full border-gray-50">
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
                            
                            onClick={()=>setActive(company.id)}
                            className={
                              active === company.id
                                ? " bg-yellow-300  border-y-4 border-gray-200  "
                                : "bg-white divide-x hover:bg-yellow-100 border-y-4 border-gray-200   "
                            }
                         
                          >
                            <td
                              className=
                                  "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6 cursor-pointer "
                            
                              onClick={() => setRow(1)}
                            >
                              {company.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500 ">
                              {/* AVATAR */}
                              <div className="space-x-3 ">
                                <span
                                  onClick={() => {setRow(2.1), setPersonalRole({role:null})}}
                                  
                                  className="cursor-pointer inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800"
                                >
                                  Директор - 1
                                </span>
                                <span
                                  onClick={() => {setRow(2.2), setPersonalRole({role:null})}}
                                  className="cursor-pointer inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"
                                >
                                  Админ - 3
                                </span>
                                <span
                                  onClick={() => {setRow(2.3), setPersonalRole({role:null})}}
                                  className="cursor-pointer inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800"
                                >
                                  Продавец - 27
                                </span>
                              </div>
                            </td>
                            <td
                              className="whitespace-nowrap p-4 text-sm text-gray-500 "
                              onClick={() => setRow(3)}
                            >
                              3
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6 "></td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6 "></td>
                          </tr>
                          {active===company.id && (
                            <DropList
                              setCompanies={setCompanies}
                              setActive={setActivePage}
                              active={activePage}
                              companyId={company.id}
                              company={company}
                              row={row}
                              personal={personal}

                            />
                          )}
                        </>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
              <FooterCompanyList
                companies={companies}
                setCompanies={setCompanies}
                pages={pages}
                setPages={setPages}
                active={activePage}
                setActive={setActivePage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
