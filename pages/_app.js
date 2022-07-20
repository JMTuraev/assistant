import "../styles/globals.css";
import React, { useState, useEffect  } from "react";
import TemplateContext from "../context/TemplateContext";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar

  const [user, setUser] = useState([]);
  
  const [companys, setCompany] = useState([]);

  const [sessio, setSessiona] = useState(true);

  const [showNewCompanyBlock, setShowNewCompanyBlock] = useState(false);


  if (sessio) {
    
  //   useEffect(() => {
      let apiUrl = "http://localhost:3000/api/user";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data.user);
        });
      
        apiUrl = "http://localhost:3000/api/company";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setCompany(data.data.company);
          });
  //   });
    
  setSessiona(false);
  } 

  console.log(companys);


  return (
    <SessionProvider session={session}>
      <TemplateContext.Provider
        value={{
          showNewCompanyBlock,
          setShowNewCompanyBlock,
          sidebarOpen,
          user,
          companys,
          setSessiona,
          setUser,
          setCompany
        }}
      >
          <Head>
            <title> Assistant </title>
          </Head>
            <Component {...pageProps} />
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
