import React from "react";
import ice from "./icebucket";

function Card(props) {
  const challenge = props.challenge;
  return (
    <React.Fragment>
      <div className="card m-3">
        <img
          class="card-img-top"
          src={challenge["img-upload"]}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{challenge["Challenge Name"]}</h5>
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
