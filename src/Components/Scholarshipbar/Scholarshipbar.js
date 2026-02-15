import React from "react";
import './Scholarship.css';
import d9 from '../../Images/d9.png';
import d10 from '../../Images/d10.png';
import d11 from '../../Images/d11.png';
import d12 from '../../Images/d12.png';


import { useState } from "react";            // for show more option
import { Link } from "react-router-dom";

function Scholarship () {
      const [showMorePopular, setShowMorePopular] = useState(false);
      const [showMoreFullFunded, setShowMoreFullFunded] = useState(false);
      const [showMoreEuropean, setShowMoreEuropean] = useState(false);

        const togglePopular = () => setShowMorePopular(!showMorePopular);
        const toggleFullFunded = () => setShowMoreFullFunded(!showMoreFullFunded);
        const toggleFullEuropean = () => setShowMoreEuropean(!showMoreEuropean);

    return(
        <div className="container mt-2">
            <div className="box">
                <div className="col-bg-12 col-9-sm col-xs-12 nopadding">
                    <div className="Scholar-headline ">
                        <h2>Scholarships</h2>
                    </div>
                    {/* start scholarship row */}
                    <div className="row Scholar-deptName">
                        <div className="col-sm-3">
                            <img src={d9} width="40" alt="Full Fund"/>
                                 <Link className="amar-scholar" to="/Scholarship">
                                    <span className="dept-span">Popular Scholarships</span>
                                </Link>
                                
                            <ul className="list-unstyled categories subject-list">
                                <li>
                                    <Link to="/Popular-Scholarships/Erasmus-Mundus" className="subject-item">Erasmus Mundus Joint Master Degrees (EU)</Link>
                                </li>
                                    <li>
                                    <Link to="/" className="subject-item">DAAD Scholarships (Germany)</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">MEXT Scholarships (Japan)</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">Vanier Canada Graduate Scholarships</Link>
                                </li>
                                <li className="list-unstyled categories subject-list">
                                    <Link to="/" className="subject-item">Australia Awards Scholarships</Link>
                                </li>

                                {/* Extra items shown after click */}
                                <li>
                                    {showMorePopular && (
                                    <>
                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item">Chevening Scholarships (UK)</Link>
                                        </li>
                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item">Fulbright Scholarships (USA)</Link>
                                        </li>
                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item">Gates Cambridge Scholarships</Link>
                                        </li>
                                
                                    </>
                                    )}
                                    <li>
                                        <button className="view-btn list-unstyled categories btn btn-primary btn-xs mt-2 view" onClick={togglePopular}>
                                            {showMorePopular ? "View Less" : "View All"}
                                        </button>
                                    </li>
                                </li>
                            </ul>
                        </div>
                        {/*start Full Funded Scholarship*/}
                        <div className="col-sm-3">
                            <img src={d10} width="40" alt="Full Fund"/>
                            <span className="dept-span">Full Funded Scholarships</span>
                            <ul className="list-unstyled categories subject-list">
                                <li>
                                    <Link to="/Full-Funded-Scholarships/MAECI" className="subject-item">Italian Government MAECI Scholarship</Link>
                                </li>
                                    <li>
                                    <Link to="/" className="subject-item">Knight-Hennessy Scholars Program</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item"> Queen Elizabeth Commonwealth Scholarship</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">Azerbaijan Government Scholarship</Link>
                                </li>
                                <li className="list-unstyled categories subject-list">
                                    <Link to="/" className="subject-item">MOFA Taiwan Fellowship</Link>
                                </li>

                                {/* Extra items shown after click */}
                                <li>
                                    {showMoreFullFunded && (
                                    <>
                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item">Swedish Institute Scholarships for Global Professionals</Link>
                                        </li>

                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item">Gates Cambridge Scholarships</Link>
                                        </li>

                                        <li className="list-unstyled categories subject-list">
                                             <Link to="/" className="subject-item">Malaysian Government MTCP Scholarship</Link>
                                         </li>
                                 
                                        <li className="list-unstyled categories subject-list">
                                            <Link to="/" className="subject-item"> Kingdom of Saudi Arabia Fully Funded Scholarships</Link>
                                        </li>
                        
                                    </>
                                    )}
                                    <li>
                                        <button className="view-btn list-unstyled categories btn btn-primary btn-xs mt-2 view" onClick={toggleFullFunded}>
                                            {showMoreFullFunded ? "View Less" : "View All"}
                                        </button>
                                    </li>
                                </li>
                            </ul>
                        </div>
                        {/*start Europe Scholarship*/}
                        <div className="col-sm-3">
                            <img src={d11} width="40" alt="Full Fund"/>
                            <span className="dept-span">European Scholarship</span>
                            <ul className="list-unstyled categories subject-list">
                                <li>
                                    <Link to="/European-Scholarship/Scholarship-in-USA" className="subject-item">Scholarship in USA</Link>
                                </li>
                                    <li>
                                    <Link to="/" className="subject-item">Scholarship in Canada</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">Scholarship in UK</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">Scholarship in Sweden</Link>
                                </li>
                                    <li className="list-unstyled categories subject-list">
                                    <Link to="/" className="subject-item">Scholarship in Australia</Link>
                                </li>
                                {/* Extra items shown after click*/}
                                <li>
                                    {showMoreEuropean && (
                                        <>
                                            <li>
                                                <Link to="/" className="subject-item">Scholarship in New-Zealand</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="subject-item">Scholarship in Japan</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="subject-item">Scholarship in Saudi Arabia</Link>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <Link to="/" className="subject-item">Scholarship in Hungary</Link>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <Link to="/" className="subject-item">Scholarship in Germany</Link>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <Link to="/" className="subject-item">Scholarship in France</Link>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <Link to="/" className="subject-item">Scholarship in Switzerland</Link>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <Link to="/" className="subject-item">Scholarship in Poland</Link>
                                            </li>
                                        </>
                                    )}
                                
                                    <li>
                                        <button className="view-btn list-unstyled categories btn btn-primary btn-xs mt-2 view" onClick={toggleFullEuropean}>
                                            {showMoreEuropean ? "View Less" : "View All"}
                                        </button>
                                    </li>
                                </li>
                            </ul>
                        </div>
                        {/*start Others Scholarship*/}
                        <div className="col-sm-3">
                            <img src={d12} width="40" alt="Full Fund"/>
                            <span className="dept-span">Others Scholarships</span>
                            <ul className="list-unstyled categories subject-list">
                                <li>
                                    <Link to="/Others-Scholarships/Asian-Continent" className="subject-item">Asian Continent</Link>
                                </li>
                                    <li>
                                    <Link to="/" className="subject-item">European Continent</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">North & South American Continent</Link>
                                </li>
                                <li>
                                    <Link to="/" className="subject-item">Africa Continent</Link>
                                </li>
                                    <li className="list-unstyled categories subject-list">
                                    <Link to="/" className="subject-item">Oceania Continent</Link>
                                </li>
                                <li>
                                    <Link to="#" className=" list-unstyled categories btn btn-primary btn-xs mt-2 view">View All</Link>
                                </li>
                            </ul>
                        </div>
                        {/*start Others Scholarship*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarship;