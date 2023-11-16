import sec2css from './sec2.module.css'
export default function Section2() {

    const core = [
        { item: 'HTML' },
        { item: 'CSS' },
        { item: 'JS' }]
    const libandframeworks = [
        { item: 'React' },
        { item: 'Next.JS' },
        { item: 'GSAP' },
        { item: 'Locomotive Scroll' },
        { item: 'Node.JS' },
        { item: 'Express.JS' },
        { item: 'MongoDB' },
        { item: 'Mongoose' },
    ]
    const tools = [
        { item: 'Git' },
        { item: 'GitHub' },
        { item: 'Figma' },
        { item: 'Vercel' },
        { item: 'Netlify' },
    ]
    function createItem(item, index) {
        return <div key={index} className={sec2css.item}><h1>{item.item}</h1></div>

    }

    return <div className={sec2css.main}>
        <div className={sec2css.heading}>
            <h1>SKILLS</h1>
            <p>My current areas of proficiency</p>
        </div>
        <div className={sec2css.table}>
            <div className={sec2css.row}>
                <h2>Core</h2>
                <div className={sec2css.itembox}>
                    {core.map(createItem)}
                </div>
            </div>
            <div className={sec2css.row}>
                <h2>Libraries & Frameworks</h2>
                <div className={sec2css.itembox}>
                    {libandframeworks.map(createItem)}
                </div>
            </div>
            <div className={sec2css.row}>
                <h2>Tools & Platforms</h2>
                <div className={sec2css.itembox}>
                    {tools.map(createItem)}
                </div>
            </div>
        </div>
    </div>
}