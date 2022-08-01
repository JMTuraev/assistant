import { useRouter } from 'next/router'
import React from 'react'

function company() {
  const router=useRouter()
  console.log(router)
  console.log(router.query)
    return (
    <div>id : asdasd</div>
  )
}

export default company