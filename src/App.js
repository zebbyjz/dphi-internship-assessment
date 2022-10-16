
import React, { Component } from 'react';

import Admin from './Pages/Admin';
import NavBar from './Components/NavBar';
import './App.css';


class App extends Component {
  state = { Challenges: []} 
  

  handleSubmitChallenge=(event)=>{
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let local_challenges=[...this.state.Challenges]
    let base64String = "";
    let obj={};
    
    for (const field of formData) {
      if (field[0] === "img-upload" && field[1]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64String = reader.result //.replace("data:", "").replace(/^.+,/, "");
          
          
          obj[field[0]] = base64String;
          
        };
        reader.readAsDataURL(field[1]);
      } else {
        
        obj[field[0]] = field[1];
        
      }
    }
    local_challenges.push(obj);

    this.setState({Challenges:local_challenges});
    alert("Form Submitted Successfully")
    
    
    
  };

  render() { 


    return (<React.Fragment>
      <NavBar></NavBar>
      <Admin onSubmitChallenge={this.handleSubmitChallenge}></Admin>
      
    </React.Fragment>);
  }
}
 
export default App;

