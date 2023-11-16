import Link from 'next/link'
import contactcss from './contact.module.css'
export default function Contact() {
   
    return (<div className={contactcss.contactPage}>
        <Link href='/'>
            <div className={contactcss.backButton}>
            </div>
        </Link>
        <form action="mailto:sandy1711003@gmail.com"
            method="POST"
            enctype="text/plain"
        >
            <h1>Contact</h1>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' placeholder='John Doe' type='text' />
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='johndoe@example.com' required type='email' />
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' type='textArea' />
            <button>Send</button>
            <p>Connect with me...</p>
            <div className={contactcss.connect}>

                <Link href={'https://www.linkedin.com/in/sandeep-singh-445058254/'}><img src='/linkedin.svg' /></Link>
                <Link href={'https://github.com/Sandy-1711'}><img src='/github.svg' /></Link>
                <Link href={'https://www.instagram.com/sandy_1711_/'}><img src='/instagram.svg' /></Link>
            </div>
        </form>
    </div>)
}