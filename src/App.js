
import React, { Component } from 'react';

import Admin from './Pages/Admin';
import './App.css';

class App extends Component {
  state = { Challenges:{} } 

  handleSubmitChallenge=(event)=>{
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let packed_array = [];
    let base64String = "";

    for (const field of formData) {
      if (field[0] === "img-upload" && field[1]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
          let obj = {};
          obj[field[0]] = base64String;
          packed_array.push(obj);
        };
        reader.readAsDataURL(field[1]);
      } else {
        let obj = {};
        obj[field[0]] = field[1];
        packed_array.push(obj);
      }
    }

    console.log(packed_array);
  };

  render() { 


    return (<React.Fragment>
      <Admin onSubmitChallenge={this.handleSubmitChallenge}></Admin>
    </React.Fragment>);
  }
}
 
export default App;

