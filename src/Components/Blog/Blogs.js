import React from "react";
import './Blogs.css';
import d1 from'../../Images/d1.png';
import d2 from'../../Images/d2.png';
import d3 from'../../Images/d3.png';
import d4 from'../../Images/d4.png';

import { Link } from "react-router-dom";

const Blogs = () => {

    return(
          <div className="container mt-2">
            <div className="box">
              <div className="row">
                <div className="col-lg-12 col-md-9 col-sm-12 col-xs-12 nopadding">
                  <div className="sub-blog-headline sub-blog-deptName">
                    <h2> Blogs </h2>
                  </div>
                  {/* start  */}
                  <div className="row deptName">
                    <div className="col-sm-3 ">
                      <h2>
                        <img src={d1} width="40"alt="CSE Dept"/>
                        <span className="dept-span">Technical Blog</span>
                      </h2>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <Link to="/Study-in-CSE/বাংলাদেশ-বিষয়াবলি" className="subject-item">   {/* route link with App.js */}
                            AI and Machine Learning Blog
                          </Link>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Data Science Blogs
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Hardware & System Blogs
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Tools & Technology Blogs
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Others  Blogs 
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
                    {/*/.box-CSE*/}

                    <div className="col-sm-3 ">
                      <h2 className="heading-sm">
                        <img src={d2} width="40"alt="CSE Dept"/>
                        <span className="dept-span">Programming & Web Development Blog</span>
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
                        <span className="dept-span">IT & Networking Blog</span>
                      </h2>
                      <ul className="list-unstyled categories subject-list">
                        <li>
                          <a href="/" className="subject-item">
                            Basic Network, architecture & protocols
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Routing and switching
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Server and data center management
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Network Security
                          </a>
                        </li>
                        <li>
                          <a href="/" className="subject-item">
                            Other Blogs
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
                        <span className="dept-span"> Educational & Career-Oriented Blogs </span>
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

export default Blogs;