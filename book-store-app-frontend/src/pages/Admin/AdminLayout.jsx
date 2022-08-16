import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminAppbar from '../../components/AdminAppBar'

const AdminLayout = () => {
  return (
    <main>
      <AdminAppbar/>
        <Outlet/>
    </main>
  )
}

export default AdminLayout