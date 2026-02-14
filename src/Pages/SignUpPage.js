import React from "react";

import { Helmet } from "react-helmet";
import Searchbar from "../Components/Searchbar/Searchbar";
import LoginSignup from "../Components/Log in Sign Up/LoginSignup";
import Footer from "../Components/Footer/Footer";


const SignUpPage = () => {
    return(
        <div>
            <Helmet>
                <title>Sign Up-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <LoginSignup/>
            <Footer/>
        </div>
    );
};

export default SignUpPage;