"use client"
import { useEffect, useLayoutEffect } from "react";
import Section1 from "./components/Section1/Section1";
import Loading from "./components/Loading/Loading";
import Nav from "./components/Nav/Nav";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Journey from "./components/Journey/Journey";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import gsap, { Power0 } from "gsap";
import LocoScroll from "../../hooks/LocoScroll/LocoScroll";
import Hero from "./components/Hero/Hero";

export default function Page() {
  LocoScroll(true);

  useLayoutEffect(function () {

    document.querySelector('.wrapper').addEventListener('mousemove', function (e) {
        var x1 = e.clientX - 75;
        var y1 = e.clientY - 75;
        var x2 = e.clientX - 50;
        var y2 = e.clientY - 50;
        var x3 = e.clientX - 25;
        var y3 = e.clientY - 25;
        // console.log(y);
        gsap.to('.mouse1', {
            // x: x,
            left: x1,
            top: y1,
            ease: Power0.easeInOut,
            // y: y,
        })
        gsap.to('.mouse2', {
            // x: x,
            left: x2,
            top: y2,
            // delay:0.1,
            ease: Power0.easeInOut,
            // y: y,
        })
        gsap.to('.mouse3', {
            // x: x,
            left: x3,
            top: y3,
            // y: y,
        })
        
    })
})
  return <div className='wrapper' >
    <div>

      <div id='mouse1' className={'mouse1'}></div>
      <div id='mouse2' className={'mouse2'}></div>
      <div id='mouse3' className={'mouse3'}></div>
{/* 
      <div id="container">
        <div id="circle">
          <svg x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" space="preserve">
            <defs>
              <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use href="#circlePath" fill="none" />
              <text fill="#000">
                <textPath href="#circlePath">Text rotating around a circle path with SVG!</textPath>
              </text>
            </g>
          </svg>
        </div>
      </div> */}
      <Nav />
      <Hero/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Journey/>
      {/* <Banner/> */}
      <Projects />
      <Footer/>

    </div>
  </div>
}