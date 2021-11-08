import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import facebook from '../images/facebook.png' ;
import whatsapp from '../images/whatsapp.png' ;
import twitter from '../images/twitter.png' ;
import linkedin from '../images/linkedin.png' ;

function Footer() {
  return (
    <div className="row bg-dark p-0 m-0 pt-2 footer">
        <div className="col-sm-3 col-6">
            <h5>OFFICE</h5>
            <p>Balangoda Road,<br/>Pambahinna,<br/>Belihuloya.</p>
        </div>
        <div className="col-sm-3 col-6">
            <h5>OUR COMPANY</h5>               
            <div>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 footerLink pl-3">
                <li className="nav-item">
                <Link to="/" className="nav-link active link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/quiz" className="nav-link active link">Quiz</Link>
                </li>
                <li className="nav-item">
                <Link to="/Login" className="nav-link active link">Login</Link>
                </li>
                <li className="nav-item">
                <Link to="/Signup" className="nav-link active link">Signup</Link>
                </li>
                </ul>
            </div>            
        </div>
        <div className="col-sm-3 col-6">
            <h5>CONTACT US</h5>
            <p>Email: <a href="GeniQ34@gmail.com">GeniQ34@gmail.com</a></p>
            <p>Call : +9470382382</p>
            <span className="row social">
                <a className="col-sm-3 col-3" href="www.facebook.com"><img src={facebook} alt="facebook" width={"100%"}/></a>
                <a className="col-sm-3 col-3" href="www.whatsapp.com"><img src={whatsapp} alt="whatsapp" width={"100%"}/></a>
                <a className="col-sm-3 col-3" href="www.twitter.com"><img src={twitter} alt="twitter" width={"100%"}/></a>
                <a className="col-sm-3 col-3" href="www.linkedin.com"><img src={linkedin} alt="linkedin" width={"100%"}/></a>
            </span>
        </div>
        <div className="col-sm-3 col-6">
            <h5>OUR MOBILE APP</h5>
        </div>
        <small className="text-center text-white pt-3 col-sm-12 col-12">&copy; Copyright 2021, GeniQ</small>
    </div>
   
  );
}

export default Footer;


