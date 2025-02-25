import React from 'react';
import { Navigation } from '../components/Navbar';
import { Hero } from '../components/HeroSection';
import { ProjectsPage } from './ProjectsPage.jsx';
import '../styles/home.css'

export const Home = (props) => {

    return (
        <> 
            <div className='home'>
                <Hero />
                <Navigation />
            </div>
            <div>
                <ProjectsPage />
            </div>
        </>
    );
}