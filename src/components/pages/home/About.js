import React from 'react';
import about from './images/about.jpg';

function About(){
    return(
        <section className="section mt-5 mt-sm-0 about">
            <div className="container">
             <div className="row">
                 <div className="col-md-12 ">
                     <h3 className="main-heading text text-center">About Us</h3>
                     <div className="underline mx-auto"></div>
                     <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                     galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                     galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                     <div className="row d-none d-sm-block"><img src={about} alt="about" height={"200px"}/></div>
                    
                </div>
             </div>
            </div>
        </section>
    );
}

export default About;