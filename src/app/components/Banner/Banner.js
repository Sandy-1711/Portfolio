'use client'
import { useLayoutEffect } from 'react'
import bcss from './banner.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Banner() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#banner1 p", {
            transform: 'translate(80%)',
            scrollTrigger: {
                trigger: `#bannermain`,
                scroller: 'body',
                start: "top 75%",
                end: 'top -50%',
                scrub: 1,
                // markers:true,
                // pin: true,
            }
        })
        gsap.to("#banner2 p", {
            transform: 'translate(80%)',
            scrollTrigger: {
                trigger: `#bannermain`,
                scroller: 'body',
                start: "top 75%",
                end: 'top -50%',
                scrub: 1,
                // pin: true,
            }
        })
        gsap.to("#banner4 p", {
            transform: 'translate(80%)',
            scrollTrigger: {
                trigger: `#bannermain`,
                scroller: 'body',
                start: "top 75%",
                end: 'top -50%',
                scrub: 1,
                // pin: true,
            }
        })
        gsap.to("#banner3 p", {
            transform: 'translate(-80%)',
            scrollTrigger: {
                trigger: `#bannermain`,
                scroller: 'body',
                start: "top 75%",
                end: 'top -50%',
                scrub: 1,
                // pin: true,
            }
        })
        gsap.to("#banner5 p", {
            transform: 'translate(-80%)',
            scrollTrigger: {
                trigger: `#bannermain`,
                scroller: 'body',
                start: "top 75%",
                end: 'top -50%',
                scrub: 1,
                // pin: true,
            }
        })
        
    })
    return (<div id='bannermain' className={bcss.main}>
        <div id='banner1' className={bcss.banner + ' ' + bcss.banner1}>
            <p  >GROW GROW GROW GROW GROW GROW GROW GROW GROW</p>
        </div>
        <div id='banner2' className={bcss.banner + ' ' + bcss.banner2}>
            <p  >PLAY PLAY PLAY PLAY PLAY PLAY PLAY PLAY PLAY</p>
        </div>
        <div id='banner3' className={bcss.banner + ' ' + bcss.banner3}>
            <p  >GOAL GOAL GOAL GOAL GOAL GOAL GOAL GOAL GOAL</p>
        </div>
        <div id='banner4' className={bcss.banner + ' ' + bcss.banner4}>
            <p  >WORK WORK WORK WORK WORK WORK WORK WORK WORK</p>
        </div>
        <div id='banner5' className={bcss.banner + ' ' + bcss.banner5}>
            <p  >HOPE HOPE HOPE HOPE HOPE HOPE HOPE HOPE HOPE</p>
        </div>
        
    </div>)
}