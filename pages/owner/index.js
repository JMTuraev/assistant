/* This example requires Tailwind CSS v2.0+ */
import {useState } from 'react'



import SideBar from '../../components/owner/Sidebar'
import OpenSidebar from '../../components/owner/OpenSidebar'
import OwnerPersonalForm from '../../components/owner/forms/OwnerPersonalForm'
import Companies from '../../components/owner/company/Companies'


export default function Example() {
  

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="h-screen flex">
     
        {/* Static sidebar for desktop */}
        <SideBar />
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
       <OpenSidebar/>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" > 
                  <OwnerPersonalForm/>
                  <Companies/>
                </div>
                  
              </div>
              {/* End main area */}
            </main>
            <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" >
                  1
                </div>
              </div>
              
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
