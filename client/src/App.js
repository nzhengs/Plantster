import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plants from "./pages/Plants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import MoreDetail from "./pages/Moredetails"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          
          <Route exact path="/" component={Plants} />
          <Route exact path="/Plants" component={Plants} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
