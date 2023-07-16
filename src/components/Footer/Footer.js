import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
// import Ross1 from '../../assets/images/Ross1.webp';



function Footer() {
    const logo = 'https://ik.imagekit.io/s3i7pk3bg/portfolio-logo.png?updatedAt=1689228057897';

    return (
        <React.Fragment>
            <section id='footer-section' className="py-16 bg-secondary overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-center border-bottom border-dark-light pb-9 g-16">
                        <div className="col-auto">
                            <div className="row g-14 align-items-center">
                                <div id='footer-logo' className="col-lg-5 col-md-12">
                                    <Link to="/" className="cs-logo d-flex justify-content-center align-items-center" aria-label="back to home">
                                        <img
                                            className='img-fluid'
                                            src={logo}
                                            alt=''
                                        />
                                        <h4 class="ps-2 text-white d-inline-block">Fidel Deaquino</h4>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <ul className="nav justify-content-center">
                                        <li className="nav-item">
                                            <Link className="nav-link px-5" to="/">
                                                <h3 className="fs-18 fw-medium text-white mb-0">About</h3>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link px-5" to="/projects">
                                                <h3 className="fs-18 fw-medium text-white mb-0">Projects</h3>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link px-5" to="/skills">
                                                <h3 className="fs-18 fw-medium text-white mb-0">Skills</h3>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link px-5" to="/blog">
                                                <h3 className="fs-18 fw-medium text-white mb-0">Blog</h3>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link px-5" to="/contact">
                                                <h3 className="fs-18 fw-medium text-white mb-0">Contact</h3>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-1 col-md-12">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a className='ms-4 me-4' href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                                            <svg class="bi bi-linkedin" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#ffffff" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>                                </a>
                                        <a className='ms-4 me-4' href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                                            <svg class="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#ffffff" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center justify-content-center pt-8">
                        <div className="col-auto">
                            <p className="fs-19 text-light-dark mb-0">© Copyright 2023. All Rights Reserved.</p>
                        </div>
                        <div className="col-auto">
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link fs-19 fw-normal text-light-dark px-5" href="#">Privacy Policy</a></li>
                                <li className="nav-item"><a className="nav-link fs-19 fw-normal text-light-dark px-5" href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );

}

export default Footer;
