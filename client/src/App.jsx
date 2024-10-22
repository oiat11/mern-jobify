import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { DashboardLayout, HomeLayout, Register, Login, Landing } from './pages'

// using an array to pass the structure to createBrowserRouter 
const router = createBrowserRouter([
  {
  path:'/',
  element: <HomeLayout/>,
  children: [
    {
      // when index: trur is set, this represents the default route when visiting the parent path
      index:true,
      element: <Landing/>
    },
    {
      path:'register',
      element: <Register/>
      
    },
    {
      path:'login',
      element: <Login/>
      
    },
    {
      path:'dashboard',
      element: <DashboardLayout/>
      
    },

  ]
  
},

]) 

function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App
