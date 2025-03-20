import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import UpdateCoffee from './components/Layout/UpdateCoffee';
import AddCoffee from './components/Layout/AddCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
