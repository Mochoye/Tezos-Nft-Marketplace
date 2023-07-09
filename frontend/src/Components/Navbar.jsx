import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
<header className="p-3 bg-dark text-white">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <NavLink
     to="/"
     className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
       >
     LOGO
      </NavLink>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
        
        </li>
        <li>
          <NavLink to='/home'  className="nav-link px-2 text-white"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create'  className="nav-link px-2 text-white"
          >
            Create
          </NavLink>
        </li>
        <li>
        <NavLink to='/mint' className="nav-link px-2 text-white">
          Mint
        </NavLink>
        </li>
        <li>
        <NavLink to='/help' className="nav-link px-2 text-white">
          Help
        </NavLink>
        </li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">
          Login
        </button>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Navbar
