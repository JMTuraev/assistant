import React, {useContext} from 'react'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import TemplateContext from '../../../../context/TemplateContext'

function AttachPerson({personal, companyId}) {
    const {setPersonalRole}=useContext(TemplateContext)
    const role=personal[0].role
    return (
    <button
    type="button"
    className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <PlusSmIconOutline 
        onClick={()=>setPersonalRole({role, companyId})}
        
        className="h-6 w-6"
        aria-hidden="true"   />
  </button>
  )
}

export default AttachPerson