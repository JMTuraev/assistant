import React, {Fragment, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import ProfileForm from '../new/ProfileForm'
import Companies from './company/Companies'
import CreateMarket from './CreateMarket'
import RoadMap from './roadMap'
import Static from './Static'
import CompnayList from './company/CompanyList'


export default function CenterBlock({icons, tabs, questions, classNames, user, setUser, show, showCreateCompany, setShowCreateCompany, showCompany, selectCompany, companies }) {
     return (
    <main className="lg:col-span-9 xl:col-span-6">

                <ul role="list" >
                  <div  className={  show === 'Статистика' ? 'visible' : 'hidden' }>  
                    <Static  user={user} setUser={setUser} tabs={tabs} classNames={classNames}  />
                  </div>
 
                <div  className={  show === 'Настройки' ? 'visible' : 'hidden' }>
                  <div >  
                    <ProfileForm  user={user} setUser={setUser}  />
                    </div>
                  </div>

                  <div  className={  show === 'Организация' ? 'visible' : 'hidden' }>
                   <Companies  showCreateCompany={showCreateCompany} showCompany={showCompany} setShowCreateCompany={setShowCreateCompany}  companies={companies}/>
                    <CompnayList/>  
                  </div>


                  <div  className={  show === 'Магазин' ? 'visible' : 'hidden' }>
                  <div className='bg-white px-2 pb-2 shadow sm:pb-2 '> 
                    <CreateMarket user={user} setUser={setUser} show={show}  />
                    </div>
                  </div>

                </ul>
              
              
              
            </main>
  )
}
