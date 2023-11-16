'use client'
import { useLayoutEffect } from 'react'
import Boat from './Boat'
import jcss from './journey.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Dots from '../Dots/Dots'
export default function Journey() {
    useLayoutEffect(function(){
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(`.${jcss.circle}`,{
            x:-150,
            opacity:0,
            stagger:0.2,
            scrollTrigger:{
                trigger:`.${jcss.circles}`,
                scroller:'body',
                start:"top center",
                end:"top top",
                scrub:2,
            }
        })
    })
    return (<div className={jcss.main}>
        <div className={jcss.text}>
            <Boat />
            <h1>JOURNEY</h1>
            <p>My journey till now</p>
            <Dots/>
        </div>
        <div className={jcss.circles}>
            <div className={jcss.circle} style={{ '--i': '0' }}>
                <i>O.S. Contributor</i>
                <p>Self-employed</p>
                <p>Present</p>

            </div>
            <div className={jcss.circle} style={{ '--i': '1' }}>

                <i>Freelance Developer</i>
                <p>Self-employed</p>
                <p>Present</p>
            </div>
            <div className={jcss.circle} style={{ '--i': '2' }}>
                <i>Frontend Intern</i>
                <p>Web Accuracy</p>
                <p>Present</p>

            </div>
            <div className={jcss.circle} style={{ '--i': '3' }}>
                <i>Web Development</i>
                <p>Udemy</p>
                <p>2022-2023</p>
            </div>
            <div className={jcss.circle} style={{ '--i': '1' }}>
                <i>Intermediate</i>
                <p>The Chintels School</p>
                <p>2022</p>
            </div>
            <div className={jcss.circle} style={{ '--i': '2' }}>
                <i>High School</i>
                <p>The Chintels School</p>
                <p>2020</p>
            </div>
        </div>
    </div>)
}