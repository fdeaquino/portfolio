import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';


function Hero() {

    const Fidel1 = 'https://ik.imagekit.io/s3i7pk3bg/fd-updated-photo.jpg?updatedAt=1689474098509';

    return (
        <React.Fragment>
            <section className='mt-6' style={{ background: "linear-gradient(112.84deg, #FFFFFF 0.33%, #EDF5F2 100%)" }}>
                <div className="position-relative overflow-hidden pt-24 pb-12 gradient-radial" >
                    {/* <img className="position-absolute bottom-0 start-0" src="gradia-assets/elements/hero/gradient.png" alt="" /> */}
                    <div className="position-relative container" style={{ zIndex: "50" }}>
                        <div id='flex-row-reverse' className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-6">
                                <div className="mw-md-xl">
                                    <h2 className="fs-7 mt-8 mb-8">Designing and building websites for small businesses</h2>
                                    <p className="fs-17 text-muted mw-md-md mb-10">Specializing in creating high-quality, professional websites, designed to elevate your small business and ensure a strong online presence.</p>
                                    {/* <div className="row mb-20 g-5">
                                        <div className="col-auto">
                                            <Link to="#">
                                                <img className="img-fluid" src="gradia-assets/logos/brands/app-store.svg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                            <Link to="#">
                                                <img className="img-fluid" src="gradia-assets/logos/brands/play-store.svg" alt="" />
                                            </Link>
                                        </div>
                                    </div> */}


                                </div>
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center">
                                <div className="d-inline-block p-1 rounded-pill" style={{ background: "linear-gradient(0deg, rgba(0,70,68,1) 0%, rgba(18,106,89,1) 20%, rgba(60,144,102,1) 40%, rgba(113,181,108,1) 60%, rgba(175,216,109,1) 80%, rgba(249,248,113,1) 100%)" }}>
                                    <img id='hero-photo-resizing' className="img-fluid rounded-pill" src={Fidel1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="pt-10 pb-10 overflow-hidden" style={{ background: 'linear-gradient(98.24deg, #FFFFFF 0%, #F9F9FF 47.4%, #EBECF7 100%)' }}>
                <div className="container">
                    <div className="row g-16">
                        <div className="col-12 col-md-6">
                            <div className="d-flex flex-column justify-content-between mw-md-md h-100">
                                <div>
                                    <h2 className="fs-10 fw-semibold lh-sm mb-5">About Me</h2>
                                    <p className="text-muted mb-0">I'm a Full-Stack Developer with a passion for creating user-centric web applications. This section should include some hobbies and interests.</p>
                                </div>
                                <div>
                                    <Link className="d-inline-block nav-link px-0 fs-18" to="/projects">
                                        <p className="fw-medium mb-1">Looking for my portfolio? Click here</p>
                                        <div style={{ height: '2px', background: 'linear-gradient(90deg, rgb(0, 70, 68) 20%, rgb(113, 181, 108) 50%,  RGB(175, 216, 109) 100%)' }}></div>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mw-md-lg ms-auto">
                                <div className="mb-6">
                                    <h3 className="fs-15 fw-medium mb-4">My Professional Background</h3>
                                    <p className="mb-7">With over 5 years of experience in the industry, I've worked with a variety of technologies and frameworks.</p>
                                    <div style={{ height: '2px', background: 'linear-gradient(90deg, rgb(0, 70, 68) 20%, rgb(113, 181, 108) 50%,  RGB(175, 216, 109) 100%)' }}></div>
                                </div>
                                <div className="mb-6">
                                    <h3 className="fs-15 fw-medium mb-4">My Everyday Values</h3>
                                    <p className="mb-7">I'm proficient in React, Node.js, Express, MongoDB, and have experience with several other languages and frameworks.</p>
                                    <div style={{ height: '2px', background: 'linear-gradient(90deg, rgb(0, 70, 68) 20%, rgb(113, 181, 108) 50%,  RGB(175, 216, 109) 100%)' }}></div>
                                </div>
                                <div>
                                    <h3 className="fs-15 fw-medium mb-4">My Work Philosophy</h3>
                                    <p className="mb-7">I believe in continuous learning and improvement, and I'm always eager to explore new technologies and methodologies.</p>
                                    <div style={{ height: '2px', background: 'linear-gradient(90deg, rgb(0, 70, 68) 20%, rgb(113, 181, 108) 50%,  RGB(175, 216, 109) 100%)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-36">
                    <div className="p-16" style={{ background: "linear-gradient(0deg, rgba(0, 70, 68, 0.9) 0%, rgb(18, 106, 89) 20%, rgb(60, 144, 102) 40%, rgb(113, 181, 108) 60%, rgb(175, 216, 109) 80%, rgba(249, 248, 113, 0.5) 100%)", borderRadius: "10px" }}>
                        <div className="container">
                            <div className="row justify-content-sm-between align-items-md-center g-16">
                                <div className="col-12 col-md-6">
                                    <div className="mw-md-md">
                                        <h3 className="fs-16 fw-medium text-secondary opacity-75 mb-4">Let's Connect</h3>
                                        <h2 className="fs-11 text-secondary mb-0">Ready to build something amazing together?</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="container">
                                        <div className="row justify-content-md-end g-4">
                                            <div className="col-12 col-md-auto">
                                                <Link to="/contact">
                                                    <button className="btn btn-light h-100 px-10 py-5 w-100 text-uppercase" type="button" style={{ letterSpacing: "1px" }}>Contact Me</button>
                                                </Link>

                                            </div>
                                            <div className="col-12 col-md-auto">
                                                <Link to="/projects">
                                                    <button className="btn btn-outline-light h-100 d-flex justify-content-center align-items-center px-10 py-5 w-100 text-uppercase" type="button" style={{ letterSpacing: "1px" }}>
                                                        <div>
                                                            <svg className="me-2" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="mb-0">View My Work</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Hero;
