import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch"


function App() {
  return (
   <Router>
     <div>
    <Nav />
    <Switch>
    <Route exact path="/">
        <Search/>
    </Route>
    <Route exact path="/saved">
      <Saved/>
    </Route>
    <Route path="*">
     <NoMatch></NoMatch>
     </Route>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
