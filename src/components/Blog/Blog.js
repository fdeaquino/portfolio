import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import SingleBlogView from '../SingleBlogView/SingleBlogView';
import './Blog.css';

function createPreview(description) {
    let words = description.split(" ");
    if (words.length > 25) {
        return words.slice(0, 25).join(" ") + "...";
    } else {
        return description;
    }
}

function Blog({ blogData }) {
    const [showAllBlogs, setShowAllBlogs] = useState(false);

    // Blogs to show
    const blogsToShow = showAllBlogs ? blogData : blogData.slice(0, 3);

    const handleClick = () => {
        setShowAllBlogs(true);
    }

    return (
        <Routes>
            <Route index element={
                <section id='skillsresume-page' className="position-relative pt-24 pb-10 bg-white overflow-hidden">
                    <div className="container">
                        <div className="text-center mw-lg mx-auto mb-20">
                            <h2 className="fs-10 fw-semibold mb-4">Latest Blog Posts</h2>
                            <p className="fs-17 text-dark">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                        </div>
                        <div className="mw-7xl mx-auto">
                            <div className="row g-16">
                                {blogsToShow.map((blog, index) => {
                                    return (
                                        <div key={blog.id} className="col-12 col-md-4">
                                            <Link to={`/blog/${blog.id}`}>
                                                <div className="position-relative">
                                                    <img className="w-100 mb-5 rounded-3" src={blog.imgSrc} alt={blog.altText} />
                                                    <h3 className="fs-17 fw-semibold lh-sm mb-4">{blog.title}</h3>
                                                    <p className="fs-17 text-dark">{createPreview(blog.description)}</p>
                                                    <span className="d-inline-block fs-20 fw-semibold text-dark text-uppercase" style={{ letterSpacing: "1px" }}> {blog.readTime} min read</span>
                                                    <p className="d-block fs-20 text-dark text-uppercase" style={{ letterSpacing: "1px" }}>About: {blog.category}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            {!showAllBlogs &&
                                <div className="text-center mt-14 d-flex justify-content-center">
                                    <div className="rounded-3" style={{
                                        padding: "3px",
                                        background: "linear-gradient(180deg, rgba(0,70,68,1) 0%, rgba(18,106,89,1) 20%, rgba(60,144,102,1) 40%, rgba(113,181,108,1) 60%, rgba(175,216,109,1) 80%)"
                                    }}>
                                        <button className="btn btn-secondary px-4 py-3 rounded-1 fs-17 fw-medium text-white mb-0" type="button" onClick={handleClick}>
                                            View All Blog Posts
                                        </button>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                </section>
            } />
            <Route path=":id" element={<SingleBlogView blogData={blogData} />} />
        </Routes>
    );
}

export default Blog;
