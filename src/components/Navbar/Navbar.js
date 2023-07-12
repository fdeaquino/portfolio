import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
    title: '',
    meta: [],
    link: [],
    style: [],
    script: [],
};

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split('/')[1] || 'home';
        setActiveMenuItem(currentPath);
    }, [location]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        document.body.classList.toggle('cs-open');
    };

    const closeMenu = () => {
        setIsExpanded(false);
        document.body.classList.remove('cs-open');
    };

    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet {...meta}></Helmet>
            </HelmetProvider>
            <header id="cs-navigation" className={isExpanded ? 'bg-secondary cs-active' : 'bg-secondary'}>
                <div className="cs-container">
                    <Link to="/" className="cs-logo" aria-label="back to home" onClick={closeMenu}>
                        <img
                            className='img-fluid'
                            src='gradia-assets/logos/gradia-name-white.svg'
                            alt=''
                        />
                    </Link>
                    <nav className="cs-nav" role="navigation">
                        <button
                            className={`cs-toggle ${isExpanded ? 'cs-active' : ''}`}
                            aria-label="mobile menu toggle"
                            onClick={handleToggle}
                            aria-expanded={isExpanded}
                        >
                            <div className="cs-box" aria-hidden="true">
                                <span className="cs-line cs-line1" aria-hidden="true"></span>
                                <span className="cs-line cs-line2" aria-hidden="true"></span>
                                <span className="cs-line cs-line3" aria-hidden="true"></span>
                            </div>
                        </button>
                        <div className="cs-ul-wrapper">
                            <ul
                                id="cs-expanded"
                                className={`cs-ul ${isExpanded ? 'cs-active' : ''}`}
                            >
                                <li className="nav-item cs-li">
                                    <Link to="/about" style={{ color: isExpanded ? 'black' : 'white' }} className={`cs-li-link ${activeMenuItem === 'about' ? 'cs-active' : ''}`} onClick={closeMenu}>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item cs-li">
                                    <Link to="/projects" style={{ color: isExpanded ? 'black' : 'white' }} className={`cs-li-link ${activeMenuItem === 'projects' ? 'cs-active' : ''}`} onClick={closeMenu}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item cs-li">
                                    <Link to="/skills" style={{ color: isExpanded ? 'black' : 'white' }} className={`cs-li-link ${activeMenuItem === 'skills' ? 'cs-active' : ''}`} onClick={closeMenu}>
                                        Skills
                                    </Link>
                                </li>
                                <li className="nav-item cs-li">
                                    <Link to="/resume" style={{ color: isExpanded ? 'black' : 'white' }} className={`cs-li-link ${activeMenuItem === 'resume' ? 'cs-active' : ''}`} onClick={closeMenu}>
                                        Resume
                                    </Link>
                                </li>
                                {/* <li className="nav-item cs-li">
                                    <Link  className={`cs-li-link cs-button-solid cs-nav-button ${activeMenuItem === 'contact' ? 'cs-active' : ''}`} onClick={closeMenu}>
                                        Contact
                                    </Link>
                                </li> */}
                                <div className="d-lg-block">
                                <div className="rounded-3" style={{ padding: "2px", background: "linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)" }}>
                                    <button className="btn btn-secondary px-4 py-3 rounded-1" type="button" onClick={closeMenu}>
                                        <Link to="/contact" className="fs-17 fw-medium text-white mb-0">Contact</Link>
                                    </button>
                                </div>
                            </div>
                            </ul>
                            

                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    );
}
