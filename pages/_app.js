import '../styles/main.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <header>
      <h1><Link href="/"><a><img src="/logo.webp" alt="Main logo of PCSOresults.today" width="64" height="64"/></a></Link></h1> 
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
