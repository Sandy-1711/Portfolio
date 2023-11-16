import './globals.css'
import LocoScroll from '../../hooks/LocoScroll/LocoScroll'
import Loading from './components/Loading/Loading'


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
        {/* <Loading /> */}

          {children}
        </div>
      </body>
      {/* <Script src='./scripts.js'></Script> */}
    </html>
  )
}
