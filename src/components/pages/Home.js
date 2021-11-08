import React from 'react';
//import Slider from '../inc/Slider';
import Navbar from '../inc/Navbar';
import Footer from '../inc/Footer';
import About from '../pages/home/About';
import Feedback from '../pages/home/Feedback';
import Features from '../pages/home/Features';
import Cover from '../pages/home/Cover';

function Home(){
    return(
        <div>
            {/*Home Components*/}
            <Navbar />
            <Cover />
            <About />
            <Features />
            <Feedback />              
            <Footer />
        </div>
    );
}

export default Home;