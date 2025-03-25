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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
