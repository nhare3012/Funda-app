import React from 'react';
import Footer from '../includes/Footer';

function Contact() {
    return (
        <div>
            <section className="bg-info py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <h4>Contact Us</h4>

                            </div>
                            <div className="col-md-8 my-auto ">
                                <h6 className="float-end">
                                    Home / Contact Us

                                </h6>

                            </div>
                        </div>
                    </div>

            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow ">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-right ">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control " placeholder="Enter Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control " placeholder="Enter Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control " placeholder="Enter Email Address"/>
                                    </div>
                                    <div className="form-group"> 
                                        <label className="mb-1">Message</label>
                                        <textarea className="form-control " placeholder= "Type your Message..." rows="3"></textarea>
                                    </div> 
                                    <div className="form-group py-3 "> 
                                        
                                        <button className="btn btn-primary shadow w-100 "  > Send Message </button>
                                    </div> 
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>

                                    <p>
                                        tawanda nhare 
                                    </p>

                                    <p>
                                        phone:  003979890i02
                                    </p>

                                    <p>
                                        nharetawanda@gmail.com
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Contact;
