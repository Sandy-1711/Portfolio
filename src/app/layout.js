import './globals.css'
import LocoScroll from '../../hooks/LocoScroll/LocoScroll'


export const metadata={
  title:'Sandeep Singh',
}
// export const metadata = {
//   title: 'Sandeep Singh',
//   description: 'Web Developer',
// }

export default function RootLayout({ children }) {
 

  return (

    <html lang="en">
      <body >
        <div data-scroll-container>
          {children}
        </div>
      </body>
      {/* <Script src='./scripts.js'></Script> */}
    </html>
  )
}
