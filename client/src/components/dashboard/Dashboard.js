import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

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
                Current Balance is <b>100</b>  {user.balance}
                <span style={{ fontFamily: "monospace" }}>USD</span> 
              </p>
              <br/>
              <br/>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onDepositClick}
              className="btn btn-large waves-effect waves-light hoverable green accent-3" >
              Deposit 
            </button>           
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onWithdrawClick}
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