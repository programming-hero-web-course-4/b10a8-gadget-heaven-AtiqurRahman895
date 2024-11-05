import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Base from './components/baseComponent/Base';
import Home from './components/HomeComponent/Home';
import Gadget from './GadgetPageComponent/Gadget';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "gadget/:product_id",
        element: <Gadget/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

    <ToastContainer position="top-center"/>

  </StrictMode>,
)
