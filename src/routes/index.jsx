import { createBrowserRouter } from "react-router-dom";

import ProductPage from "../pages/product/ProductPage";
import HomePage from "../pages/home/HomePage";

import Cart from "../pages/cart";
import User from "../pages/user";

import MainLayout from "../components/layout";
import ProductPages from "../pages/product/pruductPages/All";
import Active from "../pages/product/pruductPages/Active";

export let root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
        children: [
          {
            path: "/product/all",
            element: <ProductPages />,
          },
          {
            path: "/product/active",
            element: <Active />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
