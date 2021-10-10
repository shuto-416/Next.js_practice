import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from './Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
