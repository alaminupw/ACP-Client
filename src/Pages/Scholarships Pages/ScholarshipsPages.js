import React from "react";

import { Helmet } from "react-helmet";

import Searchbar from '../../Components/Searchbar/Searchbar';
import Scholarshipbar from '../../Components/Scholarshipbar/Scholarshipbar';
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";



const ScholarshipsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Scholarships-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <Scholarshipbar/>
            <About/>
            <Footer/>
        </div>
    );
};

export default ScholarshipsPage;