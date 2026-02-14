import React from "react";

import { Helmet } from "react-helmet";

import Navbar from "../../../Components/Navbar/Navbar";
import Searchbar from "../../../Components/Searchbar/Searchbar";
import ScholarAsianCon from "../../../Components/Scholarshipbar/Others Scholarships Com/Scholarship Asian Continent/ScholarAsianCon";
import Footer from "../../../Components/Footer/Footer";


const ScholarshipAsianConPage = () => {
    return(
        <div>
            <Helmet>
                <title>Others Scholarship-Asian Continent</title>
            </Helmet>
            <Navbar/>
            <Searchbar/>
            <ScholarAsianCon/>
            <Footer/>
        </div>
    );
};

export default ScholarshipAsianConPage;