import React from "react";
import Timer from "../Components/Timer";
import { Link,Routes,Route,BrowserRouter as Router } from "react-router-dom";
import EditPage from "./EditPage";

function Card(props) {
  const challenge = props.challenge;
  const start_date = new Date(challenge["Start date"]);
  const end_date = new Date(challenge["End date"]);
  const curr_date = new Date(Date.now());

  const challengeState = () => {
    let active = curr_date > start_date && curr_date < end_date;
    let upcoming = curr_date < start_date;
    let past = curr_date > start_date;
    let width = "w-25";

    if (curr_date > start_date && curr_date < end_date) {
      return (
        <span className={"badge bg-success rounded-pill " + width}>Active</span>
      );
    } else if (curr_date < start_date) {
      return (
        <span className={"badge bg-info rounded-pill " + width}>Upcoming</span>
      );
    } else {
      return (
        <span className={"badge bg-warning rounded-pill " + width}>Past</span>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="shadow card border-secondary m-3 text-center align-items-center w-75">
        <div className="MYINFO">
          <img
            className="card-img-top mb-3"
            src={challenge["img-upload"]}
            alt=""
          />
          {challengeState()}
          <div className="card-body">
            <h4 className="card-title mb-3">{challenge["Challenge Name"]}</h4>
            <Timer starting={start_date} ending={end_date}></Timer>

            <div className="BUTTONS-FLEX d-flex flex-column">
              <a href="#" className="btn btn-success mb-2">
                Participate Now
              </a>

              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Actions
                </button>
                <div
                  className="dropdown-menu dropdown-menu-dark   "
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item">Delete</a>

                  <Link className="dropdown-item" to="/edit">
                    Edit
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </React.Fragment>
  );
}

export default Card;
