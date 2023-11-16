import { useEffect } from 'react'
import navcss from './navcss.module.css'
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
export default function Nav() {
    useEffect(function () {
        // gsap.registerPlugin(ScrollTrigger);
        // const tl = gsap.timeline();
        // tl.from(`.${navcss.navbar}`, {
        //     y: -100,
        //     duration: 0.5,
        //     delay: 0.5,
        // })

    })
    return (<div className={navcss.navbar}>

        <div className={navcss.left}><p>SS</p></div>
        {/* <div className={navcss.middle}><div>
            <a href='/twitter.com'><img src='/twitter.svg'/></a>
            <a><img src='/linkedin.svg'/></a>
            <a><img src='/instagram.svg'/></a>
            <a><img src='/github.svg'/></a>
        </div></div> */}
        <Link href={'/contact'}>
        <div className={navcss.right}><p>Connect</p></div>
        </Link>
    </div>)
}