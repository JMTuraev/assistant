import '../styles/globals.css'
import React, { useState} from 'react';
import TemplateContext from '../context/TemplateContext'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar
  return (
    <SessionProvider session={session}>
      <TemplateContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
        <Component {...pageProps} />
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp
