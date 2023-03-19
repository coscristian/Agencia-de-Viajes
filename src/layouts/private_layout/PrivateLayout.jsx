import NavBar from 'components/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <div>
        <NavBar />
        <main><Outlet /></main>
    </div>
  )
}

export default PrivateLayout