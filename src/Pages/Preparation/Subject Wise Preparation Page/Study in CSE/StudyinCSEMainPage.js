import React from "react";
import Searchbar from "../../../../Components/Searchbar/Searchbar";
import StudyinCSE from "../../../../Components/Preparation Com/Subject Wise Preparation/Study in CSE/StudyinCSE";
import Footer from "../../../../Components/Footer/Footer";

const StudyinCSEMainPage = () => {
    return(
        <div>
            <Searchbar/>
            <StudyinCSE/>
            <Footer/>
        </div>
    );
};

export default StudyinCSEMainPage;