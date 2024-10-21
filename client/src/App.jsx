import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
  path:'/',
  element: <h1>home</h1>
  
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
