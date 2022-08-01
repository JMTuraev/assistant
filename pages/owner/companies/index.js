/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Companies from "../../../components/company/Companies";

function companies() {
  const [companies, setCompanies] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData()
    setLoading(true);
}, [companies]);

  const getData=async()=>{
    await fetch("http://localhost:3000/api/company/1")
    .then((res) => res.json())
    .then((data) => {
      setCompanies(data.company);
      setLoading(false);
    });
  }

  return (
    <div className="grid grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-10 xl:gap-4 ">
      <main className="col-span-10 lg:col-span-8 xl:col-span-8">
          <Companies companies={companies} setCompanies={setCompanies} />
      </main>
      <aside className="hidden col-span-2  lg:col-span-4 xl:block xl:col-span-2">
        <div className="sticky top-4 ">Right Menu</div>
      </aside>
    </div>
  );
}

export default companies;

