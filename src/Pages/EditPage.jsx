import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";

function EditPage(props) {
  const location = useLocation();
  const [originalDetails] = useState(location.state);
  const [details, setDetails] = useState(location.state);
  const challenge = location.state;

  const input_schema = [
    {
      id: 1,
      name: "Challenge Name",
      type: "text",
      placeholder: "Challenge Name",
      value: details["Challenge Name"],
      label: "Challenge Name",
    },

    {
      id: 2,
      name: "Start date",
      type: "date",
      placeholder: "Add Start Date",
      value: details["Start date"],
      label: "Start Date",
    },

    {
      id: 3,
      name: "End date",
      type: "date",
      placeholder: "Add End Date",
      value: details["End date"],
      label: "End Date",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    let local_copy = { ...details };

    for (let key in local_copy) {
      if (key === name) {
        local_copy[key] = value;
      }
    }

    setDetails(local_copy);
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>

      <div className="container">
        <h2 className="mt-3 mb-5">Edit Challenge Details</h2>
        <div className="form-group row">
          <div className="col-sm-4">
            <form
              onSubmit={(event) =>
                props.onEditChallenge(event, details, originalDetails)
              }
            >
              {input_schema.map((_input) => {
                return (
                  <React.Fragment>
                    <label htmlFor={_input.id}>{_input.label}</label>
                    <input
                      key={_input.id}
                      id={_input.id}
                      type={_input.type}
                      name={_input.name}
                      placeholder={_input.placeholder}
                      value={_input.value}
                      onChange={(e) => handleChange(e)}
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
                value={details["description"]}
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
      </div>
    </React.Fragment>
  );
}

export default EditPage;
