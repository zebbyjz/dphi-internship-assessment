import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./ViewPage.css";

function ViewPage(props) {
  const location = useLocation();
  let details = location.state;
  let { "Challenge Name": challengeName, description, difficulty } = details;

  const getDateStatus = () => {
    let result;
    //debugger;

    if (details["Start date"] && details["End date"]) {
      const currentDate = new Date();
      const startDate = new Date(details["Start date"]);
      const endDate = new Date(details["End date"]);

      if (currentDate < startDate) {
        result = "Starts on " + startDate.toDateString();
      } else if (currentDate > startDate && currentDate < endDate) {
        result = "Ends on " + endDate.toDateString();
      } else {
        result = "Ended on " + endDate.toDateString();
      }

      
      return result;
    }
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="blue-gradient">
        <div className="container">

          <span className="badge bg-warning mt-5 mb-3">
            <h3 className="lead px-3 pt-1 text-black fw-bold">
              {getDateStatus()}
            </h3>
          </span>

          <h1 className="text-white fw-light">{challengeName}</h1>

          <span className="badge bg-light mt-3 mb-3">
            <h3 className="lead px-3 pt-1 text-black fw-normal">
              {difficulty}
            </h3>
          </span>

        </div>
      </div>
      
      <ul className="nav nav-tabs mt-0 shadow-lg">
            <li className="ms-5 fw-bolder py-2 nav-item shadow">    <a class=" nav-link active text-decoration-underline shadow" aria-current="page" >Overview</a></li>

            <div className="ms-auto me-5 d-flex flex-row gap-2 ">
                <li className="fw-bolder py-2 nav-item"><button className="btn btn-success">Edit</button></li>
                <li className="fw-bolder py-2 nav-item"><button className="btn btn-outline-danger">Delete</button></li>
            </div>
            
          </ul>

          <div className="container mt-5">
            <h5 className="text-black-50">{description}</h5>
          </div>

    </React.Fragment>
  );
}

export default ViewPage;
