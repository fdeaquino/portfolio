import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SkillsResume.css';

function SkillsResume() {
    const gradients = [
        "linear-gradient(98.24deg, #6CD5F7 0%, #F89D5C 50.52%, #5B6AF0 100%)",
        "linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%)",
        "linear-gradient(98.24deg, #6C2DD1 0%, #FF7DBC 100%)",
        "linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)",
        "linear-gradient(98.24deg, #56C1E3 0%, #5B6AF0 100%)",
        "linear-gradient(98.24deg, #6CD5F7 0%, #FEE2CE 35.94%, #B0A9DF 69.27%, #5B6AF0 100%)"
    ];

    const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

    const webDevelopmentSkills = ["Front-End Development", "React", "Bootstrap", "Responsive Design", "JavaScript", "CSS", "HTML", "Back-End Development",];
    const serverSideDevelopmentSkills = ["APIs", "Node", "Express", "MySQL", "Sequelize", "MongoDB", "Mongoose", "REST", "GraphQL"];
    const projectManagementSkills = ["Project Management", "Git", "NoSQL", "Webpack", "Google Analytics", "Google Lighthouse", "Bilingual Translations", "Online Forms", "Regex", "JSON", "REST", "Mobile First", "Debugging", "Servers", "Databases", "Professional Communication", "Bilingual", "Data Analysis", "Data Management"];

    const FeatureCard = ({ gradient, title }) => (
        <div className="col-auto d-flex justify-content-center">
            <div className="d-inline-flex justify-content-center align-items-center p-4 bg-white" style={{ borderRadius: "40px" }}>
                <div>
                    <div className="inline-block me-3" style={{ width: "14px", height: "14px", borderRadius: "40px", background: gradient }}></div>
                </div>
                <h3 className="fs-17 fw-semibold mb-0 text-secondary">{title}</h3>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <section id='skillsresume-page' className="position-relative pt-24 pb-10 bg-white overflow-hidden gradient-radial" >
                <div className="container">
                    <div className="mw-md-lg mx-auto text-center mb-20">
                        <h2 className="fs-11 mb-0 text-secondary mb-5">Skills That Set Me Apart</h2>
                        <p className="text-muted mw-md-md mx-auto mb-0">With a unique blend of creativity and technical skills, I deliver websites that not only look good but perform optimally.</p>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center mb-4 g-4">
                            {webDevelopmentSkills.map(skill => <FeatureCard gradient={getRandomGradient()} title={skill} />)}
                        </div>
                        <div className="row justify-content-center mb-4 g-4">
                            {serverSideDevelopmentSkills.map(skill => <FeatureCard gradient={getRandomGradient()} title={skill} />)}
                        </div>
                        <div className="row justify-content-center g-4">
                            {projectManagementSkills.map(skill => <FeatureCard gradient={getRandomGradient()} title={skill} />)}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-40 bg-white overflow-hidden">
                <div className="container">
                    <div>
                        <div className="container">
                            <div className="row align-items-center g-16">
                                <div className="col-12 col-md-6">
                                    <div className="mw-md-xl">
                                        <h2 className="fs-10 mb-6">A Track Record of Adaptability and Growth</h2>
                                        <p className="text-muted mw-md-md mb-9">From teaching to administration, and now development, my career demonstrates a strong capacity for learning and tackling new challenges.</p>
                                        <button className="btn btn-primary fs-18 fw-medium px-6 py-4 rounded-pill" type="button">View Resume PDF</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mw-md-md mx-auto">
                                        <div className="d-flex align-items-center p-5 mb-5 bg-white shadow" style={{ borderRadius: "15px" }}>
                                            <img className="me-4" src="gradia-assets/elements/features/web1.svg" alt="" />
                                            <div>
                                                <h3 className="fs-18 fw-medium mb-0">Web Developer</h3>
                                                <p className="fs-20 text-muted mb-0">2023</p>
                                            </div>
                                        </div>
                                        <div className="position-relative d-flex align-items-center p-5 mb-5 bg-white opacity-75 shadow" style={{ left: "-24px", borderRadius: "15px" }}>
                                            <img className="me-4" src="gradia-assets/elements/features/web2.svg" alt="" />
                                            <div>
                                                <h3 className="fs-18 fw-medium mb-0">School Administrator</h3>
                                                <p className="fs-20 text-muted mb-0">2021 - 2022</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center p-5 mb-5 bg-white opacity-50 shadow" style={{ borderRadius: "15px" }}>
                                            <img className="me-4" src="gradia-assets/elements/features/web3.svg" alt="" />
                                            <div>
                                                <h3 className="fs-18 fw-medium mb-0">School Teacher</h3>
                                                <p className="fs-20 text-muted mb-0">2016 - 2021</p>
                                            </div>
                                        </div>
                                        <div className="position-relative d-flex align-items-center p-5 bg-white opacity-25 shadow" style={{ left: "-24px", borderRadius: "15px" }}>
                                            <img className="me-4" src="gradia-assets/elements/features/web4.svg" alt="" />
                                            <div>
                                                <h3 className="fs-18 fw-medium mb-0">University Student</h3>
                                                <p className="fs-20 text-muted mb-0">2011 - 2016</p>
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

export default SkillsResume;

