import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from '../pages/inc/Vmc';
import Service1 from '../images/img6.jpg'
function Home(){
    return(
        <div>
            <Slider />
        
        <section className="section">
            <div className="container">
             <div className="row">
                 <div className="col-md-12 ">
                     <h3 className="main-heading text text-center">Our company</h3>
                     <div className="underline mx-auto"></div>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique mi id mauris consequat lobortis. 
                     Donec eget turpis a velit congue condimentum in vel sapien. 
                     In blandit, justo a pulvinar blandit, quam est tristique arcu, eu auctor erat risus at orci. Class aptent 
                     taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris placerat, enim ut consequat porttitor, 
                     quam ex accumsan urna, vitae consectetur ipsum libero nec dolor. 
                     Aliquam sed ullamcorper massa, ut rutrum massa. 
                     Integer sed ex finibus lacus sodales fermentum. Curabitur quis tincidunt odio.
                     </p>
                     <Link to="/about" className="btn btn-warning shadow  text-center" >Read More</Link>
                 </div>
             </div>
            </div>
            </section>
{/*vision mission values */}
            <VMC />

{/* our services */}
            <section className="section border-top">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">our services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src ={Service1} className="w-100 border-bottom" alt="services" />
                            <div className="card-body">
                                <h6>Service1</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique mi id mauris consequat lobortis</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src ={Service1} className="w-100 border-bottom" alt="services" />
                            <div className="card-body">
                                <h6>Service1</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique mi id mauris consequat lobortis</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card shadow">
                            <img src ={Service1} className="w-100 border-bottom" alt="services" />
                            <div className="card-body">
                                <h6>Service1</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique mi id mauris consequat lobortis</p>
                                <Link to="/services" className="btn btn-link">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>       
        
        
        
        </div>
    );
}

export default Home;