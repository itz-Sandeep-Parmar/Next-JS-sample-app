import { SessionProvider} from 'next-auth/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <SessionProvider session={pageProps.session}>
  return <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp
