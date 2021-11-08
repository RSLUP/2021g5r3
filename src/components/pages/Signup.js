import React from 'react';
import signin from "../images/signin.png";


const Signup = () =>{
    return(
        
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form">

                            <div className="form-group">
                                <label htmlFor="name">
                                    <i class="zmdi zmdi-account materials-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"
                                /> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email materials-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"
                                /> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock materials-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"
                                /> 
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock materials-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Re- enter your password"
                                /> 
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit"
                                 value="register"
                                />
                            </div>
                        </form>

                        <div className="signup-image">
                            <figure>
                                <img src={signin} alt="registration pic" />
                            </figure>
                            <navLink to="/login" className="signup-image-link">I am already register</navLink>
                         </div>   

                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Signup;