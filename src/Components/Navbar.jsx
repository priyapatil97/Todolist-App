import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [show, setShow] = useState(false);

    return(
        <>
        <div className="container">
          <section className="navbar-bg">
           <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setShow(!show)}>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand">
                  ThapaPay
                </span>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      
                      <li className="nav-item">
                        <NavLink  className="nav-link"  exact to ="/category">
                          Category
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/schedule">
                          Schedule
                        </NavLink>
                      </li>
                    </ul>
                    
                        <form className="d-flex">
                          {/* <button className=" btn-style btn-style-border" type="submit">Log In</button> */}
                        </form>
                    </div>
                </div>
           </nav>
           </section>
           </div>
        </>
    );
}
export default Navbar;