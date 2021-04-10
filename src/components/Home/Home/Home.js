import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import Header from './../Header/Header';
import MakeAppointment from './../MakeAppointment/MakeAppointment';
import Testimonials from './../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import Doctors from './../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;