import React from "react";

import { Helmet } from "react-helmet";

import Searchbar from "../../Components/Searchbar/Searchbar";
import TopBlogs from "../../Components/Blog/TopBlogs";
import Footer from "../../Components/Footer/Footer";
import Blogs from "../../Components/Blog/Blogs";

const BlogPage = () => {
    return (
        <div>
            <Helmet>
                <title>Blog-Online Knowledge Sharing Platform</title>
            </Helmet>
            <Searchbar/>
            <Blogs/>
            <TopBlogs/>
            <Footer/>
        </div>
    );
};

export default BlogPage;