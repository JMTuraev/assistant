/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Companies from "../../../components/company/Companies";
import ProfileFormNEW from "../../../components/owner/ProfileFormNEW";
import SectionHeadings from "../../../components/SectionHeadings";
import Tariff from "../../../components/Tariff/Tariff";
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

  const [show, setShow]=useState(false)

const tabs = [
  { id:1, name: 'Тарифы', href: '#', current: false },
  { id:2, name: 'Персонал', href: '#', current: true },
  { id:3, name: 'Offer', href: '#', current: false },
  { id:4, name: 'Hired', href: '#', current: false },
]
const [select, setSelect]=useState(1)

  return (
    <div className=" grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 ">
      <main className="col-span-10 lg:col-span-8 xl:col-span-8">
        <Breadcrumbs pages={pages} />
  
      <div className="">
        <SectionHeadings tabs={tabs} select={select} setSelect={setSelect} buttonValue={'Список организации'} setShow={setShow} show={show} />
        {show && <Companies companies={companies} setCompanies={setCompanies} />}
        {select===1 && <Tariff />}
        </div>
       
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
