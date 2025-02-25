import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import { Link } from 'react-router-dom';

gsap.registerPlugin(Flip);

export const ProjectCard = ({ title, description, techUsed, imageUri, link, projectRef, setActiveCard }) => {
    const cardRef = useRef(null);
    const detailRef = useRef(null);
    const detailContentRef = useRef(null);
    const detailImageRef = useRef(null);
    const detailTitleRef = useRef(null);
    const detailSecondaryRef = useRef(null);
    const detailDescriptionRef = useRef(null);
    const [active, setActive] = useState(false);
    
  
    useGSAP(() => {
        gsap.set(detailRef.current, {visibility: "hidden" });
    }, []);

    const showDetails = () => {
        if (active) return hideDetails();
        if (!detailRef.current || !cardRef.current) return;
    
        const state = Flip.getState(detailRef.current);
    
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.5 } });
    
        // 🪄 Animate Tech Items List
        tl.fromTo(
            detailRef.current.querySelectorAll(".tech-item"),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, stagger: 0.1, delay: 0.2 }
        );
        // 🪞 Animate Card Details & Background
        tl.to(detailRef.current, { autoAlpha: 1, height: '40rem' }, "<")
          .to(projectRef.current, { backgroundColor: 'rgba(35, 35, 35, 0.7)', zIndex: 1000 }, "<")
          .to(detailImageRef.current, { x: "-100%", scale: 0.9 }, "<")
          .to(cardRef.current, { width: '34rem', height: '36rem', x: '25%', y: '-30%', backgroundColor: "rgba(255, 205, 238, 1)" }, "<")
          .to(".home", { opacity: 0.2, duration: .25 });
    
        Flip.from(state, {
            duration: 0.5,
            scale: true,
            onComplete: () => gsap.set(detailRef.current, { overflow: "visible"})
        });
    
        setActive(true);
    };
    
    const hideDetails = () => {
        if (!detailRef.current || !cardRef.current || !active) return;
    
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.5 } });
    
        tl.to(detailImageRef.current, { x: 0, borderRadius: "1rem", duration: .75 }, "<")
        .to(cardRef.current, { x: "0%", y:"0", height: '20rem', width: '20rem', duration: .75, }, "<")
        .to(detailRef.current, { autoAlpha: 0, duration: .4 }, "<")
        .to(cardRef.current, { x: 0, y: 0, scale: 1, height: '20rem', width: '20rem', backgroundColor: "rgb(255, 205, 238, 0)", duration: .5, top: 0 })
        .to(detailImageRef.current, { scale: 1 }, "<")
        .to(projectRef.current, { backgroundColor: '#232323', zIndex: 0 }, "<")
        .to(".home", { opacity: 1, duration: 0.25 });

        setActive(false);
        setActiveCard(null);
    };
    return (
        <div className="project-card" ref={cardRef} onClick={showDetails}>
            <img className="image" src={imageUri} alt={title} ref={detailImageRef}/>
            <div className="card-details" ref={detailRef}>
                <div className="card-text" ref={detailContentRef}>
                    <h2 className="title" ref={detailTitleRef}>{title}</h2>
                    <p className="description" ref={detailDescriptionRef}>{description}</p>
                    <p className="secondary" ref={detailSecondaryRef}>Tech Used: </p>
                    <ul className='secondary'>
                        {techUsed.map((tech, index) => (
                            <li key={`${index}-tech`} className="tech-item">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-button">
                    <Link to={link}>
                        <button>Demo</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


