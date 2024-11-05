import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Base from './components/baseComponent/Base';
import Home from './components/HomeComponent/Home';
import Gadget from './GadgetPageComponent/Gadget';

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
    <RouterProvider router={router} />
  </StrictMode>,
)
