/* This example requires Tailwind CSS v2.0+ */
import {useState , useEffect} from 'react'
import Link from 'next/link'
import TemplateContext from '../../context/TemplateContext'



import SideBar from '../../components/owner/Sidebar'
import OpenSidebar from '../../components/owner/OpenSidebar'
import Companies from '../../components/owner/company/Companies'
import ProfileForm from '../../components/owner/ProfileForm'
import Markets from '../../components/owner/market/Markets'
import { useContext} from "react";


import {
  CalendarIcon,
  OfficeBuildingIcon,
  HomeIcon,
  MapIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { Switch } from '@headlessui/react'


export default function Example() {

  
  const navigation = [
    { name: 'Dashboard', href: '#', count:2, icon: HomeIcon, current: true },
    { name: 'Организация', href: '#', count:2, icon: OfficeBuildingIcon, current: false },
    { name: 'Teams', href: '#', count:2, icon: UserGroupIcon, current: false },
    { name: 'Directory', href: '#', count:2,  icon: SearchCircleIcon, current: false },
    { name: 'Announcements', href: '#', count:2, icon: SpeakerphoneIcon, current: false },
    { name: 'Office Map', href: '#', count:2, icon: MapIcon, current: false },
  ]

  const [show, setShow]=useState()
  const {sidebarOpen, setSessiona, user, setUser, companys, setCompany}=useContext(TemplateContext)

  const onActive=(menu)=>{
    return setShow(menu)
  }
  return (
    <>
 
      <div className="h-screen flex">
        {/* <div>
          <Link href={"/api/auth/signout"}>
            <a>Выйти</a>
          </Link>
        </div> */}

        {/* Static sidebar for desktop */}
        <SideBar user={user} navigation={navigation} active={onActive} />
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <OpenSidebar />
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          
                <div className="h-max min-h-max pb-4 border-2 border-gray-200 border-dashed rounded-lg" > 

                
                <div className={show === 'Teams' ? 'invisble': 'visible'}>
                    <ProfileForm  user={user} setUser={setUser}/>  
                </div>
                
                
                <div className={show === 'Организация' ? 'invisble': 'invisible'}>
                  <Companies user={user} companys={companys}  setCompany={setCompany}/>  
                </div>
                  
                        
                  <Markets/>
                 
                </div>
              </div>
              {/* End main area */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

