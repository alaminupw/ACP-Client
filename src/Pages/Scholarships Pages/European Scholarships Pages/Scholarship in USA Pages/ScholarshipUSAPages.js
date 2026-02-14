
import { Helmet } from "react-helmet";
import Searchbar from "../../../../Components/Searchbar/Searchbar";
import ScholarshipUSA from "../../../../Components/Scholarshipbar/European Scholarship/Scholarship in USA/Scholarship in USA";
import Footer from "../../../../Components/Footer/Footer";

const ScholarshipUSAPage = () => {
    return(
        <div>
            <Helmet>
                <title>European Scholarship- USA</title>
            </Helmet>
            <Searchbar/>
            <ScholarshipUSA/>
            <Footer/>
        </div>
    );
};

export default ScholarshipUSAPage;