 
import React from "react";
import { Helmet } from 'react-helmet';
import '../App.css';
import Searchbar from '../Components/Searchbar/Searchbar';
import Topbar from '../Components/Topbar/Topbar';
import Scholarshipbar from '../Components/Scholarshipbar/Scholarshipbar';
import IndustryJobbar from '../Components/Preparation Com/IndustryJobBar/IndustryJob';
import ClasWiseStudy from '../Components/Preparation Com/Subject Wise Preparation/SubjectWisePreparation';
import Blogs from "../Components/Blog/Blogs";
import About from '../Components/About/About';
import Footer from "../Components/Footer/Footer";
import LoginSignup from "../Components/Log in Sign Up/LoginSignup";
import TopBlogs from "../Components/Blog/TopBlogs";



{/*React অ্যাপে প্রতিটি পেজ অনুযায়ী <title> (যা ব্রাউজারের ট্যাবে দেখায়) পরিবর্তন করতে হলে react-helmet ব্যাবহার করতে হয়।   */}
  
    
   const HomePage = () => {
    return(
        <div>
            <Helmet>
                <title>Home-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <Topbar/>
            <Scholarshipbar/>
            <IndustryJobbar/>
            <ClasWiseStudy/>
            <Blogs/>
            <TopBlogs/>
            <About/>
            <LoginSignup/>
            <Footer/>
        </div>
    );
};

export default HomePage; 
    





