import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from "./components/auth/SingIn";
import SignUp from './components/auth/SingUp';
import Profile from "./components/auth/Profile";
// import CreateProject from './components/projects/CreateProject'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />

            {/* <Route path='/project/:id' component={ProjectDetails} /> */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={Profile} />
            {/* <Route path='/create' component={CreateProject} /> */}
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
