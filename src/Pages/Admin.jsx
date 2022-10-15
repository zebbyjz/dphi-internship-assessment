import React, { Component } from "react";
import {Formik} from 'formik';
import logo from '../dphi_logo.svg'


class Admin extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="DPhi"></img>
        <h2 className="mt-3">Challenge details</h2>
        
      </React.Fragment>
    );
  }
}

export default Admin;
