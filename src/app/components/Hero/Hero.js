'use client'
import { useLayoutEffect } from 'react'
import herocss from './hero.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Hero() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(`.${herocss.snameContainer}`, {
            transform: ' translate(var(--x),var(--y))',
            duration: 2,
            // delay: 0.5,
        })
        gsap.from(`.${herocss.snameContainer} span`, {
            transform: ' rotateZ(var(--i)) rotateX(var(--j))',
            duration: 2,
            opacity: 0,
            // delay: 0.5,
        })
        gsap.to(`.${herocss.fname}`,{
            x:-200,
            scrollTrigger:{
                trigger:`.${herocss.main}`,
                scroller:'body',
                start:'bottom bottom',
                end:'bottom center',
                scrub:1,
            }
        })
        gsap.to(`.${herocss.sname}`,{
            x:200,
            scrollTrigger:{
                trigger:`.${herocss.main}`,
                scroller:'body',
                start:'bottom bottom',
                end:'bottom center',
                scrub:1,
            }
        })
        gsap.to(`.${herocss.title} .${herocss.snameContainer}`,{
            y:-400,
            stagger:0.005,
            scrollTrigger:{
                trigger:`.${herocss.main}`,
                scroller:'body',
                start:'bottom bottom',
                end:'bottom center',
                scrub:1,
            }
        })
        
    })
    return (<div className={herocss.main}>
        {/* <div className={herocss.scrolltext}><div><span>Scroll down</span><span className={herocss.line}></span></div></div> */}
        <div className={herocss.text}>
            <div className={herocss.fname}>
                <div className={herocss.snameContainer} style={{ '--i': '180deg', '--j': '90deg', '--x': '0', '--y': '0' }}><span>S</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-100deg', '--j': '-145deg', '--x': '200px', '--y': '0px' }}><span>A</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-120deg', '--j': '-100deg', '--x': '200px', '--y': '-200px' }}><span>N</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-45deg', '--j': '145deg', '--x': '200px', '--y': '-200px' }}><span>D</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '90deg', '--j': '100deg', '--x': '0px', '--y': '40px' }}><span>E</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-45deg', '--j': '160deg', '--x': '200px', '--y': '100px' }}><span>E</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '45deg', '--j': '150deg', '--x': '200px', '--y': '-100px' }}><span>P</span></div>
            </div>
            <div className={herocss.sname}>
                <div className={herocss.snameContainer} style={{ '--i': '0deg', '--j': '-120deg', '--x': '0px', '--y': '0px' }}><span>S</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-100deg', '--j': '150deg', '--x': '200px', '--y': '200px' }}><span>I</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-160deg', '--j': '-280deg', '--x': '200px', '--y': '100px' }}><span>N</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '152deg', '--j': '100deg', '--x': '200px', '--y': '-100px' }}><span>G</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-100deg', '--j': '160deg', '--x': '200px', '--y': '200px' }}><span>H</span></div>
            </div>
            <div className={herocss.title}>
                <div className={herocss.snameContainer} style={{ '--i': '90deg', '--j': '190deg', '--x': '200px', '--y': '0px' }}><span>W</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '40deg', '--j': '150deg', '--x': '200px', '--y': '0px' }}><span>e</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '60deg', '--j': '140deg', '--x': '400px', '--y': '0px' }}><span>b</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '15deg', '--j': '-130deg', '--x': '400px', '--y': '0px' }}><span>:</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-50deg', '--j': '140deg', '--x': '500px', '--y': '0px' }}><span>D</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '40deg', '--j': '160deg', '--x': '500px', '--y': '0px' }}><span>e</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-60deg', '--j': '180deg', '--x': '600px', '--y': '0px' }}><span>v</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '100deg', '--j': '-160deg', '--x': '600px', '--y': '0px' }}><span>e</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '120deg', '--j': '140deg', '--x': '700px', '--y': '0px' }}><span>l</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-20deg', '--j': '180deg', '--x': '700px', '--y': '0px' }}><span>o</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-120deg', '--j': '-130deg', '--x': '800px', '--y': '0px' }}><span>p</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '-10deg', '--j': '-150deg', '--x': '800px', '--y': '0px' }}><span>e</span></div>
                <div className={herocss.snameContainer} style={{ '--i': '50deg', '--j': '40deg', '--x': '900px', '--y': '0px' }}><span>r</span></div>
            </div>
        </div>
    </div>)
}