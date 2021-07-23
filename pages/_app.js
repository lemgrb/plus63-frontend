import '../styles/main.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <header>
      <h1 className="text-center"><Link href="/">plus63.co</Link></h1> 
    </header>
    <div className="container-fluid">
      <Component {...pageProps} />
    </div>
    <footer>
      <p className="text-center">copyright &copy; 2021</p>
    </footer>
    </>
  )
}

export default MyApp
