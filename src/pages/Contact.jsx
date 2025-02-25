import React, { useState } from 'react';
import { Navigation } from '../components/Navbar';
import { Hero } from '../components/HeroSection';
import { ContactForm } from '../components/ContactForm';
import { Outlet } from "react-router";
import '../styles/contact.css';



export const Contact = (props) => {

    const [ banner, setBanner ] = useState(true);

    return (
        <>
        <div className={banner ? "banner-active" : "banner"}>
            <Hero />
            <Navigation />
        </div>
        <div className='contact-wrapper'>
            <div className='contact-form'>
                <h2>CONTACT ME</h2>
                <ContactForm />
            </div>
            <Outlet />
        </div>
        </>
    );
}