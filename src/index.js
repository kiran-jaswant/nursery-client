import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import PlantView from './views/PlantView/PlantView';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/plant",
    element:<PlantView></PlantView>
  },
  {
    path:"*",
    element:<h1>Page not Found</h1>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

