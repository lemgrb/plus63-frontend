import '../styles/main.scss'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <header>
      <h1><Link href="/"><a><img src="/logo.webp" alt="Main logo of PCSOresults.today" width="64" height="64"/></a></Link></h1> 
      <a href="#" className="settings">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" class="bi bi-sliders" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
      </svg>
      </a>
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
