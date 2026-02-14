import './IndustryJob.css';
import d5 from '../../../Images/d5.png';
import d6 from '../../../Images/d6.png';
import d7 from '../../../Images/d7.png';
import d8 from '../../../Images/d8.png';

import { Link } from "react-router-dom";

import { useState } from "react";

function IndustryJob () {

    const[showMoreITTel, setShowMoreITTel] = useState(false);
    const[showMoreMechanicEng, setShowMoreMechanicEng] = useState(false);

        const toggleITTel = () => setShowMoreITTel(!showMoreITTel);
        const toggleMechanicEng = () => setShowMoreMechanicEng(!showMoreMechanicEng);

    return(
        <div className="container mt-2">
            <div className="box">
                <div className="row">
                    <div className="col-lg-12 col-sm-9 col-xs-12 nopadding">
                        <div className="industry-headline industry-deptName">
                            <h2>Industry Job Preparation</h2>
                        </div>
                        {/* start Industry Job*/}
                        <div className="row deptName">
                            <div className="col-sm-3">
                                <h2>
                                    <img src={d5} width="40" alt="Most Popular"/>
                                    <span className="dept-span">IT & Telecommunication</span>
                                </h2>
                                <ul className="list-unstyled categories subject-list">
                                    <li>
                                        <Link to="/IT&Telecommunication/Artificial-Intelligence" className="subject-item"> Artificial Intelligence</Link>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Database Systems</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Management Information Systems</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Computer Hardware</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Operating Systems Concepts</a>
                                    </li>

                                     {/* Extra items shown after click */}

                                    {showMoreITTel && (
                                    <>
                                        <li>
                                            <a href="/" className="subject-item">Professional Networking</a>
                                        </li>
                                        <li>
                                            <a href="/" className="subject-item">Windows server 2016</a>
                                        </li>
                                    </>
                                    )}
                                        <li>
                                        <button className="btn btn-primary btn-xs mt-2 view" onClick={toggleITTel}>
                                            {showMoreITTel ? "View Less" : "View All"}
                                        </button>
                                        </li>

                                </ul>
                            </div>
                            {/* start Engineering job */}

                            <div className="col-sm-3">
                                <h2>
                                    <img src={d6} width="40" alt="Most Popular"/>
                                    <span className="dept-span">EEE Engineering</span>
                                </h2>
                                <ul className="list-unstyled categories subject-list">
                                    <li>
                                        <Link to="/EEE-Engineering/Series-Circuits" className="subject-item">Series Circuits</Link>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Energy and Power</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Parallel Circuits</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Series-Parallel Circuits</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Voltage,Current and Resistance</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-primary btn-xs mt-2 view"> View All {''}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*start Country Wise */}
                            <div className="col-sm-3">
                                <h2>
                                    <img src={d7} width="40" alt="Most Popular"/>
                                    <span className="dept-span">Civil Engineering</span>
                                </h2>
                                <ul className="list-unstyled categories subject-list">
                                    <li>
                                        <a href="/" className="subject-item">Building Materials</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Building Construction</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Concrete Technology</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Applied Mechanics</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Strength of Materials</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-primary btn-xs mt-2 view"> View All {''}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Start Others Scholarship */}
                            <div className="col-sm-3">
                                <h2>
                                    <img src={d8} width="40" alt="Most Popular"/>
                                    <span className="dept-span">Mechanical Engineering</span>
                                </h2>
                                <ul className="list-unstyled categories subject-list">
                                    <li>
                                        <Link to="/Mechanical-Engineering/Engineering-Mechanics" className="subject-item">Engineering Mechanics</Link>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Strength of Materials</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Hydraulics and Fluid Mechanics</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Hydraulic Machines</a>
                                    </li>
                                    <li>
                                        <a href="/" className="subject-item">Thermodynamics</a> 
                                    </li>

                                    {/* Extra items shown after click */}

                                    {showMoreMechanicEng && (
                                        <>
                                            <li>
                                                <a href="/" className="subject-item">Steam Boilers and Engines</a>
                                            </li>
                                            <li>
                                                <a href="/" className="subject-item">Engineering Materials</a>
                                            </li>
                                            <li>
                                                <a href="/" className="subject-item">Automobile Engineering</a>
                                            </li>
                                        </>
                                    )}

                                    <li>
                                        <button className="btn btn-primary btn-xs mt-2 view" onClick={toggleMechanicEng}>{showMoreMechanicEng? "View Less":"View All"}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/*End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryJob;