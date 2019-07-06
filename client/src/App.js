import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plants from "./pages/Plants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          

          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Plants" component={Plants} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

