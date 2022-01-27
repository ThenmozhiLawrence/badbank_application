import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
       <div class="container-fluid">
       <div class="row-6 gx-5"> 
       <div class="d-grid gap-3">
          <div className="col s12 center-align">
          <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>
              <b>Then's Bad Bank</b> 
            </h1>
            <p className="flow-text grey-text text-darken-1">
              Manage your accounts with us, simple put and pick policy !!!
            </p>
            <br />
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <b>Register</b>
              </Link>
            </div>
            <br />
            <br />
            
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect orange black-text"
              >
                <b>Log In</b>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;