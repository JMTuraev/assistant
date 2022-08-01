/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react'
import CreateMarket from '../../../components/owner/CreateMarket'
import TemplateContext from '../../../context/TemplateContext'

export default function market() {
  const {user, setUser}=useContext(TemplateContext)
    return (
    <div className='grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 '>
   <main className="col-span-10 lg:col-span-8 xl:col-span-8">
       

             <div className="bg-white px-2 pb-2 shadow sm:pb-2 ">
               <CreateMarket user={user} setUser={setUser}  />
             </div>

         
       </main>
          <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
            Right Block Market
        </aside>

    </div>
  )
}
