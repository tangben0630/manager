import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HomePage, Login, Reg, Detail, Shop } from './pages'
import { useSelector } from './redux/hooks'

const PrivateRoute = ({ component, isLogin, ...rest }) => {
  console.log(isLogin, 'isLogin', component);

  const routeComponent = (props): any => {
    return isLogin ? React.createElement(component, props) : <Redirect to={{ pathname: '/login' }} />
  }
  console.log(routeComponent, 'routeComponent');
  return <Route render={routeComponent} {...rest}></Route>
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
