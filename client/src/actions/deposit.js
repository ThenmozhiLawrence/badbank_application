import React, { Component } from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import PropTypes from "prop-types";
import { connect, useStore } from "react-redux";
import { logoutUser } from "./authActions";
import { useParams } from "react-router-dom";

class Deposit extends Component{
    render(){
        const { user } = this.props.auth;
        console.log(user);
        return(
            <div class="container-fluid">
            <input type="text" placeholder="enter amount to be deposited" id="deposit_amount" name="deposit_amount" 
            style={{display:"none"}}/>
            <button id="deposit_submit" style={{display:"none"}} 
              onClick={() => {
              const amount = document.getElementById("deposit_amount").value;
              user.balance = user.balance + parseInt(amount);
              alert(`Successfully deposited. \n
              Your current balance is ${user.balance} USD`);
              document.getElementById("deposit_amount").style.display='none';
              document.getElementById("deposit_submit").style.display='none';
              //this.setState({user.balance});
            }}
            className="btn btn-large waves-effect waves-light hoverable orange accent-3">
            Submit</button>
            </div>
        )
    }
};

export default Deposit;
