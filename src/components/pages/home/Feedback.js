import React from 'react';
import feedback1 from './images/feedback1.jpg';
import feedback2 from './images/feedback2.jpg';
import feedback3 from './images/feedback3.jpg';

function Feedback() {
    return ( 
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Students' Feedback</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4  col-12 p-2">
                        <div className="card shadow">
                            <img src ={feedback1} className="w-100 border-bottom d-none d-sm-block" alt="feedback1" />
                            <div className="card-body">
                                <h6>Nimali Perera</h6>
                                <div className="underline"></div>
                                <p><em>"This is good quiz application. Thank you"</em></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-2">
                        <div className="card shadow">
                            <img src ={feedback2} className="w-100 border-bottom d-none d-sm-block" alt="feedback2" />
                            <div className="card-body">
                                <h6>Kamal Fernando</h6>
                                <div className="underline"></div>
                                <p><em>"Wow, fantastic website"</em></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 p-2">
                        <div className="card shadow">
                            <img src ={feedback3} className="w-100 border-bottom d-none d-sm-block" alt="feedback3" />
                            <div className="card-body">
                                <h6>Savini Gamage</h6>
                                <div className="underline"></div>
                                <p><em>"I learn English using this website"</em></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>  
     );
}

export default Feedback;