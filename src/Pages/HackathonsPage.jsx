import React from "react";
import NavBar from "../Components/NavBar";
import Card from "./Card";
import ice from "./icebucket";

function HackathonsPage(props) {
  //const challenges=props.challenges;
  const challenges = ice;
  const num = 4;

  return (
    <React.Fragment>
      <NavBar></NavBar>

      <div className="container">
        <div className="row">
          {challenges.map((field) => {
            return (
              <div className={"col-" + num}>
                <Card challenge={field}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default HackathonsPage;
