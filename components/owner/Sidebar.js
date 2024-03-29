import React , {useEffect,useState }from 'react'
import Link from 'next/link'
import { useSession } from "next-auth/react"

import {
    CalendarIcon,
    HomeIcon,
    MapIcon,
    SearchCircleIcon,
    SpeakerphoneIcon,
    UserGroupIcon,
  } from '@heroicons/react/outline'
import TransitionPage from './TransitionPage'


  
export default function SideBar(props) {

  

    const navigation = [
        { name: 'Dashboard', href: '#', count:2, icon: HomeIcon, current: true },
        { name: 'Calendar', href: '#', count:2, icon: CalendarIcon, current: false },
        { name: 'Teams', href: '#', count:2, icon: UserGroupIcon, current: false },
        { name: 'Directory', href: '#', count:2,  icon: SearchCircleIcon, current: false },
        { name: 'Announcements', href: '#', count:2, icon: SpeakerphoneIcon, current: false },
        { name: 'Office Map', href: '#', count:2, icon: MapIcon, current: false },
      ]
    
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      
  return (
    <>
    <TransitionPage navigation={navigation}/>
    <div className="hidden lg:flex lg:flex-shrink-0">
    <div className="flex flex-col w-64">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg"
              alt="Workflow"
            />
          </div>
          <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  ) }
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500 ' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                  {item.count}
                </a>
              ))}
            </div>
          </nav>
        </div>
        
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          
           
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{ props.user.email }</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{ props.user.login }</p>
                  
                  <Link href='/api/auth/signout'>
                    <a>Выйти</a>
                  </Link>
     
                </div>
              </div>
                  
          
        </div>
      </div>
    </div>
  </div>

  
  </>
  )
  
}


