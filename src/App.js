import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PersonalInfo from './pages/PersonalInfo';
import Header from './components/Header';
const routes = [
  {
    path: "/register",
    component: SignUp
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/my-info",
    component: PersonalInfo
  }
];
function App() {
  return (
    <div>
    <Header/>
    <Router>
      <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          {
            routes.map((route, i)=>{
              return(
              <Route key={i} path={route.path}>
                <route.component/>
              </Route>
              )
            })
          }
        </Switch>
    </Router>
    </div>
  );
}

export default App;
