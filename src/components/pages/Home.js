import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../includes/Slider';
import Vmc from '../includes/Vmc';
import Image1 from '../images/Image1.jpg'
import Footer from '../includes/Footer';


function Home() {
    return (
        <div>
            <Slider/>

             <section className="section">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12 text-center">
                             <h3 className="main-heading" >Our Company</h3>
                             <div className="underline mx-auto"></div>
                             <p>
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident molestias aliquid blanditiis eveniet 
                                 repellat, pariatur facere consequuntur aut, nesciunt, quisquam suscipit dolorem. Aspernatur ipsam aliquid assumenda, 
                                 dolorem dolores, praesentium harum optio dignissimos omnis soluta sunt ipsa? Cupiditate at totam nesciunt veritatis. 
                                 Nobis doloremque in,obcaecati est distinctio debitis dicta? Necessitatibus.
                             </p>
                             <Link to="/about" className="btn btn-warning shadow" > Read More </Link>
                         </div>
                     </div>
                 </div>
             </section>

             {/* OUR VISION */}

             <Vmc/>

             {/* Services */}
             <section className="section  border-top shadow">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12 mb-4 text-center">
                             <h3 className="main-heading" >Our Services </h3>
                             <div className="underline mx-auto"></div>
                         </div>
                         <div className="col-md-4  shadow  ">
                             <div className="card shadow">
                                <img src={Image1}className="img-fluid border-bottom" alt="Services" />
                                 <div className="card-body ">
                                    <h6>Service1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="/services" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>

                         <div className="col-md-4 shadow    ">
                             <div className="card shadow">
                                <img src={Image1}className="img-fluid border-bottom" alt="Services" />
                                 <div className="card-body ">
                                    <h6>Service2</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="/services" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>

                         <div className="col-md-4 shadow   ">
                             <div className="card shadow">
                                <img src={Image1}className="img-fluid border-bottom" alt="Services" />
                                 <div className="card-body ">
                                    <h6>Service3</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="/services" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>
                     </div>
                 </div>
             </section>

             {/* Footer */}

             <Footer/>

       


        </div>
       
    )
}

export default Home;
