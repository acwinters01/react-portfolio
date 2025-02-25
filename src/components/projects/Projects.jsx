import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './ProjectCard';
import '../../styles/projects.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Projects = (props) => {
    const containerRef = useRef();
    let iteration = 0;
    const [activeCard, setActiveCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        { 
            title: 'Jammming',
            description: `As part of a Codecademy project, I built 
            Jammming, a React app that integrates with the Spotify 
            API. Users can search for songs, create and sync custom 
            playlists to their Spotify account, and edit them directly 
            within the app. This project enhanced my skills in React 
            components, state management, API requests, and user 
            authentication, while also reinforcing best practices in 
            responsive design and version control.`, 

            techUsed: [ 'React', 'JavaScript', 'Git', 'GitHub', 'Jest', "Spotify API"],
            image: '/projectImages/Jammming.png', 
            link: 'https://acwinters01.github.io/jammming',
        },
        {
            title: 'St. Louis Skating Club',
            description: `This project was part of a Codecademy career 
            skill challenge, where I was tasked with creating a 
            responsive home page for a club website. I chose to recreate 
            and enhance the St. Louis Skating Club home page by focusing 
            on design and functionality. This project was by far the most 
            challenging I have undertaken, pushing my skills in CSS, 
            particularly when working with flexboxes and keyframe animations. 
            The primary objective was to ensure that the site was fully 
            responsive, providing an optimal viewing experience across all 
            devices. Through this project, I gained a deeper understanding 
            of advanced CSS techniques and learning how to implement complex 
            animations to create a visually engaging user experience.`,

            techUsed: ['HTML', 'CSS'],
            image: '/projectImages/SkatingClub_BG-Image.png',
            link: '',

        },
        {
            title: 'Mythic Echo Interactive',
            description: `This project involved creating a dynamic and visually 
            appealing company home page for a fictional game design studio, 
            Mystic Echo Interactive. Built entirely from scratch, the website 
            showcases a clean and modern design, leveraging the power of CSS 
            flexboxes to create a responsive and adaptable layout. I crafted 
            the logo using logo.com, ensuring it aligned with the creative and 
            immersive spirit of the company. The site is visually enriched with 
            high-quality images sourced from unsplash.com, which complement the 
            overall design and theme. The responsive design ensures that the 
            site provides an optimal viewing experience across all devices, 
            reflecting a professional and polished company presence. This project 
            was an excellent opportunity to deepen my understanding of CSS and 
            responsive web design principles, while also allowing me to explore 
            the creative aspects of branding and visual storytelling.`,

            techUsed: ['HTML', 'CSS'],
            image: '/projectImages/MythicEchoInteractive_BG-Image.png',
            link: '',
        },
        {
            title: 'DesignFlux Studio',
            description: `This project marks the beginning of my journey into 
            web development, where I was tasked with creating a fully functional 
            website design system from scratch. The design system was developed 
            to ensure consistency, scalability, and ease of use across the website. 
            It includes a cohesive set of UI components, color schemes, typography, 
            and layout principles. The website was one of my first forays into web 
            development, and through this project, I honed my skills in HTML and 
            CSS while learning the importance of a well-structured design system. 
            The final product is a reflection of my commitment to quality and 
            attention to detail, setting the foundation for my future work in 
            web development.`,

            techUsed: ['HTML', 'CSS'],
            image: '/projectImages/DesignFluxDtudio_BG-Image.png',
            link: '',
        },
        {
            title: 'Infinity Store',
            description: `Inspired by the new gacha game Infinity Nikki, I am currently 
            working on a store where users can browse through the games clothing as though 
            it was a real online store.`,
            techUsed: ['HTML', 'CSS', "Typescript", "React", "Redux"],
            image: '/projectImages/comingSoon.jpg',
        },

        // {
        //     title: 'The Glorified ToDo',
        //     description: ``,
        //     techUsed: ['HTML', 'CSS', ''],
        //     image: '',
        // },
        
        // {
        //     title: '',
        //     description: ``,
        //     techUsed: '',
        //     image: '',
        // },
       


    ];
    useGSAP(() => {
        if (!containerRef.current) return; 
 
        gsap.set(".project-card", { xPercent: 400, opacity: 0, scale: 0 });
        const cards = gsap.utils.toArray(".project-card");
        Array.prototype.map.call(cards, (card, i) => {
            card.dataset.index = i;

            card.addEventListener('click', () => {
                console.log(`Card ${i} clicked`);
            });
               
        });

        const endAnimationTime = 3000;
         // Ensuring spacing changes depending on amount of cards.
        const spacing = projects.length > 10 ? 0.1 : projects.length > 5 ? (0.2) : (0.5)
        const snapTime = gsap.utils.snap(spacing); 
        
        const animateFunc = element => {
            const timeline = gsap.timeline();
            timeline.fromTo(
                element,
                { scale: 0.3, opacity: 0.3 },
                {
                    scale: 1,
                    opacity: 1,
                    zIndex: 100, 
                    duration: 0.5, 
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.in", 
                    immediateRender: false,
                    overwrite: "true",
                },
            )
            .fromTo(
                element,
                { xPercent: 400 },
                {
                    xPercent: -400,
                    duration: 1,
                    ease: "none",
                    immediateRender: false,
                    overwrite: "true",
                }, 0
            );
            return timeline;
        };

        const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
        const playhead = {offset: 0};
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

        // Tween to smoothly scrub the playhead on the seamlessLoop
        let scrub = gsap.to(playhead, {
            offset: 0,
            onUpdate: () => seamlessLoop.time(wrapTime(playhead.offset)),
            duration: 1,
            ease: "power3",
            paused: true,
            overwrite: "true",
        });

        const trigger = ScrollTrigger.create({
            id: 'projectGalleryTrigger', 
            start: 0,
            onUpdate(self) {
                let scroll = self.scroll();
                if (scroll > self.end - 1) {
                    wrap(1, 2);
                } else if (scroll < 1 && self.direction < 0) {
                    wrap(-1, self.end - 2);
                } else {
                    scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                    scrub.invalidate().restart();
                }
            },
            end: `+=${endAnimationTime}`,
            pin: ".project-gallery",
        });

        const progressToScroll = (progress) => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
        const wrap = (iterationDelta, scrollTo) => {
            iteration += iterationDelta;
            trigger.scroll(scrollTo);
            console.log("iteration", iteration)
            console.log("Iteration Delta: ", iterationDelta)
            console.log("scrollTo", scrollTo)
            trigger.refresh();
        };

        ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));

        const scrollToOffset = (offset) => {
            let snappedTime = snapTime(offset);
            console.log("snapped time: ", snappedTime);
            console.log("fromOffset: ", seamlessLoop.duration())
            console.log("iteration ", iteration);
            let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
            let scroll = progressToScroll(progress);

            if (progress >= 1 || progress < 0) {
                return wrap(Math.floor(progress), scroll);
            } else if (progress == 1) {
                console.log('hey')
            } else {
                trigger.scroll(scroll);          
            }
            requestAnimationFrame(() => {
                trigger.refresh();
            });
        };

        let currentIndex = 0; // Track the current index globally
    
        const scrollToCard = (direction) => {
            //console.log("Direction:", direction);
        
            const totalCards = projects.length;
            //console.log("Total cards:", totalCards);
        
            // Calculate new index correctly
            let newIndex = currentIndex + direction;
        
            // Wrap around if exceeding bounds
            if (newIndex >= totalCards) newIndex = 0;
            if (newIndex < 0) newIndex = totalCards - 1;
        
            //console.log("New Index:", newIndex);
        
            // Calculate the snapped time based on the new index
            const snappedTime = gsap.utils.snap(spacing)(newIndex * spacing);
            //console.log("Snapped Time:", snappedTime);
        
            // Calculate the loop duration
            const loopDuration = seamlessLoop.duration();
            if (loopDuration === 0 || isNaN(loopDuration)) return;
            
        
            // Calculate the correct progress based on new index
            let progress = newIndex / (totalCards);
            //console.log("Calculated Progress:", progress);
        
            // Refresh before scrolling to card
            ScrollTrigger.refresh();
        
            // Animate to the snapped card
            seamlessLoop.progress(progress);
        
            // Update the current index
            currentIndex = newIndex;
        
            // Refresh the ScrollTrigger again to ensure it sticks
            requestAnimationFrame(() => trigger.refresh());
        };
       
        document.querySelector(".next")?.addEventListener("click", () => scrollToCard(1));
        document.querySelector(".prev")?.addEventListener("click", () => scrollToCard(-1));




        return () => {
            seamlessLoop?.kill();
            scrub?.kill();
            ScrollTrigger.removeEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));
            ScrollTrigger.killAll();
        }
    }, []);


    const buildSeamlessLoop = (items, spacing, animateFunc) => {
        const rawSequence = gsap.timeline({paused: true}); // where all the animation happens

        // scrubs the playhead of the rawSequence so that it appears to seamlessly loop
        const seamlessLoop = gsap.timeline({ 
            paused: true,
            repeat: -1,
            onRepeat() {
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            },
            onReverseComplete() {
                this.totalTime(this.rawTime() + this.duration() * 100);
            },
        });

        const cycleDuration = spacing * items.length;
        let dur;

        items.concat(items).concat(items).forEach((item, i) => {
            let anim = animateFunc(items[i % items.length]);
            rawSequence.add(anim, i * spacing);
            dur || (dur = anim.duration());
        });

        seamlessLoop.fromTo(
            rawSequence, 
            { time: cycleDuration + dur / 2 }, 
            {
                time: `+=${cycleDuration}`,
                duration: cycleDuration,
                ease: "none",
                overwrite: "true",
            }
        );
        return seamlessLoop;
    };

    return (
        <>
            <div className='projects'>
                <div className='project-gallery' ref={containerRef}>
                    <ul className="cards">
                        {projects.map((project, index) => (
                            <li key={index}>
                                <ProjectCard 
                                    title={project.title}
                                    description={project.description}
                                    techUsed={project.techUsed}
                                    imageUri={project.image}
                                    link={project.link}
                                    projectRef={containerRef}
                                    setActiveCard={setActiveCard}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className='actions'>
                        <button className='prev' >Prev</button>
                        <button className='next' >Next</button>
                    </div>
                </div>
            </div>
        </>
    );
};

