import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePages.js';
import Navbar from './Components/Navbar/Navbar';
import ScholarshipsPage from './Pages/Scholarships Pages/ScholarshipsPages.js';
import PreparationPage from './Pages/Preparation/PreparationPages.js';
import BlogPage from './Pages/Blogs Page/BlogPages.js';
import AboutUsPage from './Pages/AboutUsPages.js';
import ArtificialIntelligencePage from './Pages/Preparation/Industry Job Preparation Pages/IT & Telecommunication Pages/Artificial Intelligence Pages/ArtificialIntelligencePages.js'
import ScholarshipUSAPage from './Pages/Scholarships Pages/European Scholarships Pages/Scholarship in USA Pages/ScholarshipUSAPages.js';
import ErasmusMundusJointPage from './Pages/Scholarships Pages/Popular Scholarships Pages/ErasmusMundusPage.js';
import ScholarshipAsianConPage from './Pages/Scholarships Pages/Others Scholarships Pages/ScholarshipAsianConPage.js';
import ItalianGovtMAECISPage from './Pages/Scholarships Pages/Full Funded Scholarships Pages/ItalianGovtMAECISPage.js';
import SeriesCircuitsPage from './Pages/Preparation/Industry Job Preparation Pages/EEE Engineering Pages/Series Circuits Pages/SeriesCircuitsPage.js';
import SignUpPage from './Pages/SignUpPage.js';
import EngMechanicsPages from './Pages/Preparation/Industry Job Preparation Pages/MechanicalEngineeringPages/EngineeringMechanicsPages/EngMechanicsPages.js';
import StudyinCSEMainPage from './Pages/Preparation/Subject Wise Preparation Page/Study in CSE/StudyinCSEMainPage.js';
import ComputerFundamentalsPages from './Pages/Preparation/Subject Wise Preparation Page/Study in CSE/Computer Fundamentals Pages/ComputerFundamentalsPages.js';




function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>   
            <Route path='/Scholarship' element={<ScholarshipsPage/>}></Route>
            <Route path='/Preparation' element={<PreparationPage/>}></Route>
            <Route path='/Blog' element={<BlogPage/>}></Route>
            <Route path='/About' element={<AboutUsPage/>}></Route>
            <Route path='/IT&Telecommunication/Artificial-Intelligence' element={<ArtificialIntelligencePage/>}></Route>
            <Route path='/European-Scholarship/Scholarship-in-USA' element={<ScholarshipUSAPage/>}></Route>
            <Route path='/Popular-Scholarships/Erasmus-Mundus' element={<ErasmusMundusJointPage/>}></Route>
            <Route path='/Others-Scholarships/Asian-Continent' element={<ScholarshipAsianConPage/>}></Route>
            <Route path='/Full-Funded-Scholarships/MAECI' element={<ItalianGovtMAECISPage/>}></Route>
            <Route path='/EEE-Engineering/Series-Circuits' element={<SeriesCircuitsPage/>}></Route>
            <Route path='/Mechanical-Engineering/Engineering-Mechanics' element={<EngMechanicsPages/>}></Route>
            <Route path='/Sign-Up' element={<SignUpPage/>}></Route>
            <Route path='/Study-in-CSE' element={<StudyinCSEMainPage/>}></Route>
            <Route path='/Study-in-CSE/Computer-Fundamentals' element={<ComputerFundamentalsPages/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
