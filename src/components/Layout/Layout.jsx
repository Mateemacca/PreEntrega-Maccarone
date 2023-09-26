import React from 'react'
import NavBar from '../Navbar/NavBar'
export default function Layout({children}) {
  return (
    <>
    <NavBar />
    <div className='py-20'>
        {children}
    </div>
    </>
  )
}
