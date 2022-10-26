import React from 'react';
import {useLocation} from "react-router-dom";
import NavBar from '../Components/NavBar';
import './ViewPage.css'

function ViewPage(props) {

    const location=useLocation();
    let details=location.state;
    return ( <React.Fragment>
        <NavBar></NavBar>
        <div className='blue-gradient'>
            Hello world
        </div>
        {console.log(details)}
    </React.Fragment> );
}

export default ViewPage;