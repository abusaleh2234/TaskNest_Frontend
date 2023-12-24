import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Dashbord from "../Layout/Dashbord/Dashbord";
import CreateTask from "../Pages/Dashbord/CreateTask/CreateTask";
import PreviousTask from "../Pages/Dashbord/PreviousTask/PreviousTask";
import About from "../Component/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/dashbord",
      element: <Dashbord></Dashbord>,
      children: [
        {
          path: "/dashbord/creattask",
          element: <CreateTask></CreateTask>
        },
        {
          path: "/dashbord/previoustask",
          element: <PreviousTask></PreviousTask>
        }
      ]
    }
  ]);