import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Component/Shop/Shop";
import Orders from "./Component/Orders/Orders";
import Inventory from "./Component/Inventory/Inventory";
import About from "./Component/About/About";
import { productAndCartLoaders } from "./Loaders/productAndCartLoaders";
import LogIn from "./Component/Login/LogIn";
import SignUp from "./Component/SignUp/SignUp";
import Shipping from "./Component/Shipping/Shipping";
import PrivateRoute from "./Component/Routes/PrivateRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: () => fetch("http://localhost:5000/products"),
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          // loader: () => fetch("http://localhost:5000/products"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",

          loader: productAndCartLoaders,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "aboutUs",
          element: <About></About>,
        },
        {
          path: "login",
          element: <LogIn></LogIn>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
