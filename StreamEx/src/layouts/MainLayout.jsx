import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout