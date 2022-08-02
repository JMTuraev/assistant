/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext, useEffect, useState} from 'react'
import List from '../../../components/company/List'
import CreateMarket from '../../../components/owner/CreateMarket'
import TemplateContext from '../../../context/TemplateContext'

export default function market() {
  const {user, setUser}=useContext(TemplateContext)
  const [markets, setMarkets]=useState()
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    getMarket()
    setLoading(true);
}, [markets]);

  const getMarket=async()=>{
    const res=await fetch(`http://localhost:3000/api/company/getMarket/${'id'}`)
    const data=await res.json()
    const {company}=data
    const {market}= company

    setMarkets(market)
  }
  return (
    <div className='grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 '>
   <main className="col-span-10 lg:col-span-8 xl:col-span-8">
       

             <div className="bg-white px-2 pb-2 shadow sm:pb-2 ">
               <CreateMarket user={user} setUser={setUser}  />
             </div>
             <List/>

         
       </main>
          <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
            Right Block Market
        </aside>

    </div>
  )
}
