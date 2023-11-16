"use client"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useState } from 'react'
import loadingcss from './loading.module.css'
export default function Loading() {
    function time() {

        var a = 0;
        setInterval(function () {
            a += Math.floor(Math.random() * 10)
            if (a < 100) {
                document.querySelector(`.${loadingcss.homePage} h1`).innerHTML = a + " %";
            }
            else {
                a = 100;
                document.querySelector(`.${loadingcss.homePage} h1`).innerHTML = a + " %";
            }
        }, 100)

    }
    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        tl.to(`.${loadingcss.homePage} h1`, {
            duration: 1,
            delay:0.5,
            scrub:1,
            onStart: time()
        })
        tl.to(`.${loadingcss.homePage}`,{
            top:'-100vh',
            duration:1,
            delay:1,
            scrub:1,
        })
    }, [])
    return (<div className={loadingcss.homePage}>
        <h1>0 %</h1>
    </div>)
}