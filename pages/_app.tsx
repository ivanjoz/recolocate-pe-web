import '../styles/global.css'
import '../styles/inicio2.css'
import '@brainhubeu/react-carousel/lib/style.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  globalThis['nextRouter'] = router
  return <Component {...pageProps}/>
}
export default MyApp
