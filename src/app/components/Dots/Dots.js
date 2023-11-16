import dotscss from './dots.module.css'
import gsap from 'gsap'
export default function Dots() {
    return (<div className={dotscss.dotsContainer}>
        <div className={dotscss.dot}></div>
        <div className={dotscss.dot}></div>
        <div className={dotscss.dot}></div>
    </div>)
}