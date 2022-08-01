import "../styles/globals.css";
import React, { useState, useEffect  } from "react";
import TemplateContext from "../context/TemplateContext";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "../components/Layout";
import {  navigation, userNavigation, classNames, communities } from "../data/TemplateData";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar

  const [user, setUser] = useState([]);
  
  const [companys, setCompany] = useState([]);

  const [sessio, setSessiona] = useState(true);

  const [showNewCompanyBlock, setShowNewCompanyBlock] = useState(false);

  const {laoadins, SetLoading} = useState(true)

  const [role, setRole]=useState('owner')
  // cerez session uznat kto on
    const WhichRole=()=>{
      // setRole('')
}

// company page right block show role list
  const [personalRole, setPersonalRole]=useState({})

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
          setCompany,
          setPersonalRole,
          personalRole, 
          navigation, 
          userNavigation,
          classNames,
          communities,
          role
        }}
      >
     <Layout>
        <Head>
          <title> Assistant </title>
        </Head>
        <Component {...pageProps} />
        </Layout>
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
