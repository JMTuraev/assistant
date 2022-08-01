import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function company() {
  const [companies, setCompanies] = useState();
  const [isLoading, setLoading] = useState(false);

  const router=useRouter()
  const {id}=router.query

  useEffect(() => {
    getData()
    setLoading(true);
}, [companies]);

  const getData=async()=>{
    await fetch(`http://localhost:3000/api/company/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setCompanies(data.company);
      setLoading(false);
    });
  }

    return (
    <div>id : asdasd</div>
  )
}

export default company