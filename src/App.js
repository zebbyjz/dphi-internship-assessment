import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "./Pages/Admin";
import EditPage from "./Pages/EditPage";
import HackathonsPage from "./Pages/HackathonsPage";
import ViewPage from "./Pages/ViewPage";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

//import Challenges from "./dummydata";

function App() {
  const [state, setState] = useState({
    Challenges: [
      {
        uuid: "edd39161-5a80-47b1-97ac-01df63b63551",
        "Challenge Name": "Data Sprint 72 - Butterfly Identification",
        "Start date": "2023-06-17",
        "End date": "2023-07-17",
        description:
          'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. Moths also belong to this group. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
        "img-upload":
          "blob:http://localhost:3000/8a384ae1-8ae9-45e4-b76e-402d4adbb739",
        difficulty: "Easy",
      },
    ],
  });

  const handleSubmitChallenge = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let local_challenges = [...state.Challenges];
    //let base64String = "";
    let blobURL = "";
    let obj = {};

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
        blobURL = URL.createObjectURL(field[1]);
        obj[field[0]] = blobURL;
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
    alert("Chanages Submitted Successfully");
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
          <Route path="/view" element={<ViewPage></ViewPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
