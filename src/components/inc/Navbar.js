import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar-dark bg-dark shadow navigation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                        <div className="container-fluid">
                        <Link to="/" className="navbar-brand">GeniQ</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item navItem">
                            <Link to="/" className="nav-link text-center active">Home</Link>
                            </li>
                            <li className="nav-item navItem">
                            <Link to="/Quiz" className="nav-link text-center active">Quiz</Link>
                            </li>
                            <li className="nav-item navItem">
                            <Link to="/Login" className="nav-link text-center active">Login</Link>
                            </li>
                            <li className="nav-item navItem">
                            <Link to="/Signup" className="nav-link text-center active">Signup</Link>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;