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

  onSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let packed_array = [];
    let base64String="";

    for (const field of formData) {
      if (field[0] === "img-upload" && field[1]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log("Full url", reader.result);
          base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");
            let obj = {};
        obj[field[0]] = base64String;
        packed_array.push(obj);
          console.log("BASE64", base64String);
        };
        reader.readAsDataURL(field[1]);
      }
      else {
        let obj = {};
        obj[field[0]] = field[1];
        packed_array.push(obj);
      }
    }

    console.log(packed_array)
    
    }



  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="DPhi"></img>
        <h2 className="mt-3 mb-5">Challenge details</h2>
        <div className="form-group row">
          <div className="col-sm-4">
            <form onSubmit={this.onSubmit}>
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
