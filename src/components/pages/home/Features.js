import React from 'react';
import features from './images/features.png';

function Features() {
    return ( 
        <section className="section bg-c-light border-top">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">Our Features</h3>
                    <div className="underline mx-auto"></div>
                </div>
                <div className="col-md-4 text-center">
                    <h6>Take your quiz on mobile device</h6>
                        <p>
                            Easily make an online quiz that can be taken on mobile anywhere. 
                        </p>
                </div>
                <div className="col-md-4 text-center">
                    <h6>flexibility and Choice</h6>
                        <p>
                            Learn online in your own time and select your level. 
                        </p>
                </div>
                <div className="col-md-4 text-center">
                    <h6>Improve your skills</h6>
                        <p>
                        Enjoy with quizes and learn.
                        </p>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <h4 className="pt-5 pb-5">|We Help Students Develop Their Knowledge|</h4>
                    <center><table>
                        <tbody><tr className="text-center"><th><h4>1K+</h4></th><th><h4>10+</h4></th><th><h4>5+</h4></th></tr>
                        <tr><th>Students | </th><th>Quizes | </th><th>Subjects</th></tr></tbody>
                    </table></center>
                </div>
                <div className="col-sm-6">
                    <img id="feature" className="border-bottom-2 d-none d-sm-block" height={"60%"} src={features} alt="features"/>
                </div>
            </div>
            </div>
        </section>
     );
}

export default Features;