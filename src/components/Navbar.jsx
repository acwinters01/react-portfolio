import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export const Navigation = (props) => {

    return (
        <>
            <div className='navigation'>
                <div className='classList'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}><span><p>Projects</p></span></NavLink>
                    <NavLink to="/designs" className={({ isActive }) => isActive ? "active-link" : ""}><span><p>Designs</p></span></NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}><span><p>About Me</p></span></NavLink>
                    <NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""}><span><p>Skills</p></span></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}><span><p>Contact Me</p></span></NavLink>
                </div>
            </div>
        </>
    );
};