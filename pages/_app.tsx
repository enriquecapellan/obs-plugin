import type { AppProps } from 'next/app'
import '../assets/style.css'
import '../assets/panel.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
