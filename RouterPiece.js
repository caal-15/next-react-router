import { BrowserRouter } from 'react-router-dom'
import InnerRoutes from './InnerRoutes'
import Navbar from './Navbar'

const RouterPiece = ({ children }) => {
  return typeof window !== 'undefined'
    ? <BrowserRouter>
        <Navbar />
        <InnerRoutes>{children}</InnerRoutes>
      </BrowserRouter>
    : <>{children}</>
}


export default RouterPiece

