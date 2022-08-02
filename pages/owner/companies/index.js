/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Companies from "../../../components/company/Companies";
import ProfileFormNEW from "../../../components/owner/ProfileFormNEW";
function companies() {
  const [companies, setCompanies] = useState();
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getCompany();
    setLoading(true);
  }, [companies]);

  const getCompany = async () => {
    await fetch("http://localhost:3000/api/company/1")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data.company);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }),
    [user];

  const getUser = async () => {
    await fetch("http://localhost:3000/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      });
  };

  const pages = [
    {
      name: "Организация",
      href: "http://localhost:3000/owner",
      current: false,
    },
    { name: "Список организации", href: "#", current: true },
  ];

  const [show, setShow]=useState(0)
  const [active, setActive]=useState(false)

  const onShow=(item)=>{
  setShow(item)
  setActive(!active)

  
}
  return (
    <div className=" grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 ">
      <main className="col-span-10 lg:col-span-8 xl:col-span-8">
        <Breadcrumbs pages={pages} />
        <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-yellow-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={()=>onShow(1)}
      >
        Список организации
      </button>
      <button
        type="button"
        className="ml-5 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-blue-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={()=>onShow(2)}
      >
        Общая правила для всех организации
      </button>
      
        {show===1 && active && <Companies companies={companies} setCompanies={setCompanies} />}
        {show===2 && active && 'asdasdasd' }
      
      </main>
      <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
        <div className="sticky top-4 ">
          <ProfileFormNEW user={user} />
        </div>
      </aside>
    </div>
  );
}

export default companies;
