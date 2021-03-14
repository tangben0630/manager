import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HomePage, Login, Reg, Detail } from './pages'
import { Shop } from './pages/shoppingCart'
import { useSelector } from './redux/hooks'

const PrivateRoute = ({ component, isLogin, ...rest }) => {
  const routeComponent = (props): any => {
    isLogin ? React.createElement(component, props) : <Redirect to={{ pathname: '/login ' }} />
  }
  return <Route render={routeComponent} {...rest}></Route>
  if (0) {

  }
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact component={HomePage} path={'/'}></Route>
          <Route component={Login} path={'/login'}></Route>
          <Route component={Reg} path={'/reg'}></Route>
          <Route component={Detail} path={'/detail/:id'}></Route>
          <PrivateRoute path='/shoppingCart' component={Shop} isLogin={true}></PrivateRoute>
          <Route render={() => <h2>404</h2>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
