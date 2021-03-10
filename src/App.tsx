import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, Login, Reg, Detail } from './pages'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact component={HomePage} path={'/'}></Route>
          <Route component={Login} path={'/login'}></Route>
          <Route component={Reg} path={'/reg'}></Route>
          <Route component={Detail} path={'/detail/:id'}></Route>
          <Route render={() => <h2>404</h2>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
