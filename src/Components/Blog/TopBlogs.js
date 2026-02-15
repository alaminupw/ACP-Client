import React, { useEffect } from "react";
import './TopBlogs.css';
import b1 from '../../Images/b1.png';
import b2 from '../../Images/b2.png';
import b3 from '../../Images/b3.png';
import b4 from '../../Images/b4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";



const TopBlogs = () => {
    {/* use AOS */}
    useEffect(() => {
        AOS.init()
    },[]);

    return (
        <div className="container pt-5 pb-5" data-aos="zoom-in">
            <div className="d-flex justify-content-center themeColor headline-2">
                <p className="fw-bold">ব্লগ</p>
            </div>
            <div className="d-flex justify-content-center section-title">
                <h3 className="fw-bold">টপ ব্লগস গুলি</h3>
            </div>
            <div className="row mt-5">
                <div className="col-3 blogImage">
                    <Link to="">
                        <img src={b1} alt=""></img>
                    </Link>
                    <p className="text-center pt-3 fs-5 fw-bold">মাস্টার অন পাইথন প্রোগ্রামিং</p>
                </div>
                <div className="col-3 blogImage">
                    <Link to="/">
                        <img src={b2} alt=""></img>
                    </Link>
                    <p className="text-center pt-3 fs-5 fw-bold">DJANGO ওয়েব ডেভেলপমেন্ট</p>
                </div>
                <div className="col-3 blogImage">
                    <Link to="/">
                        <img src={b3} alt=""></img>
                    </Link>
                    <p className="text-center pt-3 fs-5 fw-bold">NEXT.js & PRISMA ফুলস্ট্যাক</p>
                </div>
                <div className="col-3 blogImage">
                    <Link to="/">
                        <img src={b4} alt=""></img>
                    </Link>
                    <p className="text-center pt-3 fs-5 fw-bold">ফাউন্ডেশন অফ ওয়েব ডেভেলপমেন্ট</p>
                </div>
            </div>
        </div>
    );
};

export default TopBlogs;