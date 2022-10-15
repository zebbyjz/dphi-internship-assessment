import React, { Component } from "react";
import { Formik } from "formik";
import logo from "../dphi_logo.svg";

class Admin extends Component {
  state = {};

  input_schema = [
    {
      id: 1,
      name: "Challenge Name",
      type: "text",
      placeholder: "Challenge Name",
      value: "",
      label: "Challenge Name",
    },

    {
      id: 2,
      name: "Start date",
      type: "date",
      placeholder: "Add Start Date",
      value: "",
      label: "Start Date",
    },

    {
      id: 3,
      name: "Start date",
      type: "date",
      placeholder: "Add End Date",
      value: "",
      label: "End Date",
    },
  ];

  

  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="DPhi"></img>
        <h2 className="mt-3 mb-5">Challenge details</h2>
        <div className="form-group row">
          <div className="col-sm-4">

            <form onSubmit={this.props.onSubmitChallenge}>

              {this.input_schema.map((_input) => {
                return (
                  <React.Fragment>
                    <label htmlFor={_input.id}>{_input.label}</label>
                    <input
                      key={_input.id}
                      id={_input.id}
                      type={_input.type}
                      name={_input.name}
                      placeholder={_input.placeholder}
                      className="form-control mb-3"
                    ></input>
                  </React.Fragment>
                );
              })}
              <label htmlFor="desc" className="mt-3">
                Description
              </label>
              <textarea
                name="description"
                id="desc"
                className="form-control"
                rows="10"
              ></textarea>

              <label className="mt-3">Image</label>
              <input name="img-upload" type="file" className="form-control" />

              <label className="mt-3">Difficulty</label>

              <select
                name="difficulty"
                className="form-select"
                aria-label="Difficulty"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <button type="submit" className="btn btn-success mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
