import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Projects.css';
// import Ross1 from '../../assets/images/Ross1.webp';



function Projects() {

    // const Ross1 = 'https://ik.imagekit.io/s3i7pk3bg/Ross1.webp?updatedAt=1688668574630';

    const [openSection, setOpenSection] = useState('GoogleAnalytics');

    const toggleSection = (sectionName) => {
        if (openSection === sectionName) {
            setOpenSection(null);
        } else {
            setOpenSection(sectionName);
        }
    };



    return (
        <React.Fragment>
            <section id='projects-page' className="position-relative pt-24 pb-10 bg-white overflow-hidden">
                <div className="container">
                    <div className="mw-md-2xl mx-auto text-center mb-16">
                        <h2 className="fs-10 mb-6 lh-sm">Explore my recent projects</h2>
                        <p className="mb-0 text-muted mx-auto mb-0 mw-md-lg">These recent projects offer a glimpse into my professional capabilities, innovative approach, and problem-solving skills.</p>
                    </div>
                    <div className="mw-7xl">
                        <div className="container">
                            <div className="row g-16">
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/experts.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">2100+ marketing experts</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'linear-gradient(30deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/insights.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">Live analytics &amp; insights</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'radial-gradient(circle, #71B56C 40%, #3C9066 60%, #126A59 80%, #004644 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/results.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">Proven results</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'linear-gradient(300deg, #126A59 20%, #3C9066 40%, #71B56C 60%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/experts.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">2100+ marketing experts</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'linear-gradient(30deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/insights.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">Live analytics &amp; insights</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'radial-gradient(circle, #71B56C 40%, #3C9066 60%, #126A59 80%, #004644 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div>
                                        <a className="d-block mb-9" href="#">
                                            <img className="w-100" src="gradia-assets/images/features/results.png" alt="" />
                                        </a>
                                        <h4 className="fs-16 mb-4">Proven results</h4>
                                        <p className="text-muted mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                                        <a className="d-inline-block" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium mb-4">
                                                <p style={{
                                                    background: 'linear-gradient(300deg, #126A59 20%, #3C9066 40%, #71B56C 60%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>Site Link</p>
                                            </h4>
                                        </a>
                                        <a className="d-flex" href="#" style={{ textDecoration: "none" }}>
                                            <h4 className="fs-18 fw-medium">
                                                <p className="mb-2">Code Repository</p>
                                                <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-14 d-flex justify-content-center">
                                <div className="rounded-3" style={{
                                    padding: "3px",
                                    background: "linear-gradient(180deg, rgba(0,70,68,1) 0%, rgba(18,106,89,1) 20%, rgba(60,144,102,1) 40%, rgba(113,181,108,1) 60%, rgba(175,216,109,1) 80%)"
                                }}>
                                    <button className="btn btn-secondary px-4 py-3 rounded-1" type="button">
                                        <a href="#your-link" className="fs-17 fw-medium text-white mb-0">View More Projects</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white overflow-hidden">
                <div className="container">
                    <div className="mw-7xl mx-auto">
                        <div className="container">
                            <div className="row align-items-lg-center g-12 g-lg-16">
                                <div className="col-12 col-md-6">
                                    <div style={{ borderRadius: '15px', background: 'linear-gradient(0deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%' }}>
                                        <img className="position-relative w-100" style={{ top: '12px' }} src="gradia-assets/images/features/team.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <h3 className="fs-12 mb-11">Enhanced outcomes with modern tech solutions and practices</h3>
                                        <div>
                                            <div className="mb-6 h-px" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "1px" }}></div>
                                            <div className="d-flex align-items-center justify-content-between mb-6 cursor-pointer" onClick={() => toggleSection('GoogleAnalytics')}>
                                                <h3 className="fs-17 mb-0">Google Analytics</h3>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openSection === 'GoogleAnalytics' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                                    <path d="M3.75 11.25L9 6L14.25 11.25" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            {openSection === 'GoogleAnalytics' && (
                                                <p className="text-muted mb-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                            )}
                                        </div>
                                        <div>
                                            <div className="mb-6 h-px" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "1px" }}></div>
                                            <div className="d-flex align-items-center justify-content-between mb-6 cursor-pointer" onClick={() => toggleSection('Responsiveness')}>
                                                <h3 className="fs-17 mb-0">Web Responsiveness</h3>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openSection === 'Responsiveness' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                                    <path d="M3.75 11.25L9 6L14.25 11.25" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            {openSection === 'Responsiveness' && (
                                                <p className="text-muted mb-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                            )}
                                        </div>
                                        <div>
                                            <div className="mb-6 h-px" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "1px" }}></div>
                                            <div className="d-flex align-items-center justify-content-between mb-6 cursor-pointer" onClick={() => toggleSection('ModernTech')}>
                                                <h3 className="fs-17 mb-0">Modern Tech</h3>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: openSection === 'ModernTech' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                                    <path d="M3.75 11.25L9 6L14.25 11.25" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            {openSection === 'ModernTech' && (
                                                <p className="text-muted mb-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                            )}
                                            <div className="h-px" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "1px" }}></div>
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

export default Projects;
