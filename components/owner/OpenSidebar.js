import React, {useContext, useState} from 'react'

import {MenuIcon} from '@heroicons/react/outline'
import TemplateContext from '../../context/TemplateContext'

export default function OpenSidebar() {
    const {sidebarOpen}=useContext(TemplateContext)
    const [state, setState]=useState(sidebarOpen)

    return (
    <div className="lg:hidden">
    <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
      <div>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </div>
      <div>
        <button
          type="button"
          className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
          onClick={() => setState(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
  )
}
