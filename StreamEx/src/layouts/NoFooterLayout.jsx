import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Outlet } from 'react-router-dom'

const NoFooterLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default NoFooterLayout