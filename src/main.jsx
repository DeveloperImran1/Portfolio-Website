import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

import { ToastContainer, toast } from 'react-toastify';

import AnimatedCursor from "react-animated-cursor"
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <Toaster />
    {/* <div className="App">
      <AnimatedCursor />
    </div> */}
  </React.StrictMode>,
)
