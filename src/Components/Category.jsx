import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'

const Category = () =>{

    const [show, setShow] = useState(false);

    return(
        <>
           
          <section className="navbar-bg">
           <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
              <div className="bars">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setShow(!show)}>
                <FontAwesomeIcon  icon={faBars}/>
                </button>
                </div>
                <span className="navbar-brand">
                    <span>Category</span>
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
                </div>
              </div>
              <div className="listItem">
                <FontAwesomeIcon className="icon" icon={faPlus}/>
                </div>
           </nav>
           
           </section>
           
           

        </>
    );
}
export default Category;