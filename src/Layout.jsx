import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components' // Still using your awesome barrel file!

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* The Navbar stays permanently at the top */}
      <Navbar />
      
      {/* The Outlet is the magic "screen". React Router will inject your Home, About, etc. right here based on the URL */}
      <main className="container mx-auto py-8">
        <Outlet /> 
      </main>
    </div>
  )
}

export default Layout