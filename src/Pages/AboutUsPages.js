import React from "react";
import { Helmet } from "react-helmet";

import Searchbar from "../Components/Searchbar/Searchbar";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/Contact Us/ContactUs";

const AboutUsPage = () => {
    return (
        <div>
            <Helmet>
                <title>About-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <About/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default AboutUsPage;