import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
  path:'/',
  element: <HomeLayout/>
  
},
{
  path:'/about',
  element: (<div><h1>about page</h1></div>)
  
},
]) 

function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App
