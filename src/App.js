
import React, { Component } from 'react';

import Admin from './Pages/Admin';
import './App.css';

class App extends Component {
  state = { Challenges:{} } 

  onSubmitChallenge=()=>{
    
  };

  render() { 


    return (<React.Fragment>
      <Admin handleSubmitChallenge={this.onSubmitChallenge}></Admin>
    </React.Fragment>);
  }
}
 
export default App;

