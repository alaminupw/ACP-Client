import React from "react";
import './Topbar.css';
import p1 from'../../Images/p1.png';
import p2 from'../../Images/p2.png';
import p3 from'../../Images/p3.png';

import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="container-fluid">
            <div>
                <section className="top mt-2 mb-4">
                    <div className="top-content text-white text-center">
                        <h1>বাংলা অনলাইন প্রস্তুতি প্ল্যাটফর্মে আপনাকে স্বাগতম</h1>
                        <h3>শেখা হবে সহজ, প্রস্তুতি হবে শক্তিশালী!</h3>
                        <br/>
                        <p>
                        আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থী—যে কোনো স্থান থেকে, যে কোনো সময়—উন্নত প্রস্তুতির অধিকার রাখে।<br />
                        আমাদের লক্ষ্য হলো বিশ্বস্ত ও মানসম্মত কনটেন্টের মাধ্যমে আপনাকে পরীক্ষার জন্য প্রস্তুত করা <br/> 
                        এবং আত্মবিশ্বাসের সঙ্গে এগিয়ে যেতে সাহায্য করা।
                        </p>
                        <div className="row topbar1">
                            <div className="col">
                                <Link to="#">
                                    <img src={p1} className="mx-auto d-block" style={{ width: "60px" }} alt="site icon"/>
                                </Link>
                                <button type="button" className="btn btn-outline-primary"><h5>Class Wise Study</h5></button>
                                    
                                
                            </div>
                            <div className="col">
                                <Link to="/">
                                <img src={p2} className="mx-auto d-block" style={{ width: "60px" }} alt="site icon"/>
                                <button type="button" className="btn btn-outline-primary"><h5>Industry Job Preparation</h5></button>
                                </Link>

                            </div>
                            <div className="col">
                                <Link to="/">
                                <img src={p3} className="mx-auto d-block" style={{ width: "60px" }} alt="site icon"/>
                                <button type="button" className="btn btn-outline-primary"><h5>Scholarships</h5></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Topbar;
