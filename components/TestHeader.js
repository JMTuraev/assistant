import React from 'react'
import {navigation} from '../data/TemplateData'

export default function TestHeader() {
  return (
    navigation.map(nav=>nav.name)
  )
}
