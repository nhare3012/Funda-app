import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white  ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white " >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Provident molestias aliquid blanditiis eveniet 
                            repellat, pariatur facere consequuntur aut, nesciunt,  

                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <div> <Link to="/" > Home </Link> </div>
                        <div> <Link to="/abaout" > About </Link> </div>
                        <div> <Link to="/" > Contact </Link> </div>
                        <div> <Link to="/" > Blog </Link> </div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div> <p className="text-white mb-1"> #3012 Chitepo </p> </div>
                        <div> <p className="text-white mb-1"> #3111111111 </p> </div>
                        <div> <p className="text-white mb-1"> #0000000000</p> </div>
                        <div> <p className="text-white mb-1"> #nharetawanda@gmail.com </p> </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;
