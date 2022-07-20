import "../styles/globals.css";
import React, { useState } from "react";
import TemplateContext from "../context/TemplateContext";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar

  const [user, setUser] = useState([]);

  const [sessio, setSessiona] = useState(true);

  const [showNewCompanyBlock, setShowNewCompanyBlock] = useState(false);


  if (sessio){

    
    const apiUrl = 'http://localhost:3000/api/auth/session';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>{ 
        setUser(data.user)
      });
      
      
    }

  return (
    <SessionProvider session={session}>
      <TemplateContext.Provider
        value={{ showNewCompanyBlock, setShowNewCompanyBlock, sidebarOpen, user, setSessiona }}
      >
        <Component {...pageProps} />
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
