import React, { useRef } from 'react';
import { Projects } from './Projects';

export const ProjectsPage = (props) => {
    const projectRef = useRef(null);
    return (
        <>
            <div className='projectpage-display' ref={projectRef}>
               <Projects /> 
            </div>
        </>
    );
}