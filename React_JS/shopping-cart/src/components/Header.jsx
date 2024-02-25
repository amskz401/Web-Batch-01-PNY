import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></NavLink>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-secondary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="nav-link px-2 text-white">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" className="nav-link px-2 text-white">
                About
              </NavLink>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning me-2 ">
              Sign-up
            </button>
            <button
              type="button"
              className="btn btn-primary position-relative me-2 "
              onClick={() => navigate("/cart")}
            >
              <i className="bi bi-cart"></i> Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">cart items</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
