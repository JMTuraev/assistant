import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }





function Tariff({tariffs}) {
  return (

     <section className="relative  " aria-labelledby="pricing-heading ">
     <h2 id="pricing-heading" className="sr-only">
       Pricing
     </h2>

     {/* tariffs */}
     <div className="max-w-2xl  mx-auto sm:px-6 lg:max-w-7xl lg:space-y-4 lg:px-8  lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-3 ">
       {tariffs.map((tariff) => (
         <div
           key={tariff.title}
           className="relative p-4   bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
         >
           <div className="flex-1  ">
             <h3 className="text-xl   font-semibold text-gray-900">{tariff.title}</h3>
             {/* {tariff.mostPopular ? (
               <p className=" absolute top-0 py-1.5 px-4 bg-rose-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                 Most popular
               </p>
             ) : null} */}
             <p className="mt-2 flex items-baseline text-gray-900">
               <span className="text-5xl font-extrabold tracking-tight">{tariff.percent}%</span>
               <span className="ml-1 text-xl font-semibold">{" на " + tariff.period + ' Месяцев'}</span>
             </p>
            
                 
 
           </div>
           <div className='space-x-4 text-sm font-medium text-gray-400 mt-3'>
            <span>{tariff.author}</span>
            <span>{tariff.date}</span>
           </div>
         </div>
       ))}
     </div>

   </section>
  )
}

export default Tariff