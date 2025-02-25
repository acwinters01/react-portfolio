import React from 'react';
import { Navigation } from './Navbar.jsx';
import { Hero } from './HeroSection.jsx';
import { ProjectsPage } from '../projects/ProjectsPage.jsx';
import '../../styles/home.css'

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