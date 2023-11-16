import Link from 'next/link'
import footcss from './footer.module.css'
export default function Footer() {
    return <div className={footcss.footer}>
        <div className={footcss.text}>
            <div className={footcss.text}>
                <h1>LET&apos;S<br /> CONNECT</h1>
                <div className={footcss.contact}>

                    <h2>CONTACT</h2>
                    <Link href={'/contact'}>
                        <p>sandy1711003@gmail.com</p>
                    </Link>
                </div>
                <div>

                    <h2>ON THE WEB</h2>
                    <Link target='blank' href='https://www.linkedin.com/in/sandeep-singh-445058254/'>LinkedIn</Link>
                    <Link target='blank' href='https://github.com/Sandy-1711'>Github</Link>
                    <Link target='blank' href='https://www.instagram.com/sandy_1711_/'>Instagram</Link>
                </div>
            </div>
            <div className={footcss.copysection}>
                <span>Developed by </span>
                <span>Sandeep Singh</span>
                <span>Design Inspiration -</span>
                <Link href='https://omkargosavi.com/'><span>Omkar Gosavi</span></Link>
            </div>

        </div>
        <div className={footcss.imageBox}>
            <img src='/Plane.png' />
        </div>
    </div>
}