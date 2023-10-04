import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element:<Career />
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/register',
        element:<Register />
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        loader:()=> fetch(`/news.json`)
      },
    ]
  }
])