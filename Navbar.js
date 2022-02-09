import { Link } from "react-router-dom"

const Navbar = () => {
  return <>
      <a href='/'>To Home | {' '}</a>
      <Link to='/router'>To Router | {' '}</Link>
      <a href='/otherssr'>To another SSR page | {' '}</a>
      <Link to='/otherrouter'>To another Router | {' '}</Link>
    </>

}

export default Navbar
