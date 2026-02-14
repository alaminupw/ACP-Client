import React from 'react';
import './Searchbar.css';
import logo1 from '../../Images/logo1.png';


function Searchbar () {


    return (
        <div className="container-fluid search-container pt-2 pb-2 d-flex justify-content-center align-items-center">
            <a href="/">
                <img src={logo1} className="mainlogo img-fluid" width="200"alt="logo"/>
            </a>
            <input type="text" className="Search-bar" placeholder="Search in your Document"/>
            <a href="/">
            <button type="button">Search</button>
            </a>

        </div> 
    );
};

export default Searchbar;
