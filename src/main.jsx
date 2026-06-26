import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Contact, Projects, Skills, Navbar } from './components'
import Layout from './Layout'
console.log("COMPONENT CHECK:", { Home, About, Skills, Projects, Contact });

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div className="p-10 text-2xl text-white">Oops! Layout crashed.</div>,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: 'about', 
        element: <About /> 
      },
      { 
        path: 'skills', 
        element: <Skills /> 
      },
      { 
        path: 'projects', 
        element: <Projects /> 
      },
      { 
        path: 'contact', 
        element: <Contact /> 
      }
    ]
  }
])

// 2. THIS USES THE VARIABLE 'router'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)