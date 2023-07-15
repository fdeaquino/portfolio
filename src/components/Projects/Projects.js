import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Projects.css';
// import Ross1 from '../../assets/images/Ross1.webp';

function ToolIcon({ tool }) {
    return (
        <li className="list-inline-item mb-4 me-4 footerIcons">
            <img src={tool.src} alt={tool.alt} width="25rem" height="25rem" />
        </li>
    )
}


function Projects() {

    const allTools = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
            alt: "MongoDB Logo"
        },
        {
            id: 2,
            src: "https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png",
            alt: "Express Logo"
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
            alt: "React Logo"
        },
        {
            id: 4,
            src: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
            alt: "Node.js Logo"
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            alt: "HTML Logo"
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            alt: "CSS Logo"
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "JavaScript Logo"
        },
        {
            id: 8,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
            alt: "GraphQL Logo"
        },
        {
            id: 9,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
            alt: "Bootstrap Logo"
        },
        {
            id: 10,
            src: "https://avatars.githubusercontent.com/u/600935?s=200&v=4",
            alt: "Mapbox Logo"
        },
        {
            id: 11,
            src: "https://reactrouter.com/_brand/react-router-mark-color.svg",
            alt: "React Router Logo"
        },
        {
            id: 12,
            src: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
            alt: "Google Analytics Logo"
        },
        {
            id: 13,
            src: "https://formspree.io/static/img/favicon.ico",
            alt: "Formspree Logo"
        },
        {
            id: 14,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
            alt: "jQuery Logo"
        },
        {
            id: 15,
            src: "https://ik.imagekit.io/s3i7pk3bg/Project_Images/insomnia-logo.svg?updatedAt=1689443036769",
            alt: "Insomnia Logo"
        },
        // more tools here...
    ];

    // IMAGES
    const rossProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/ross-miller-esq.png?updatedAt=1689431499605';
    const crystalProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/crystal-davila-campaign.png?updatedAt=1689431528236';
    const parquesRecuerdosProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/parques-y-recuerdos-updated.png?updatedAt=1689431574232';
    const brickStreetProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/brick-street-updated.png?updatedAt=1689432406791';
    const taskmasterProProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/taskmasterpro-updated.png?updatedAt=1689431664036';
    const socialMediaAPIProject = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/Social-Media-API.png?updatedAt=1689431459321';

    // DEPLOYED PROJECT LINKS
    const rossDeployedProjectLink = 'https://rossmiller.esq/';
    const crystalDeployedProjectLink = 'http://www.crystal-davila.com/';
    const parquesRecuerdosDeployedProjectLink = 'https://fdeaquino.github.io/parques-y-recuerdos/';
    const brickStreetDeployedProjectLink = 'https://brickstreet.herokuapp.com/';
    const taskmasterProDeployedProjectLink = 'https://fdeaquino.github.io/taskmaster-pro/';
    const socialMediaAPIDeployedProjectLink = 'https://drive.google.com/file/d/11nKCAG32ieal8Re35TdwG-syhfcwNTkB/view';

    // REPO PROJECT LINKS
    const rossRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/ross-miller-esq.png?updatedAt=1689431499605';
    const crystalRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/crystal-davila-campaign.png?updatedAt=1689431528236';
    const parquesRecuerdosRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/parques-y-recuerdos-updated.png?updatedAt=1689431574232';
    const brickStreetRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/brick-street-updated.png?updatedAt=1689432406791';
    const taskmasterProRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/taskmasterpro-updated.png?updatedAt=1689431664036';
    const socialMediaAPIRepoLink = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/Social-Media-API.png?updatedAt=1689431459321';

    const [shownProjectId, setShownProjectId] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'Ross Miller, Esq.',
            subtitle: 'Partner & Shareholder at Gonzalez Olivieri, LLC',
            description: "A highly accessible and engaging web platform for Ross Miller, Esq., presenting his legal expertise and notable accomplishments as a renowned attorney. This project integrates advanced features like a Formspree contact form, leveraging React's capabilities to deliver a seamless user experience on any device. With its responsive design and emphasis on user-friendly interaction, the platform offers clients a smooth navigation experience. The use of Google Analytics aids in data-driven enhancements to further elevate user engagement and site performance.",
            tools: [3, 4, 7, 6, 5, 11, 12, 13],
            toolDescription: "React, Node, JavaScript, CSS, HTML, React Router, Google Analytics, Formspree",
            img: rossProject,
            visit: "Visit Website",
            deployedLink: rossDeployedProjectLink,
            repoLink: rossRepoLink,

        },
        {
            id: 2,
            name: 'Crystal Davila',
            subtitle: 'PISD School Board Member',
            description: 'A reelection website for Crystal Davila showcasing her political agenda and achievements as a School Board Member in Pasadena ISD. The website also features ways for supporters to get involved and stay informed about her campaign. Designed with responsiveness in mind, the site delivers an optimal viewing experience on any device, particularly mobile devices. Additionally, Google Analytics is utilized to gather user data, enabling continuous improvement in user engagement and site performance.',
            tools: [1, 2, 3, 4, 11, 12, 9, 7, 6, 5],
            toolDescription: "MERN Stack (MongoDB, Express, React, Node), JavaScript, CSS, HTML, Bootstrap, React Router, Google Analytics",
            img: crystalProject,
            visit: "Visit Website",
            deployedLink: crystalDeployedProjectLink,
            repoLink: crystalRepoLink,
        },
        {
            id: 3,
            name: 'Parques y Recuerdos',
            description: "Parques y Recuerdos: 'Spanglish Reflections on Park Adventures' is a vibrant platform intertwining travel, photography, and technology. Displaying my skills with REACT, Node.js, Express, and Mapbox, it tells a unique 'Spanglish' narrative of various park adventures, while capturing my journey as a bilingual individual. It offers an optimized, engaging storytelling experience on any device. Beyond showcasing my technical abilities, Parques y Recuerdos invites you to explore the rich experiences embedded within and embark on your own adventure.",
            tools: [2, 3, 4, 7, 6, 5, 9, 10, 11, 12],
            toolDescription: "Express, React, Node, JavaScript, CSS, HTML, Bootstrap, Mapbox, React Router, Google Analytics",
            img: parquesRecuerdosProject,
            visit: "Visit Website",
            deployedLink: parquesRecuerdosDeployedProjectLink,
            repoLink: parquesRecuerdosRepoLink,
        },
        {
            id: 4,
            name: 'Brick Street',
            description: "Brick Street is a comprehensive marketplace platform designed specifically for Lego enthusiasts. It provides users with an opportunity to buy and sell their Lego sets, while also connecting them with like-minded individuals. With its interactive features, users can also engage with other Lego enthusiasts by messaging each other directly on the app.",
            tools: [1, 2, 3, 4, 7, 6, 5, 8, 9, 15],
            toolDescription: "MERN Stack (MongoDB, Express, React, Node), JavaScript, CSS, HTML, GraphQL, Bootstrap, Insomnia",
            img: brickStreetProject,
            visit: "Visit Website",
            deployedLink: brickStreetDeployedProjectLink,
            repoLink: brickStreetRepoLink,
        },
        {
            id: 5,
            name: 'Taskmaster Pro',
            description: "Taskmaster Pro is a task management tool that enables users to create tasks with descriptions and deadlines. The app uses localStorage to save task data and includes user-friendly features such as drag-and-drop functionality to delete one task and a delete all button to delete all tasks. This tool is also installable as a Progressive Web Applicaiton - PWA.",
            tools: [4, 7, 6, 5, 9, 14],
            toolDescription: "Node, JavaScript, CSS, HTML, Bootstrap, jQuery",
            img: taskmasterProProject,
            visit: "Visit Website",
            deployedLink: taskmasterProDeployedProjectLink,
            repoLink: taskmasterProRepoLink,
        },
        {
            id: 6,
            name: 'Social Media API',
            description: "The code in this repo features the API for a social network application where users can share their thoughts, reactions to their friend's thoughts, and create a friends list. The API is built with Express.js for routing, a MongoDB database, and the Mongoose ODM (Object-Document Mapper). Together, these technologies create a RESTful API that execute CRUD methods.",
            tools: [1, 2, 4, 7, 15],
            toolDescription: "MongoDB, Express, Node, JavaScript, Insomnia",
            img: socialMediaAPIProject,
            visit: "View Demo",
            deployedLink: socialMediaAPIDeployedProjectLink,
            repoLink: socialMediaAPIRepoLink,
        },
        // more projects here...
    ];


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
                                {projects.map(project => (
                                    <div className="col-12 col-md-4" key={project.id}>
                                        <div>
                                            <a className="d-block mb-9" href="#">
                                                <img className="rounded shadow-lg img-fluid d-block w-100" src={project.img} alt="" />
                                            </a>
                                            <h4 className="fs-16 mb-4">{project.name}</h4>
                                            <h5 className="fs-20 mb-4">{project.subtitle}</h5>
                                            <p className="text-muted mb-5">{project.description}</p>
                                            <div className="d-flex align-content-center justify-content-between mb-1 cursor-pointer" onClick={() => setShownProjectId(shownProjectId === project.id ? null : project.id)}>
                                                <p className="mb-4">Tools used:</p>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: shownProjectId === project.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                                                    <path d="M3.75 11.25L9 6L14.25 11.25" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            {shownProjectId === project.id &&
                                                <div>
                                                    <ul>
                                                        {project.tools.map(id => {
                                                            const tool = allTools.find(tool => tool.id === id);
                                                            if (tool) {
                                                                return <ToolIcon key={tool.id} tool={tool} />;
                                                            }
                                                            return null;
                                                        })}
                                                    </ul>
                                                    <p>{project.toolDescription}</p>
                                                </div>
                                            }

                                            <a className="d-inline-block" href={project.deployedLink} style={{ textDecoration: "none" }}>
                                                <h4 className="fs-18 fw-medium mb-4">
                                                    <p>{project.visit}</p>
                                                </h4>
                                            </a>
                                            <a className="d-flex" href={project.repoLink} style={{ textDecoration: "none" }}>
                                                <h4 className="fs-18 fw-medium">
                                                    <p className="mb-2">Code Repository</p>
                                                    <div className="w-100 h-px bg-black" style={{ background: 'linear-gradient(98deg, #004644 0%, #126A59 20%, #3C9066 40%, #71B56C 60%, #AFD86D 80%, #F9F871 200%)', height: "2px" }}></div>
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-14 d-flex justify-content-center">
                                <div className="rounded-3" style={{
                                    padding: "3px",
                                    background: "linear-gradient(180deg, rgba(0,70,68,1) 0%, rgba(18,106,89,1) 20%, rgba(60,144,102,1) 40%, rgba(113,181,108,1) 60%, rgba(175,216,109,1) 80%)"
                                }}>
                                    <button className="btn btn-secondary px-4 py-3 rounded-1" type="button">
                                        <a href="https://github.com/fdeaquino" className="fs-17 fw-medium text-white mb-0">View More Projects</a>
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
                                    <div style={{ borderRadius: '15px', background: 'linear-gradient(0deg, hsl(174, 55%, 30%) 0%, hsl(162, 43%, 35%) 20%, hsl(145, 36%, 47%) 40%, hsl(122, 38%, 58%) 60%, hsl(74, 47%, 73%) 80%, hsl(54, 85%, 78%) 100%)' }}>
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
