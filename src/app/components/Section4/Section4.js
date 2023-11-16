'use client'
import { useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Butterfly from '../Butterfly/Butterfly'
import sec4css from './sec4.module.css'
import featcss from './feature.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Dots from '../Dots/Dots'
export default function Section4() {
    const isMobile = useMediaQuery({
        query: '(max-width:850px)'
    })
    useLayoutEffect(function () {
        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();
            tl.to('#sec4container2', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scrollTrigger: {
                    trigger: '#sec4main',
                    scroller: 'body',
                    start: "top top",
                    end: "top -100%",
                    // pin: true,
                    scrub: 1,
                }
            })
            tl.to('#hwrapper', {
                x: '-200vw',
                scrollTrigger: {
                    trigger: '#sec4main',
                    scroller: 'body',
                    start: "top -100%",
                    end: "top -300%",
                    // pin:true,
                    scrub: 1,
                }
            })
            tl.to('#hwrapper', {
                scrollTrigger: {
                    trigger: '#sec4main',
                    scroller: 'body',
                    start: "top top",
                    end: "top -300%",
                    pin: true,
                    scrub: 1,
                }
            })

        }
        // window?.addEventListener('resize', function () {
        //     if (isMobile) {
        //         window.location.reload();
        //     }
        // })

    })
    return (<div id='sec4main' className={sec4css.main}>
        <div id='hwrapper' className={sec4css.hwrapper}>
            <div className={sec4css.something}>
                <div className={sec4css.container}>
                    <img src='/butterfly.svg' />
                    <h1>FEATURED</h1>
                    <div className={featcss.dots}>
                        <Dots />
                    </div>
                </div>
                <div id='sec4container2' className={sec4css.container2}>
                    <img src='/butterfly1.svg' style={{ color: 'white' }} />
                    <h1>FEATURED</h1>
                    <div className={featcss.dots}>
                        <Dots />
                    </div>
                </div>
            </div>

            <div id='feature1' className={featcss.feature + ' ' + featcss.featured1}>
                <div className={featcss.text}>
                    <h1>WEB</h1>
                    <h1>ACCURACY</h1>
                    <a href='https://web-accuracy.netlify.app'><button>VIEW</button></a>
                </div>
                <div className={featcss.images}>
                    <img src='/Featured1-desktop.png' />
                    <img src='/Featured1-mobile.png' />
                </div>
            </div>
            <div id='feature2' className={featcss.feature + ' ' + featcss.featured2}>
                <div className={featcss.text}>
                    <h1>PANPIE</h1>
                    <h1>Clone</h1>
                    <a href='https://sandy-1711.github.io/FoodOrderClone/'><button>VIEW</button></a>
                </div>
                <div className={featcss.images}>
                    <img src='/Featured2-desktop.png' />
                    <img src='/Featured2-mobile.png' />
                </div>
            </div>

            <div className={featcss.mobileFeatures}>
                <div className={featcss.mobilefeature}>
                    <div className={featcss.featureimg}>
                        <img src='/Featured1-desktop.png' />
                    </div>
                    <div className={featcss.featureInfo}>
                        <h2>WEB ACCURACY</h2>
                        <p>Web Accuracy is a startup that focuses on giving reliable and top notch support for various type of services.</p>
                        <a target='blank' href='https://web-accuracy.netlify.app'><button>VIEW</button></a>
                    </div>
                </div>

                <div className={featcss.mobilefeature}>
                    <div className={featcss.featureimg}>
                        <img src='/Featured2-desktop.png' />
                    </div>
                    <div className={featcss.featureInfo}>
                        <h2>PANPIE CLONE</h2>
                        <p>A clone for a food delivery website.</p>
                        <a target='blank' href='https://sandy-1711.github.io/FoodOrderClone/'><button>VIEW</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}