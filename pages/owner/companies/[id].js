/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect, useState, useEvent } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs';
import FormCompany from '../../../components/company/FormCompany';
import CreateCompany from '../../../components/company/FormCompany';
import List from '../../../components/company/List';
import SectionHeadings from '../../../components/SectionHeadings';
import Tariff from '../../../components/Tariff/Tariff';


function company() {
  const [company, setCompanies] = useState({});
  const [markets, setMarkets]=useState()
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const router=useRouter()
  const {id, name}=router.query

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

  useEffect(() => {
    getMarket()
    setLoading(true);
}, [markets]);

  const getMarket=async()=>{
    const res=await fetch(`http://localhost:3000/api/company/getMarket/${id}`)
    const data=await res.json()
    const {company}=data
    const {market}= company

    setMarkets(market)
  }

  const pages=[
    { name:'Организация', href:'http://localhost:3000/owner', current:false  },
    { name:'Список организации', href:'http://localhost:3000/owner/companies', current:true  },
    { name:'Организация', href:'#', current:true  }
  ]
  const tabs = [
    { id:1, name: 'Статистика', href: '#', current: false },
    { id:2, name: 'Магазины', href: '#', current: false },
    { id:3, name: 'Тарифы', href: '#', current: false },
    { id:4, name: 'Персонал', href: '#', current: true },
    { id:5, name: 'Offer', href: '#', current: false },
    { id:6, name: 'Hired', href: '#', current: false },
  ]
  const [showSettings, setShowSettings]=useState()
  const [active, setActive]=useState(1)
    return (
      <>
   
<div className="grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 overflow-y-hidden">
      <main className="col-span-10 lg:col-span-8 xl:col-span-8">
      <div>
          <Breadcrumbs pages={pages}/>
          <SectionHeadings tabs={tabs} header={name} settings={true} setShow={setShowSettings} show={showSettings} setActive={setActive} active={active}/>
  
    </div>
    
      {showSettings && <FormCompany companyId={id} company={company} header='Изменить данние организации' buttonValue='изменить'/>}   
      <div className='py-3 '>
      { markets && active===2 && <List data={markets} header='Список Магазины' addNew={true} addButtonValue={'Новый магазин'} setShow={setShow} show={show}  href={'ss'} />}
      </div>
      <div className="py-6 my-6">
          {active===3 && <Tariff/>}
          </div>
      </main>
      <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
        <div className="sticky top-4 ">
        {active===3 && 'Noviy tarif'}

        </div>
      </aside>
    </div>


      </>
  )
}

export default company