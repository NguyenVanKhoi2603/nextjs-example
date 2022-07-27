import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyLayout from 'components/layouts/MyLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}

export default MyApp
