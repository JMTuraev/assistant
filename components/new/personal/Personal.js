import React, {useState} from 'react'
import NewPesonal from './NewPersonal'
import PersonalList from './PersonalList'
import SearchPersonal from './SearchPersonal'

export default function Personal() {
    const [show, setShow]=useState(false)
    return (
    <>
        <PersonalList/>
    </>
  )
}
