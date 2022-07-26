/* eslint-disable react/jsx-key */
/* This example requires Tailwind CSS v2.0+ */
import { CashIcon, CurrencyDollarIcon } from '@heroicons/react/outline'
import {  MailIcon, PhoneIcon, ShoppingBagIcon, UserGroupIcon, UserIcon, UsersIcon } from '@heroicons/react/solid'



export default function Company({companies, showCompany}) {
const company=companies.filter(company=>company.id===showCompany)

console.log('---------');

// console.log(companies);

// const company = [];

return (
  <>
  {company && (
    <>
      {company.map(item=>(
        <ul role="list" className=" ">

        <li key={company.name} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{item.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{item.name}</p>
            </div>
            {/* <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" /> */}
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${item.inn}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <ShoppingBagIcon className="w-5 h-5 text-red-700" aria-hidden="true" />
                  <span className="ml-3 text-red-700">Магазины</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${item.inn}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <UserGroupIcon     className="w-5 h-5 text-cyan-700" aria-hidden="true" />
                  <span className="ml-3 text-cyan-700">Команда</span> 
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${item.inn}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <UserIcon className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <span className="ml-3 text-green-700">Клиенты</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${item.inn}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <CashIcon className="w-6 h-6 text-indigo-700" aria-hidden="true" />
                  <span className="ml-3 text-indigo-700">Доходъ</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      
    </ul>
    ))}
    </>
    )}
      </>
)
      }