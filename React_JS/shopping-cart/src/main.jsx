import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemsList from "./components/ItemsList.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Faq from "./components/Faq.jsx";
import About from "./components/About.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ItemsList /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/faq", element: <Faq /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
