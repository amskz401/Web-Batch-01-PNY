import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/List.jsx";
import AddUser, { getFormData } from "./components/AddUser.jsx";
import ViewUser from "./components/ViewUser.jsx";

// Simple
// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/add-user", element: <AddUser /> },
// ]);

// Parent Child
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <List /> },
//       { path: "/add-user", element: <AddUser /> },
//     ],
//   },
// ]);

// Parent Child with dynamic routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <List /> },
//       { path: "/add-user", element: <AddUser /> },
//       { path: "/user/:id", element: <ViewUser /> },
//     ],
//   },
// ]);

const loadData = () => {
  return [
    {
      id: 1,
      first_name: "User",
      last_name: "One",
      email: "user@one.com",
    },
    {
      id: 2,
      first_name: "User",
      last_name: "One",
      email: "user@one.com",
    },
    {
      id: 3,
      first_name: "User",
      last_name: "One",
      email: "user@one.com",
    },
  ];
};
// Load Data Before route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <List />, loader: loadData },
      { path: "/add-user", element: <AddUser />, action: getFormData },
      { path: "/user/:id", element: <ViewUser /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
