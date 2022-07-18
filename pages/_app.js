import '../styles/globals.css'
import React, { useState} from 'react';
import TemplateContext from '../context/TemplateContext'

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false) // for template. не работает openSideBar
  const [showNewCompanyBlock, setShowNewCompanyBlock ]=useState(false)
  
  return (
  <TemplateContext.Provider value={{showNewCompanyBlock, setShowNewCompanyBlock, sidebarOpen}}>
    <Component {...pageProps} />
  </TemplateContext.Provider>
  )
}

export default MyApp
