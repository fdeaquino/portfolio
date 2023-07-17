import React from 'react';
import './Contact.css';
// import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    // const [state, handleSubmit] = useForm("");
    const Contact1 = 'https://ik.imagekit.io/s3i7pk3bg/Project_Images/ben-kolde-b15nB4ykyxc-unsplash.jpg?updatedAt=1689623001039';


    return (
        <React.Fragment>
            <section id='contact-page' className="position-relative pt-24 pb-10 bg-black overflow-hidden">
                <div className="container">
                    <div className="row g-16 align-items-center justify-content-center">
                        <div className="col-12 col-md-5 col-sm-6 d-flex justify-content-center">
                            <div className="d-flex mw-md-md mw-sm-xs mw-xs justify-content-center">
                                <div className="d-inline-block p-1 rounded-pill" style={{ background: 'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)' }}>
                                    <img className="img-fluid rounded-pill" src={Contact1} alt="image of phone and computer" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div className="mw-md-lg">
                                <div className='container d-flex'>
                                    <div id='justify-content-center-576' className='row'>
                                        <h2 className="col-auto fs-10 text-white mb-2">Get In Touch</h2>
                                        <p className="col-auto fs-17 text-dark mb-16">Lorem ipsum dolor sit amet, consectetur adipis.</p>

                                    </div>

                                </div>
                                <form>
                                    <div className="row mb-4 g-4">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fs-18 fw-medium text-white mb-3" htmlFor="signInInput3-1">Name</label>
                                                <div className="rounded-1" style={{ padding: '1px', background: 'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)' }}>
                                                    <input className="bg-black text-dark px-5 py-4 w-100 border-0 rounded-1" id="contactsInput3-1" style={{ borderRadius: '3px' }} type="text" placeholder="Your First & Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="fs-18 fw-medium text-white mb-3">Email address</label>
                                                <div className="rounded-1" style={{ padding: '1px', background: 'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)' }}>
                                                    <input className="bg-black text-dark px-5 py-4 w-100 border-0 rounded-1" id="signInInput3-1" style={{ borderRadius: '3px' }} type="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className="form-group mb-5">
                                                <label className="fs-18 fw-medium text-white mb-3">Email address</label>
                                                <div className="form-group mb-5 rounded-1" style={{ padding: '1px', background: 'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)' }}>
                                                    <textarea className="form-control text-dark bg-black px-5 py-4 w-100 border-0 rounded-1" id="contactsInput3-3" rows="3" placeholder="Write message" style={{ height: '155px' }}></textarea>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                    <button className="btn btn-light-light fs-20 w-100 px-11 py-5 text-uppercase border-0 mb-6" type="submit" style={{ letterSpacing: '1px', background: 'linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)' }}>Send message</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default Contact;
