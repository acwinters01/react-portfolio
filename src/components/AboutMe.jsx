import React, { useState } from 'react';
import { Navigation } from '../components/Navbar';
import { Hero } from '../components/HeroSection';
import '../styles/aboutme.css';

export const AboutMe = (props) => {

    const skills = [
        {
            image: '/skillIcons/adobe-after-effects-icon.svg',
            title: 'After Effects',
        },
        {
            image: '/skillIcons/adobe-illustrator-icon.svg',
            title: 'Illustrator',
        },
        {
            image: '/skillIcons/adobe-photoshop-icon.svg',
            title: 'Photoshop',
        },
        {
            image: '/skillIcons/blender-icon.svg',
            title: 'Blender 3D',
        },
        {
            image: '/skillIcons/css-icon.svg',
            title: 'CSS',
        },
        {
            image: '/skillIcons/git-icon.svg',
            title: 'Git',
        },
        {
            image: '/skillIcons/github-white-icon.svg',
            title: 'GitHub',
        },
        {
            image: '/skillIcons/html-icon.svg',
            title: 'HTML',
        },
        {
            image: '/skillIcons/javascript-programming-language-icon.svg',
            title: 'JavaScript',
        },
        {
            image: '/skillIcons/jest-js-icon.svg',
            title: 'Jest',
        },
        {
            image: '/skillIcons/node-js-icon.svg',
            title: 'Node.js',
        },
        {
            image: '/skillIcons/python-programming-language-icon.svg',
            title: 'Python',
        },
        {
            image: '/skillIcons/react-js-icon.svg',
            title: 'React',
        },
        {
            image: '/skillIcons/redux-icon.svg',
            title: 'Redux',
        },
        {
            image: '/skillIcons/visual-studio-code-icon.svg',
            title: 'Visual Studio Code',
        },
        {
            image: '/skillIcons/vite.svg',
            title: 'Vite',
        },
        // {
        //     image: '',
        //     title: '',
        // },

    ];
    
    return (
        <>
            <div className='banner'>
                <Hero />
                <Navigation />
            </div>
            <div className='spacer'></div>
            <div className='aboutus-wrap'>
                <div className='aboutus-text'>
                    <p>
                        Hi, I'm Alexandra, or Alex for short, 
                        a passionate Front-End Developer with a love for 3D art and illustrations. 
                        I specialize in HTML, CSS, and, Python, JavaScript, with experience in 
                        frameworks like React and a strong focus on responsive and accessible 
                        design. I take pride in writing code that looks great and performs 
                        seamlessly across devices. Over the past few years, I've worked on various
                        projects that have challenged and sharpened my skills, and I love turning 
                        ideas into beautiful and functional digital experiences. When I'm not coding, 
                        you can find me playing video games like Baldur's Gate 3 or Ori Will of the 
                        Wisps while enjoying a frappe or working on my next creative project. 
                        I'm always open to new opportunities, so feel free to reach out if 
                        you'd like to collaborate!
                    </p>
                </div>
                <h2>Skills</h2>
                <div className='skill-wrap'>
                    {skills.map((skill, index) => (
                        <div key={`${index}-skill`} className='skill-block' id={skill.title}>
                            <img src={skill.image} alt={`image of ${skill.title}`} className='icon'/>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );               
};