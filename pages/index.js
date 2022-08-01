import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

  

export default function Home() {
  return (
  
  <div className='bg-slate-800 grid grid-cols-12'>
    <div className='bg-indigo-100 col-span-10'>center</div>
    <div className='bg-indigo-400 col-span-2'>menu</div>
  </div>
  

  )
}
