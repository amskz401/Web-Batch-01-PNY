import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-user" className="nav-link">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <Outlet></Outlet>
    </>
  );
}
