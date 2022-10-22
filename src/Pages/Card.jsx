import React from "react";
import Timer from "../Components/Timer";

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
      <div className="shadow card text-center m-3 align-items-center w-75">
        <img
          className="card-img-top mb-3"
          src={challenge["img-upload"]}
          alt=""
        />
        {challengeState()}

        <div className="card-body">
          <h4 className="card-title mb-3">{challenge["Challenge Name"]}</h4>

          <Timer starting={start_date} ending={end_date}></Timer>

          <a href="#" className="btn btn-success">
            Participate Now
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
