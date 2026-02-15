import React from 'react';
import './Searchbar.css';
import logo1 from '../../Images/logo1.png';
import { Link } from "react-router-dom";

function Searchbar () {


    return (
        <div className="container-fluid search-container pt-2 pb-2 d-flex justify-content-center align-items-center">
            <Link to="/">
                <img src={logo1} className="mainlogo img-fluid" width="200"alt="logo"/>
            </Link>
            <input type="text" className="Search-bar" placeholder="Search in your Document"/>
            <Link to="/">
            <button type="button">Search</button>
            </Link>

        </div> 
    );
};

export default Searchbar;
