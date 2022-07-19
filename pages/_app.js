import "../styles/globals.css";
import React, { useState } from "react";
import TemplateContext from "../context/TemplateContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar

  const [user, setUser] = useState([]);

  const [showNewCompanyBlock, setShowNewCompanyBlock] = useState(false);

  try {
    const apiUrl = 'http://localhost:3000/api/auth/session';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>{ 
        setUser(data.user)
      });
  } catch (error) {
    setUser({})
    
  }



  return (
    <SessionProvider session={session}>
      <TemplateContext.Provider
        value={{ showNewCompanyBlock, setShowNewCompanyBlock, sidebarOpen, user }}
      >
        <Component {...pageProps} />
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
