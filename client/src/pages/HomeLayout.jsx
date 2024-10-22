import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
        <nav>navbar</nav>
        {/* Outlet is a placeholder of child route that will be rendered*/}
        <Outlet/>
    </div>
  )
}

export default HomeLayout
