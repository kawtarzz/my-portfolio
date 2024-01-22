import './index.scss'
import { Outlet } from 'react-router-dom'
import Home from '../Home'
import Navbar from '../Sidebar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Outlet />
    </>
  )
}

export default Layout
