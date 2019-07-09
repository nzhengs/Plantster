import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plants from "./pages/Plants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Tessel from "./pages/Tessel"
import axios from "axios";
import {Component} from "react"

class App extends Component{
constructor() {
  super()
  this.state = {
    loggedIn: false,
    username: null
  }

  this.getUser = this.getUser.bind(this)
  this.componentDidMount = this.componentDidMount.bind(this)
  this.updateUser = this.updateUser.bind(this)
}

componentDidMount() {
  this.getUser()
}

updateUser (userObject) {
  this.setState(userObject)
}

getUser() {
  axios.get('/api/user/').then(response => {
    console.log('Get user response: ')
    console.log(response.data)
    if (response.data.user) {
      console.log('Get User: There is a user saved in the server session: ')

      this.setState({
        loggedIn: true,
        username: response.data.user.username
      })
    } else {
      console.log('Get user: no user');
      this.setState({
        loggedIn: false,
        username: null
      })
    }
  })
}

  render() {
    return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" render={(props) => <Login {...props} updateUser={this.updateUser} />} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Plants" component={Plants} />
          <Route exact path="/Tessel" component={Tessel} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;

