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
                                    <a href="/" className="subject-item">DAAD Scholarships (Germany)</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">MEXT Scholarships (Japan)</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">Vanier Canada Graduate Scholarships</a>
                                </li>
                                <li className="list-unstyled categories subject-list">
                                    <a href="/" className="subject-item">Australia Awards Scholarships</a>
                                </li>

                                {/* Extra items shown after click */}
                                <li>
                                    {showMorePopular && (
                                    <>
                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item">Chevening Scholarships (UK)</a>
                                        </li>
                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item">Fulbright Scholarships (USA)</a>
                                        </li>
                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item">Gates Cambridge Scholarships</a>
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
                                    <a href="/" className="subject-item">Knight-Hennessy Scholars Program</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item"> Queen Elizabeth Commonwealth Scholarship</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">Azerbaijan Government Scholarship</a>
                                </li>
                                <li className="list-unstyled categories subject-list">
                                    <a href="/" className="subject-item">MOFA Taiwan Fellowship</a>
                                </li>

                                {/* Extra items shown after click */}
                                <li>
                                    {showMoreFullFunded && (
                                    <>
                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item">Swedish Institute Scholarships for Global Professionals</a>
                                        </li>

                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item">Gates Cambridge Scholarships</a>
                                        </li>

                                        <li className="list-unstyled categories subject-list">
                                             <a href="/" className="subject-item">Malaysian Government MTCP Scholarship</a>
                                         </li>
                                 
                                        <li className="list-unstyled categories subject-list">
                                            <a href="/" className="subject-item"> Kingdom of Saudi Arabia Fully Funded Scholarships</a>
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
                                    <a href="/" className="subject-item">Scholarship in Canada</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">Scholarship in UK</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">Scholarship in Sweden</a>
                                </li>
                                    <li className="list-unstyled categories subject-list">
                                    <a href="/" className="subject-item">Scholarship in Australia</a>
                                </li>
                                {/* Extra items shown after click*/}
                                <li>
                                    {showMoreEuropean && (
                                        <>
                                            <li>
                                                <a href="/" className="subject-item">Scholarship in New-Zealand</a>
                                            </li>
                                            <li>
                                                <a href="/" className="subject-item">Scholarship in Japan</a>
                                            </li>
                                            <li>
                                                <a href="/" className="subject-item">Scholarship in Saudi Arabia</a>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <a href="/" className="subject-item">Scholarship in Hungary</a>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <a href="/" className="subject-item">Scholarship in Germany</a>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <a href="/" className="subject-item">Scholarship in France</a>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <a href="/" className="subject-item">Scholarship in Switzerland</a>
                                            </li>
                                            <li className="list-unstyled categories subject-list">
                                                <a href="/" className="subject-item">Scholarship in Poland</a>
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
                                    <a href="/" className="subject-item">European Continent</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">North & South American Continent</a>
                                </li>
                                <li>
                                    <a href="/" className="subject-item">Africa Continent</a>
                                </li>
                                    <li className="list-unstyled categories subject-list">
                                    <a href="/" className="subject-item">Oceania Continent</a>
                                </li>
                                <li>
                                    <a href="#" className=" list-unstyled categories btn btn-primary btn-xs mt-2 view">View All</a>
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