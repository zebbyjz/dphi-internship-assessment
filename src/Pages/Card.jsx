import React from "react";
import ice from "./icebucket";
import moment from "moment"

function Card(props) {
  const challenge = props.challenge;
  

  return (
    <React.Fragment>
      <div className="card text-center m-3">
        <img
          class="card-img-top"
          src={challenge["img-upload"]}
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title mb-3">{challenge["Challenge Name"]}</h4>
          <p class="card-text">{challenge["description"]}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
