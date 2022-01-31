import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, useStore } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { deposit } from "../../actions/deposit";
import { useParams } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);

    return (
      <div class="container-fluid">
       <div className="row">
          <div className="landing-copy col s12 center-align">
            <br/>
            <br/>
            <br/>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <br/>
              <br/>
              <p className="flow-text dark-text text-darken-1">
                Welcome to {" "}
                <span style={{ fontFamily: "monospace" }}>Bad Bank</span> 👏
              </p>
              <br/>
              <br/>
              <p className="flow-text orange-text text-darken-1">
                Current Balance is {user.balance}
                <span style={{ fontFamily: "monospace" }}> USD</span> 
              </p>
              <br/>
              <br/>
            </h4>
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
            <a href="deposit">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={() => {
                document.getElementById("deposit_amount").style.display='block';
                document.getElementById("deposit_submit").style.display='block';
                }}
              className="btn btn-large waves-effect waves-light hoverable green accent-3" >
              Deposit 
            </button>  
            </a>
            <input type="text" placeholder="enter amount to be withdrawn" id="withdraw_amount" name="withdraw_amount" 
            style={{display:"none"}}/>
            <button id="withdraw_submit" style={{display:"none"}} 
              onClick={() => {
              const amount = document.getElementById("withdraw_amount").value;
              user.balance = user.balance - parseInt(amount);
              alert(`Successfully withdrawn. \n
              Your current balance is ${user.balance} USD`);
              document.getElementById("withdraw_amount").style.display='none';
              document.getElementById("withdraw_submit").style.display='none';
              //this.setState({user.balance});
            }}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3" >
              Submit</button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={() => {
                document.getElementById("withdraw_amount").style.display='block';
                document.getElementById("withdraw_submit").style.display='block';
              }}
              className="btn btn-large waves-effect waves-light hoverable grey accent-3" >
              Withdraw
            </button>
            <br/>
              <br/>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);