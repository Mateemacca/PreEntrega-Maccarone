import React from 'react'
import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'
export default function Layout({children}) {
  return (
    <>
    <NavBar />
    <div className='py-20 min-h-screen'>
        {children}
    </div>
    <Footer />
    </>
  )
}
