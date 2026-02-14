
import './Footer.css';

const Footer = () => {
    return(
        <div className="container-fluid py-4 footerbg">
            <div className="container">
                <div className="row">
                    <div className="col-4 pe-4">
                        <h4 className="fw-bold">Amar Coding Practice</h4>
                        <br/>
                        <p className="fw-normal fs-5">"জানুন, প্রস্তুত হোন, এগিয়ে চলুন!" এই সাইটটি শুধু একটি তথ্যভাণ্ডার নয়, এটি নতুন প্রজন্মের জন্য একটি নির্ভরযোগ্য সহযাত্রী।</p>
                        </div>
                    <div className="col-4 pe-4">
                        <h4 className="fw-bold">Useful Links</h4><br/>
                        <a href="http://localhost:3000/#" className="linkitem">
                        Scholarship 
                        </a><br/>
                        <a href="http://localhost:3000/#" className="linkitem">
                        Blogs 
                        </a> <br/>
                        <a href="http://localhost:3000/#" className="linkitem">
                        Sign Up 
                        </a>
                    </div>
                    <div className="col-4 pe-4">
                        <h4 className="fw-bold">Contact Us</h4><br/>
                        <p className="fw-normal fs-5">House No# , Road# , Block# , <br/>
                        Uttara, Dhaka <br/>
                        Bangladesh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;