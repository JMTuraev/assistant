import '../styles/globals.css'
import React, { useState} from 'react';
import TemplateContext from '../context/TemplateContext'

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false) // for template. не работает openSideBar
  return (
  <TemplateContext.Provider value={{sidebarOpen, setSidebarOpen}}>
    <Component {...pageProps} />
  </TemplateContext.Provider>
  )
}

export default MyApp
