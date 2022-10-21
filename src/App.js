import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Admin from "./Pages/Admin";
import HackathonsPage from "./Pages/HackathonsPage";
import "./App.css";

function App() {
  const [state, setState] = useState({ Challenges: [] });

  const handleSubmitChallenge = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let local_challenges = [...state.Challenges];
    let base64String = "";
    let obj = {};

    for (const field of formData) {
      if (field[0] === "img-upload" && field[1]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64String = reader.result; //.replace("data:", "").replace(/^.+,/, "");

          obj[field[0]] = base64String;
        };
        reader.readAsDataURL(field[1]);
      } else {
        obj[field[0]] = field[1];
      }
    }
    local_challenges.push(obj);

    setState({ Challenges: local_challenges });
    alert("Form Submitted Successfully");
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/challenges"
            element={<HackathonsPage challenges={state.Challenges} />}
          />
          <Route
            path="/"
            element={<Admin onSubmitChallenge={handleSubmitChallenge} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
