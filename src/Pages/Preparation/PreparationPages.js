
import { Helmet } from "react-helmet";

import Searchbar from "../../Components/Searchbar/Searchbar";
import IndustryJob from "../../Components/Preparation Com/IndustryJobBar/IndustryJob";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import ClassWise from "../../Components/Preparation Com/Subject Wise Preparation/SubjectWisePreparation";


const PreparationPage = () => {
    return (
        <div>
            <Helmet>
                <title>Preparation-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <IndustryJob/>
            <ClassWise/>
            <About/>
            <Footer/>
        </div>
    );
};

export default PreparationPage;