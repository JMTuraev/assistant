import React, { useContext, useEffect, useState } from 'react'

import Header from '../../components/new/Header'
import LeftMenu from '../../components/new/LeftMenu'
import CenterBlock from '../../components/new/CenterBlock'
import RightBlock from '../../components/new/RightBlock/RightBlock'
import TemplateContext from '../../context/TemplateContext'
import { ChatAltIcon, CodeIcon, DotsVerticalIcon, EyeIcon, FlagIcon, PlusSmIcon, SearchIcon, ShareIcon, StarIcon, ThumbUpIcon, UserGroupIcon, } from '@heroicons/react/solid'
import { BellIcon, LibraryIcon, PresentationChartBarIcon, MenuIcon, TrendingUpIcon, ShoppingBagIcon, XIcon, LogoutIcon  } from '@heroicons/react/outline'
import { prisma, PrismaClient } from '@prisma/client'

// const user = {
//   name: 'Chelsea Hagon',
//   email: 'chelsea.hagon@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Статистика', href: '#', icon: PresentationChartBarIcon, current: true },
  { name: 'Организация', href: '#', icon: LibraryIcon, current: false },
  { name: 'Магазин', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Моя команда', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
  { name: 'Конструктор', href: '#', icon: TrendingUpIcon, current: false },
]
const userNavigation = [
  { name: 'Настройки', href: '#' },
  { name: 'Выход', href: '#' },
]
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]

const companies=[
  {
    id: 2,
    id_u: "company-50g6hexsl5xv17hw",
    name: "Reynolds, Lueilwitz and Gutkowski",
    category: "Games",
    location: "20385 Runte Village",
    lawAddress: "06400 Krystel Ridge",
    inn: "00001425",
    bankAccount: "18495011",
    mfo: "60547706",
    owner: "user-50g6huol5xv0nu9"
  },
  {
    id: 3,
    id_u: "company-50g6hexsl5xv17i6",
    name: "Haag, Keebler and Schaefer",
    category: "Baby",
    location: "885 Ephraim Glen",
    lawAddress: "3077 Forrest Key",
    inn: "50260683",
    bankAccount: "44951352",
    mfo: "06125900",
    owner: "user-50g6huol5xv0nu9"
  },
  {
    id: 4,
    id_u: "company-50g6hexsl5xv17ih",
    name: "Swift, Raynor and Cruickshank",
    category: "Health",
    location: "3527 Grady Course",
    lawAddress: "09746 Bernhard Highway",
    inn: "49104929",
    bankAccount: "55025965",
    mfo: "78556052",
    owner: "user-50g6huol5xv0nu9"
  },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example({company}) {

  const {user, setUser, session}=useContext(TemplateContext)
  
  const [show, setShow]=useState()
  const [showCompany, setShowCompany]=useState()
  const [showCreateCompany, setShowCreateCompany]=useState(true)

  
  
  const onActive=(active, companyId)=>{
    active===null?show:setShow(active)
    setShowCompany(companyId)
  
  }


    
  
  return (
    
    <>

  
    
      <div className="min-h-full">
       
       <Header 
          icons={{BellIcon, MenuIcon, XIcon, SearchIcon, LogoutIcon}}
          navigation={navigation}
          userNavigation={userNavigation}
          user={user}
          classNames={classNames}
          onActive={onActive}
          />

        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          
          <LeftMenu
            navigation={navigation}
            communities={communities}
            onActive={onActive}
            show={show}
            
          />
          <CenterBlock
            tabs={tabs}
            questions={questions}
            classNames={classNames}
            setUser={setUser}
            user={user}
            show={show}
            showCreateCompany={showCreateCompany}
            setShowCreateCompany={setShowCreateCompany}
            showCompany={showCompany}
            companies={companies}
          />
          <RightBlock
            whoToFollow={whoToFollow}
            trendingPosts={trendingPosts}
            show={show}
            setShowCreateCompany={setShowCreateCompany}
            showCreateCompany={showCreateCompany}
            companies={companies}
            onActive={onActive}
            
          />
          
          </div>
        </div>
      </div>
    </>
  )
}

// Fetch posts from authenticated user 
// (in /pages/index.tsx)
// export const getServerSideProps = async ({ req }) => {
// const company=await prisma.company.findMany({
//   where:{
//     owner:session.user.id_u}
// })
// return {props:{company}}
// }