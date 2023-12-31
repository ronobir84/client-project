import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut.jsx';
import Home from './Pages/HomePage/Home/Home.jsx';
import ContactHomePage from './Pages/ContactPage/ContactHome/ContactHomePage/ContactHomePage.jsx';
import AgentsHome from './Pages/Agents/AgentsHome/AgentsHome.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: '/contact',
        element : <ContactHomePage></ContactHomePage>
      },
      {
        path: "/agents",
        element : <AgentsHome></AgentsHome>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <div className='bg-white'>
      <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
