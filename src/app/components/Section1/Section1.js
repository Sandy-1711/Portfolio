'use client'
import { useLayoutEffect } from 'react';
import section1css from './section1css.module.css'
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

export default function Section1() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.${section1css.text1} h2 span`,{
            y:10,
            stagger:0.09,
            opacity:0,
            scrollTrigger:{
                trigger:`.${section1css.page}`,
                start:"top 75%",
                end:'top center',
                scroller:'body',
                scrub:1,
            }
        })
    })
    return (<div className={section1css.page} >
        <div className={section1css.text1}>
            <h2><span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span>,</span>

            </h2>
            <p>&quot;I am Sandeep Singh, an experienced frontend developer with a passion for crafting engaging user experiences. Welcome to my portfolio.&quot; </p>
        </div>
        <div className={section1css.portrait}>
            <Image height={1000} width={1000} src="/sandy.jpg" alt='sandy' />
        </div>
        <div className={section1css.text2}>
            <p>With <strong>2 years</strong> of experience and a strong foundation in web development, I am a dedicated developer. I&apos;m skilled in languages like HTML, CSS and Javascript. I&apos;m enthusiastic about staying informed on the latest trends while eagerly embracing new technologies and frameworks.</p>
            <p>I have developed numerous visually stunning and satisfying frontend websites, incorporating cutting-edge technologies reminiscent of those featured on <strong>Awwwards.</strong></p>
            <p>I&apos;ve adeptly crafted a collection of full-stack projects that operate seamlessly, incorporating authentication, data association, and other relevant features. These projects were developed using languages such as <strong>Node.js, MongoDB, Mongoose, Express, React and Next.</strong></p>
            <p>I&apos;ve worked with <strong>startup agencies</strong> and my contribution to them have positively impacted their businesses.</p>
            <p>I&apos;m deeply passionate about the <strong>Open Source</strong> community and actively engage in contributing to various open-source projects.</p>
            <div className={section1css.contactButton}>
                <a href='/contact'><button>Contact</button></a>
            </div>
        </div>
    </div>)
}