import React from 'react';
import Footer from '../includes/Footer';
import Vmc from '../includes/Vmc';

function About() {
    return (
        <div>
             <section className="bg-info py-4">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4 my-auto">
                             <h4>About Us</h4>

                         </div>
                         <div className="col-md-8 my-auto ">
                             <h6 className="float-end">
                                 Home / About Us

                             </h6>

                         </div>
                     </div>
                 </div>

             </section>

             <section className="  border-bottom section">
                 <div className="container">
                     <h5 className="main-heading" >Our Company</h5>
                     <div className="underline"></div>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Provident molestias aliquid blanditiis eveniet 
                        repellat, pariatur facere consequuntur aut, nesciunt, 
                     </p>
                 </div>
             </section>

             <Vmc/>

             <Footer/>
            
        </div>
    )
}

export default About;
