import React from "react";
import './SubjectWisePreparation.css';
import d1 from'../../../Images/d1.png';
import d2 from'../../../Images/d2.png';
import d3 from'../../../Images/d3.png';
import d4 from'../../../Images/d4.png';

import { Link } from "react-router-dom";

const ClassWise = () => {
    

    return(
          <div className="container mt-2">
            <div className="box">
              <div className="row">
                <div className="col-lg-12 col-md-9 col-sm-12 col-xs-12 nopadding">
                  <div className="subject-headline subject-deptName">
                    <h2> Subject Wise Preparation </h2>
                  </div>
                  {/* start  */}
                  <div className="row deptName">
                    <div className="col-sm-3 ">
                      <Link to ="/Study-in-CSE" className="Study-CSE">
                         <h2>
                          <img src={d1} width="40"alt="CSE Dept"/>
                          <span className="dept-span">Study in CSE</span>
                         </h2>
                      </Link>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <Link to="/Study-in-CSE/Computer-Fundamentals" className="subject-item">   {/* route link with App.js */}
                            Computer Fundamentals
                          </Link>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Computer Hardware
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Operating Systems Concepts
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Disk Operating System (DOS)
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Artificial Intelligence
                          </a>
                        </li>
                        <li>
                          <Link to ="/Study-in-CSE"
                            className="btn btn-primary btn-xs mt-2 view">
                            View All{" "}   
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/*/.box-CSE*/}

                    <div className="col-sm-3 ">
                      <h2 className="heading-sm">
                        <img src={d2} width="40"alt="CSE Dept"/>
                        <span className="dept-span">Study in EEE</span>
                      </h2>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <a href="/" className="subject-item">
                            বাংলাদেশ বিষয়াবলি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            বাংলা ভাষা ও সাহিত্য
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            English Language and Literature
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            গাণিতিক যুক্তি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            সাধারণ বিজ্ঞান
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="btn btn-primary btn-xs mt-2 view">
                            View All{" "}   
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*/.box-EEE*/}

                    <div className="col-sm-3 ">
                      <h2 className="heading-sm">
                        <img src={d3} width="40"alt="CSE Dept"/>
                        <span className="dept-span">Study in IT</span>
                      </h2>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <a href="/" className="subject-item">
                            বাংলাদেশ বিষয়াবলি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            বাংলা ভাষা ও সাহিত্য
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            English Language and Literature
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            গাণিতিক যুক্তি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            সাধারণ বিজ্ঞান
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="btn btn-primary btn-xs mt-2 view">
                            View All{" "}   
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*/.box-IT*/}

                    <div className="col-sm-3 ">
                      <h2 className="heading-sm">
                        <img src={d4} width="40"alt="CSE Dept"/>
                        <span className="dept-span">Study in Civil</span>
                      </h2>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <a href="/" className="subject-item">
                            বাংলাদেশ বিষয়াবলি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            বাংলা ভাষা ও সাহিত্য
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            English Language and Literature
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            গাণিতিক যুক্তি
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            সাধারণ বিজ্ঞান
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="btn btn-primary btn-xs mt-2 view">
                            View All{" "}   
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*/.box-Civil*/}

                  </div>
                </div>
              </div>
            </div>
            {/*/.box-All*/}
          </div>
    );
};

export default ClassWise;