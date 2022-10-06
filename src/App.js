import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Component/Shop/Shop";
import Orders from "./Component/Orders/Orders";
import Inventory from "./Component/Inventory/Inventory";
import About from "./Component/About/About";
import { productAndCartLoaders } from "./Loaders/productAndCartLoaders";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",

          loader: productAndCartLoaders,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "aboutUs",
          element: <About></About>,
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
