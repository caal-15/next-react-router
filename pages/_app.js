import '../styles/globals.css'
import RouterPiece from '../RouterPiece'

function MyApp({ Component, pageProps }) {
  return <RouterPiece>
    <Component {...pageProps} />
  </RouterPiece>
}

export default MyApp
