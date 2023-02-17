import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
  const state=useSelector((state)=> state.HandleCart);
  // console.log(state.length);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bold" to="/all about">All Product</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-3">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">Contact</NavLink>
              </li>


            </ul>
            <div className='d-flex'>

              <NavLink to="/login" className="btn btn-outline-dark me-3" type="submit"><i className="fa fa-sign-in pe-2" aria-hidden="true"></i>
                Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-dark me-3" type="submit"><i className="fa fa-registered pe-2" aria-hidden="true"></i>
                Register</NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark me-3" type="submit">Cart({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
