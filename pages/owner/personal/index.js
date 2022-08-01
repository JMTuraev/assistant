/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react'
import NewPersonal from '../../../components/personal/NewPersonal/NewPersonal'
import Personal from '../../../components/personal/Personal'

import TemplateContext from '../../../context/TemplateContext'

export default function personal() {
  const {user, setUser}=useContext(TemplateContext)
    return (
    <div className='grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 '>
   <main className="col-span-10 lg:col-span-8 xl:col-span-8">
       

             
               <Personal user={user} setUser={setUser}  />
             

         
       </main>
          <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
            <NewPersonal />
        </aside>

    </div>
  )
}
