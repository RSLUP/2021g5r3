import React, { Component } from "react";
import signup from "./signup.png";
import form from "./form.css";

class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <div className="box">
            <img className="img-fluid" src={signup}></img>
            <div className="box-text">
              <h2 className="title">{"Let's Get Started !"}</h2>
              <form className="card-text">
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputUsername1"
                  ></input>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  ></input>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  ></input>
                </div>
                <a href="#" className="Forgot-Password-link">
                  Forgot Password?
                </a>
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </form>
              <hr className="line"></hr>
              <p className="Sign-In-link">
                Already have an account?
                <a href="#"> Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
