import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "./Pages/Admin";
import EditPage from "./Pages/EditPage";
import HackathonsPage from "./Pages/HackathonsPage";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [state, setState] = useState({
    Challenges: [
      {
        uuid: uuidv4(),
        "Challenge Name": "admin",
        "Start date": "2022-10-06",
        "End date": "2022-11-05",
        description: "This is a sample description",
        difficulty: "Easy",
        "img-upload": "data:application/octet-stream;base64,",
      },
    ],
  });

  const handleSubmitChallenge = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let local_challenges = [...state.Challenges];
    //let base64String = "";
    let blobURL="";
    let obj = {};
    console.log(formData);
    //Note: field[0] is name of input field, eg "challenge name", "Description"
    //field[1] is the actual data within the field
    obj["uuid"] = uuidv4();
    for (const field of formData) {
      if (field[0] === "img-upload" && field[1]) {

        //COMMENTING PREVIOUS BASE64 SOLUTION.
        /*
        const reader = new FileReader();
        reader.onloadend = () => {
          base64String = reader.result; //.replace("data:", "").replace(/^.+,/, "");

          obj[field[0]] = base64String;
        };
        reader.readAsDataURL(field[1]);
        */
        blobURL=URL.createObjectURL(field[1]);
        obj[field[0]]=blobURL;


      } else {
        obj[field[0]] = field[1];
      }
    }
    local_challenges.push(obj);

    setState({ Challenges: local_challenges });
    alert("Form Submitted Successfully");
  };

  const handleEditChallenge = (event, details, originalDetails) => {
    event.preventDefault();
    let local_challenges = [...state.Challenges];

    let local_index = local_challenges.indexOf(originalDetails);
    local_challenges[local_index] = details;
    setState({ Challenges: local_challenges });
  };





  const handleDelete = (originalDetails) => {
    let local_challenges = [...state.Challenges];

    local_challenges = local_challenges.filter((obj) => {
      return obj !== originalDetails;
    });
    setState({ Challenges: local_challenges });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/challenges"
            element={
              <HackathonsPage
                challenges={state.Challenges}
                onDeleteChallenge={handleDelete}
              />
            }
          />
          <Route
            path="/"
            element={<Admin onSubmitChallenge={handleSubmitChallenge} />}
          />
          <Route
            path="/edit"
            element={<EditPage onEditChallenge={handleEditChallenge} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
