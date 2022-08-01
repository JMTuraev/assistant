import React, {Fragment, useContext, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import ProfileForm from '../owner/ProfileForm'

import CreateMarket from '../owner/CreateMarket'

import Static from '../owner/Static'

import Personal from '../personal/Personal'
import Companies from '../company/Companies'
import CompnayList from '../company/CompanyList'
import FilterPersonal from '../rightBlock/company/FilterPersonal'
import NewPersonal from '../personal/NewPersonal/NewPersonal'
import TemplateContext from '../../context/TemplateContext'


export default function CenterBlock({ tabs,  classNames, user, setUser, show, showCreateCompany, setShowCreateCompany, showCompany, selectCompany, companies, setCompanies }) {
  const {personalRole}=useContext(TemplateContext)
  const {role, companyId}=personalRole 
  return (
      <div className='grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 '>
   <main className="col-span-10 lg:col-span-8 xl:col-span-8">
         <ul role="list">
           <div className={show === "Статистика" ? "visible" : "hidden"}>
             <Static
               user={user}
               setUser={setUser}
               tabs={tabs}
               classNames={classNames}
             />
           </div>
   
           {/* <div className={show === "Настройки" ? "visible" : "hidden"}> */}
           <div className={ "visible" }>
             <div>
               <ProfileForm user={user} setUser={setUser} />
             </div>
           </div>

           {/* <div className={show === "Организация" ? "visible" : "hidden"}> */}
           <div className={"visible"}>
             <Companies
               showCreateCompany={showCreateCompany}
               showCompany={showCompany}
               setShowCreateCompany={setShowCreateCompany}
               companies={companies}
               setCompanies={setCompanies}
             />
           </div>
           
           <div className={ "visible" }>
           {/* <div className={show === "Моя команда" ? "visible" : "hidden"}> */}
             <Personal
               showCreateCompany={showCreateCompany}
               showCompany={showCompany}
               setShowCreateCompany={setShowCreateCompany}
               companies={companies}
               setCompanies={setCompanies}
             />
           </div>

           {/* <div className={show === "Магазин" ? "visible" : "hidden"}> */}
           <div className={ "visible"}>
             <div className="bg-white px-2 pb-2 shadow sm:pb-2 ">
               <CreateMarket user={user} setUser={setUser} show={show} />
             </div>
           </div>
         </ul>
       </main>
          <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
          <div className="sticky top-4 ">
    
          {/* <div className={  personalRole && show === 'Организация' ? 'visible' : 'hidden' }> */}
          <div className={   'visible' }>
              <FilterPersonal role={role} companyId={companyId}/>
          </div>
    
          {/* <div className={  show === 'Моя команда' ? 'visible' : 'hidden' }> */}
          <div className={   'visible' }>
    
            <section aria-labelledby="who-to-follow-heading">
              <NewPersonal show={show}   companies={companies}  />
            </section>
          </div>
    
          </div>
        
        </aside>

    </div>
     );
}
