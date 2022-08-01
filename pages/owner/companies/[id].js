/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs';
import FormCompany from '../../../components/company/FormCompany';
import CreateCompany from '../../../components/company/FormCompany';
import List from '../../../components/company/List';

function company() {
  const [company, setCompanies] = useState({});
  const [markets, setMarkets]=useState([])
  const [isLoading, setLoading] = useState(false);

  const router=useRouter()
  const {id}=router.query

  useEffect(() => {
    getCompany()
    setLoading(true);
}, [company]);


  const getCompany=async()=>{
    const res=await fetch(`http://localhost:3000/api/company/get/${id}`)
    const data=await res.json()
    const {company}= data
    setCompanies(company)
  }

  const getMarket=async()=>{
    const res=await fetch(`http://localhost:3000/api/company/get/${id}`)
    const data=await res.json()
    const {company}= data
    setCompanies(company)
  }

  const pages=[
    { name:'Организация', href:'http://localhost:3000/owner', current:false  },
    { name:'Список организации', href:'http://localhost:3000/owner/companies', current:true  },
    { name:'Организация', href:'#', current:true  }
  ]
    return (
      <>
   
<div className="grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 ">
      <main className="col-span-10 lg:col-span-8 xl:col-span-8">
      <div>
          <Breadcrumbs pages={pages}/>
    </div>
    
      <FormCompany companyId={id} company={company} header='Изменить данние организации' buttonValue='изменить'/>   
      <List/>
      </main>
      <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
        <div className="sticky top-4 ">Right Menu</div>
      </aside>
    </div>


      </>
  )
}

export default company