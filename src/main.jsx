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
import ViewDetails from './Component/ViewDetails/ViewDetails';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import loadData from './Component/ViewDetails/Loaders/LoadData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    
  children: [
    {
      path: "/",
      element: <FirstPage/>,
      loader:()=>fetch('featurejobdata.json')
    },
    {
      path: "/:detailsId",
      element: <ViewDetails/>,
      loader:({params})=>fetch('/featurejobdata.json')
    },
    {
      path: "/statistics",
      element: <Statistics/>,
      loader:()=>fetch('/marksdata.json')
    },
    {
      path: "/applied-jobs",
      element: <AppliedJobs/>,
      loader: loadData
    },
    {
      path: "/blog",
      element: <Blog/>,
    }
 
  ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
