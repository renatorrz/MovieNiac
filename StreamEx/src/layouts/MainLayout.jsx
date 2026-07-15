import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Topbar />
      <Outlet className={styles.mainContent} />
      <Footer />
    </div>
  )
}

export default MainLayout