import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Layout/Home/Home';
import FirstPage from './Component/FirstPage/FirstPage';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/Header/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  children: [
    {
      path: "/",
      element: <FirstPage/>,
      loader:()=>fetch('catagorydata.json')
    },
    {
      path: "/statistics",
      element: <Statistics/>,
    },
    {
      path: "/applied-jobs",
      element: <AppliedJobs/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },

  ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
