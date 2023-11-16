'use client'
import { useEffect, useLayoutEffect } from 'react';
import sec3css from './sec3.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';
export default function Section3() {
    const isMobile = useMediaQuery({
        query: '(max-width:850px)'
    })
    const text = "Web development, where code meets creativity.";
    function createText() {
        const textBox = document.getElementById('text');

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.innerHTML = text[i];
            textBox.appendChild(span);
        }
    }
    useLayoutEffect(function () {
        createText()
        gsap.registerPlugin(ScrollTrigger)
        
        gsap.to('#text span', {
            duration: .2,
            color: "var(--textColor)",
            webkitTextStrokeWidth: '0px',
            stagger: 1,
            scrollTrigger: {
                trigger: '#sec3main',
                scroller: 'body',
                start: !isMobile?"top top":"top center",
                end: !isMobile?"top -150%":"top 25%",
                pin: !isMobile,
                scrub: 1,
            }
        })


    })
    return (<div id='sec3main' className={sec3css.main}>
        <div id='text' className={sec3css.text}>

        </div>
    </div>)
}