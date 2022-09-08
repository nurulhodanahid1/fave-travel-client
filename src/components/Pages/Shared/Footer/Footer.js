import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
<>
            <footer className="footer-bg text-center text-white">
                <div className="container p-5">
                    <section className="social-media">
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link
                            className="icon mx-2"
                            to="#"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                    </section>
                    <section className="mt-4">
                        <form style={{color: "#cbd5e1"}} action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="form5Example2"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn footer-btn mb-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section style={{color: "#cbd5e1"}}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Information</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Open 24 Hours</li>
                                        <li>Phone: +880 1314410816</li>
                                        <li>Email: nurul.nahid17@gmail.com</li>
                                        <li>Location: Dhaka, Bangladesh</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Services</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Tourism</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="text-start">
                                    <h5 className="text-uppercase">Quick Contact</h5>
                                    <input className="form-control mb-2" type="email" placeholder="Enter Email" />
                                    <textarea className="form-control" placeholder="Enter Message" cols="30" rows="3"></textarea>
                                    <button className="btn footer-btn btn-sm mt-2">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

export default Footer;