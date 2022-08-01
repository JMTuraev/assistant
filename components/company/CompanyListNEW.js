/* eslint-disable react/jsx-key */
/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";

export default function CompanyListNEW({ companies, header, addNew, addButtonValue, setShow, show }) {


  return (
    <>
        <div className="grid grid-cols-2 items-end font-medium  text-lg mb-4 ">
        <h3 className=" pl-6">{header}</h3>
          <div className="flex justify-end ">{addNew && 
             <button
             type="button"
             className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             onClick={()=>setShow(!show)}
           >
             {addButtonValue}
           </button>
          }</div>
        </div>
    <ul role="list" className="divide-y divide-gray-200 cursor-pointer ">
      {companies && (
        <>
          {companies.map((company) => (
            <Link href={`/owner/companies/${company.id}`}>
            <li
              key={company.id}
              className="py-4 flex hover:bg-gray-200 bg-white"
            >
              {/* <img className="h-10 w-10 rounded-full" src={company.img} alt="" /> */}
              <div className="ml-3 ">
                <p className="text-sm font-medium text-gray-900">
                  {company.name}
                </p>
                <p className="text-sm text-gray-500">{company.location}</p>
              </div>
            </li>
            </Link>
          ))}
        </>
      )}
    </ul>
    </> 

  );
}
