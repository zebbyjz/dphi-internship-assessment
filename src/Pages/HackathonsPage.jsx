import React, { Component } from 'react'
import NavBar from '../Components/NavBar';


class HackathonsPage extends Component {
    state = {  } 
    render() { 

        let local_challenges=this.props.challenges;
        
        return (
            <React.Fragment>
                <NavBar></NavBar>
            
                {console.log(local_challenges)}
                
            </React.Fragment>
        );
    }
}
 
export default HackathonsPage;