import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import BlogNotFound from '../BlogNotFound/BlogNotFound.js'

import './SingleBlogView.css';

function SingleBlogView({ blogData }) {
    const { id } = useParams();

    // Find the case that matches the id in the URL
    const blogDetail = blogData.find(blogItem => blogItem.id === Number(id));

    // If there's no matching case, return null or some 404 component
    // if (!blogDetail) return <BlogNotFound />;
    // or return <NotFound />;

    return (
        <React.Fragment>
            <section id='singleblog-page' className="position-relative pt-24 pb-10 bg-white overflow-hidden bg-light-light">
                <div className="container">
                    <div className="row align-items-end mb-12">
                        <div className="col-12 mb-8 mb-md-0">
                            <div>
                                <h2 className="fs-10 fw-semibold mb-4">{blogDetail.title}</h2>

                                <p className=" mw-xl-none mb-0">{blogDetail.description}</p>
                            </div>
                        </div>
                        <div className="col-12 text-end">
                            <Link className="d-inline-block pb-2 fw-semibold border-0 border-2 border-dark border-bottom" to="/blog">
                                <span className="me-3">Back to homepage</span>
                                <svg className="rotate-45" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 1.5L1.5 9.5" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M9.5 8.83571V1.5H2.16429" stroke="black" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <img className="img-fluid w-100 rounded-5 blog-img" src={blogDetail.imgSrcSingleBlogView} alt="" />
                </div>
            </section>


        </React.Fragment>
    )
}

export default SingleBlogView;
