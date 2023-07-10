// import React from 'react'
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <>
// <header className="p-3 bg-dark text-white">
//   <div className="container">
//     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//     <NavLink
//      to="/"
//      className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//        >
//      LOGO
//       </NavLink>
//       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//         <li>
        
//         </li>
//         {/* <li>
//           <NavLink to='/home'  className="nav-link px-2 text-white"
//           >
//             Home
//           </NavLink>
//         </li> */}
//         <li>
//           <NavLink to='/create'  className="nav-link px-2 text-white"
//           >
//             Create
//           </NavLink>
//         </li>
     
//         <li>
//         <NavLink to='/help' className="nav-link px-2 text-white">
//           Help
//         </NavLink>
//         </li>
//       </ul>
//       <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//         <input
//           type="search"
//           className="form-control form-control-dark"
//           placeholder="Search..."
//           aria-label="Search"
//         />
//       </form>
//       <div className="text-end">
//         <button type="button" className="btn btn-outline-light me-2">
//           Login
//         </button>
//       </div>
//     </div>
//   </div>
// </header>

//     </>
//   )
// }

// export default Navbar


import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header className="p-3 mb-3 border-bottom bg-dark">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-bg-start">
      <NavLink
        to="/"
        className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
      >
        LOGO
      </NavLink>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/create" className="nav-link px-2 link-body-emphasis">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className="nav-link px-2 link-body-emphasis">
          Help
          </NavLink>
        </li>

      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="dropdown text-end">
        <NavLink
          to="#"
          className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width={32}
            height={32}
            className="rounded-circle"
          />
        </NavLink>
        <ul className="dropdown-menu text-small" style={{}}>
          <li>
            <NavLink className="dropdown-item" to="#">
              New project...
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              Profile
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <NavLink className="dropdown-item" to="">
              Sign out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Navbar
