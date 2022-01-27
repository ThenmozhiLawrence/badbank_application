import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
             <div class="container-fluid">
                <i class="fas fa-university fa-3x"></i> 
                <a class="navbar-brand" class="font-weight-bolder" class="link-dark" href="#">
                <h2>Bad Bank</h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
                    <a class="nav-link" href="#"> <b>Contact Us</b></a>
                  </div>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navbar;