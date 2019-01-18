import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import Projectdetails from './components/projects/Projectdetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Createproject from './components/projects/Createproject'



class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <ProtectedRoute exact path="/" component={Dashboard} />
              <ProtectedRoute path="/project/:id" component={Projectdetails} />
              <ProtectedRoute path="/create" component={Createproject} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
