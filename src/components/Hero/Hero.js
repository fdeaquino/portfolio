import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';
// import Ross1 from '../../assets/images/Ross1.webp';



function Hero() {

    // const Ross1 = 'https://ik.imagekit.io/s3i7pk3bg/Ross1.webp?updatedAt=1688668574630';

    return (
        <React.Fragment>
            <section className='mt-6' style={{ background: "linear-gradient(112.84deg, #FFFFFF 0.33%, #EDF5F2 100%)" }}>
                <div className="position-relative overflow-hidden pt-24 pb-24">
                    <img className="position-absolute bottom-0 start-0" src="gradia-assets/elements/hero/gradient.png" alt="" />
                    <div className="position-relative container" style={{ zIndex: "50" }}>
                        <div id='flex-row-reverse' className="row align-items-center g-16">
                            <div className="col-12 col-md-6">
                                <div className="mw-md-xl">
                                    <h2 className="fs-7 mb-8">A habit tracker for growing yourself</h2>
                                    <p className="fs-17 text-muted mw-md-md mb-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia grow.</p>
                                    <div className="row mb-20 g-5">
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
                                    </div>
                                    <h3 className="fs-17 fw-semibold">Trusted by 1M+ customers</h3>
                                    <div className="row align-items-center g-2">
                                        <div className="col-auto">
                                            <div className="row g-1">
                                                {Array(5).fill().map((_, i) =>
                                                    <div className="col-auto" key={i}>
                                                        <img className="img-fluid" src="gradia-assets/elements/hero/star.svg" alt="" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <h3 className="fs-18 fw-medium mb-0">
                                                <span>4.2/5</span>
                                                <span className="text-dark">(45k Reviews)</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center">
                                <div className="d-inline-block p-1 rounded-pill" style={{ background: "linear-gradient(0deg, rgba(0,70,68,1) 0%, rgba(18,106,89,1) 20%, rgba(60,144,102,1) 40%, rgba(113,181,108,1) 60%, rgba(175,216,109,1) 80%, rgba(249,248,113,1) 100%)" }}>
                                    <img id='hero-photo-resizing' className="img-fluid rounded-pill" src="gradia-assets/images/testimonials/man.jpg" alt="" />
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
