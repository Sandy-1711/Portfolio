'use client'
import gsap from "gsap";
import pcss from './project.module.css'
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react"
import Dots from "../Dots/Dots";

export default function Projects() {

    useLayoutEffect(function () {

        gsap.registerPlugin((ScrollTrigger));
        const tl = gsap.timeline();
        gsap.to(`.${pcss.text}`, {
            repeat: true,
            scrollTrigger: {

                trigger: `.${pcss.text}`,
                scroller: 'body',
                start: 'top bottom',
                end: 'top 75%',
                scrub: 1,

            },
            onComplete: call
        })

        gsap.from('#project1', {
            scale: 0.25,
            scrollTrigger: {
                trigger: '#project1',
                scroller: 'body',
                start: "top bottom",
                end: "top 25%",
                scrub: 1,
            }
        })

        gsap.from('#project2', {
            scale: 0.25,
            scrollTrigger: {
                trigger: '#project2',
                scroller: 'body',
                start: "top bottom",
                end: "top 25%",
                scrub: 1,
            }
        })

        gsap.from('#project3', {
            scale: 0.25,
            scrollTrigger: {
                trigger: '#project3',
                scroller: 'body',
                start: "top bottom",
                end: "top 25%",
                scrub: 1,
            }
        })

        function call() {

            tl.to('#texth1 span', {
                top: '0%',
                stagger: 0.05,
                // height:'100%',
            })
            tl.to('#textpright', {
                height: '100%',
                opacity: 1
            })
            tl.to('#textp p', {
                transform: 'translate(0)',
            })
            tl.to('#dots', {
                opacity: 1,
            })
        }
    })
    return <div className={pcss.text}>

        <div id="texth1" className={pcss.texth1}>
            {/* <h1>PROJECTS</h1> */}
            {/* <h1> */}
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
            {/* </h1> */}
        </div>
        <div id='textp' className={pcss.textp}>
            {/* <div id='textpleft' className={pcss.textpleft}></div> */}
            <div id='textpright' className={pcss.textpright}></div>
            <p>Project Showcase</p>
        </div>
        <div id='dots' style={{ opacity: 0 }}>

            <Dots />
        </div>
        <div className={pcss.projects}>
            <div id="project1" className={pcss.project}>
                <div>
                    <h1>01</h1>
                    <p>Portfolio</p>
                </div>
                <img src="/sandy.jpg" />
            </div>
            <div id="project2" className={pcss.project}>
                <div>
                    <h1>02</h1>
                    <p>MyBook</p>
                </div>
                <a href="https://sandy-1711.github.io/MyBook/#/"><img src="/Project2.png" /></a>
            </div>
            <div id="project3" className={pcss.project}>
                <div>
                    <h1>03</h1>
                    <p>Hostel Management</p>
                </div>
                <a href="https://g-five-hackfest-23.github.io/Hostel-Management/studentportal.html">
                    <img src="/Project3.png" />
                </a>
            </div>
        </div>
    </div>
}