import { Route, Switch } from 'react-router-dom'

const InnerRoutes = ({ children }) => {

  return <Switch>
  <Route exact path={'/router'}><h1>Hello from a react router route</h1></Route>
  <Route exact path={'/otherrouter'}><h1>Hello from another react router route</h1></Route>
  <Route path='*'>{children}</Route>
</Switch>
}

export default InnerRoutes
