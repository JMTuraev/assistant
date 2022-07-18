import "../styles/globals.css";
import React, { useState } from "react";
import TemplateContext from "../context/TemplateContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for template. не работает openSideBar
  const [showNewCompanyBlock, setShowNewCompanyBlock] = useState(false);

  return (
    <SessionProvider session={session}>
      <TemplateContext.Provider
        value={{ showNewCompanyBlock, setShowNewCompanyBlock, sidebarOpen }}
      >
        <Component {...pageProps} />
      </TemplateContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
