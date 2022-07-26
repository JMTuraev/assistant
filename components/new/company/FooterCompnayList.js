/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export default function FooterCompanyList({setCompanies, companies}) {
  const [companyLength, setCompanyLength]=useState(25)
  const [companys, setCompanys]=useState(companies)
  const [pages, setPages]=useState([1,2,3,4,5])
  const [active, setActive]=useState(1)
  
  const getCompanies=async(page)=>{
    const apiUrl = `http://localhost:3000/api/company/${page}`;
    try {
      await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // setCompany(data.company);
        setCompanies(data.company)
        setActive(page)
        
      })
      .then((err) => {});
    
    } catch (error) {
     
    } 
  }

  const getCount=async(page)=>{
    const apiUrl = `http://localhost:3000/api/company/1`;
      try {
        await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // setCompany(data.company);
          setCompanyLength(data.count)
          const countPage=companyLength/5
        let arr = [];
        for (let i = 1; i < countPage; i++) {
            arr.push(i)
        }
        setPages(arr);
        })
        .then((err) => {});
      
      } catch (error) {
       
      }
  }

  getCount()

    return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              
              {pages.map(page=>(
                  <a
              
                  aria-current="page"
                  className={active === page ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer" : "cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-200 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium}"}
                  onClick={()=> getCompanies(page) }

                  >
                  {page}
                </a>
                ))}
          
            
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
