import {Home, Register}  from "../Pages/index";

const routes = [
  {
    title: "Home",
    path: "/",
    description: "home",
    element: <Home />,
  },
  {
    title: "Register",
    path: "/register",
    description: "register Page",
    element: <Register />,
  },
];

export default routes;